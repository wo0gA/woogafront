import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const ChattingPage = forwardRef((props, ref) => {
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [visitorUserEmail, setVisitorUserEmail] = useState(null);
  const [sortedEmails, setSortedEmails] = useState(null);
  const [messages, setMessages] = useState([]);
  const messageInputRef = useRef(null);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender_email: data.sender_email, text: data.message },
        ]);
      };
    }
  }, [socket]);

  useImperativeHandle(ref, () => ({
    loginAsUser,
  }));

  const loginAsUser = async (email) => {
    setCurrentUserEmail(email);
    const visitorEmail = email === 'qw@naver.com' ? 'er@naver.com' : 'qw@naver.com';
    setVisitorUserEmail(visitorEmail);
    await openOrCreateRoom(email, visitorEmail);
  };

  const openOrCreateRoom = async (email, visitorEmail) => {
    if (socket) {
      socket.close();
    }

    const emails = [email, visitorEmail].sort();
    setSortedEmails(emails);

    const response = await fetch('http://server.templ.es/chat/rooms/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shop_user_email: emails[0],
        visitor_user_email: emails[1],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const roomData = await response.json();
    setCurrentRoomId(roomData.id);
    setMessages(roomData.messages);
    setupWebSocket(roomData.id);
  };

  const setupWebSocket = (roomId) => {
    const newSocket = new WebSocket(`ws://server.templ.es/ws/room/${roomId}/messages`);
    setSocket(newSocket);
  };

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (message && socket) {
      const messagePayload = {
        sender_email: currentUserEmail,
        message,
        shop_user_email: sortedEmails[0],
        visitor_user_email: sortedEmails[1],
      };
      socket.send(JSON.stringify(messagePayload));
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender_email: currentUserEmail, text: message },
      ]);
      messageInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        sendMessage(currentUserEmail);
      }
    };

    const messageInput = messageInputRef.current;
    messageInput.addEventListener('keyup', handleKeyUp);

    return () => {
      messageInput.removeEventListener('keyup', handleKeyUp);
    };
  }, [currentUserEmail, sendMessage]);

  return (
    <div>
      <div>
        <button onClick={() => loginAsUser('qw@naver.com')}>Login as qw@naver.com</button>
        <button onClick={() => loginAsUser('er@naver.com')}>Login as er@naver.com</button>
      </div>
      <div id="chat-messages" ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-bubble ${message.sender_email === currentUserEmail ? 'sent' : 'received'}`}
          >
            {message.sender_email}: {message.text}
          </div>
        ))}
      </div>
      <textarea id="message-input" ref={messageInputRef}></textarea>
      <button id="send-btn" onClick={sendMessage}>Send</button>
    </div>
  );
});

export default ChattingPage;
