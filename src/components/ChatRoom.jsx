import React, { useEffect, useState } from "react";
import webSocketService from "../services/websocket";

import React, { useEffect, useState } from "react";
import webSocketService from "../services/websocket";

const ChatRoom = ({ roomId, currentUserEmail }) => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");

	useEffect(() => {
		// WebSocket 연결 설정
		webSocketService.connect(roomId, (messageData) => {
			// 수신된 메시지를 상태에 추가하여 실시간으로 갱신
			setMessages((prevMessages) => [...prevMessages, messageData]);
		});

		// 언마운트 시 WebSocket 연결 해제
		return () => {
			webSocketService.disconnect();
		};
	}, [roomId]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// WebSocket을 통해 새 메시지 전송
		webSocketService.sendMessage({
			sender_email: currentUserEmail,
			text: newMessage,
		});
		setNewMessage("");
	};

	return (
		<div>
			<h2>Chat Room {roomId}</h2>
			<div>
				{messages.map((message, index) => (
					<div
						key={index}
						style={{
							textAlign:
								message.sender_email === currentUserEmail ? "right" : "left",
							backgroundColor:
								message.sender_email === currentUserEmail
									? "#e6f7ff"
									: "#f6f6f6",
							padding: "10px",
							margin: "5px 0",
							borderRadius: "10px",
							maxWidth: "60%",
							marginLeft:
								message.sender_email === currentUserEmail ? "auto" : "0",
							marginRight:
								message.sender_email === currentUserEmail ? "0" : "auto",
						}}
					>
						<strong>
							{message.sender_email === currentUserEmail
								? "Me"
								: message.sender_email}
							:
						</strong>{" "}
						{message.text}
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					placeholder="Type a message..."
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default ChatRoom;
