import React, { useEffect, useState } from "react";
import webSocketService from "../apis/websocket";

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
		<section class="flex flex-col flex-1">
			<div class="flex items-center justify-between p-4 bg-yellow-100">
				<div class="flex items-center space-x-2">
					<div
						class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
						data-v0-t="badge"
					>
						대여
					</div>
					<span class="font-semibold">잉잉</span>
					<span class="text-sm text-muted-foreground">2시간 전</span>
				</div>
				<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-red-500">
					거래 취소
				</button>
			</div>
			<div class="flex-1 p-4 overflow-y-auto bg-yellow-50">
				<div class="space-y-4">
					<div class="text-center text-sm text-muted-foreground">
						2024년 7월 30일
					</div>
					<div class="flex flex-col">
						<div class="self-start p-2 bg-white rounded-lg shadow">
							텍스트필드는 이렇습니다... 패딩값 세로15, 가로20. 폰트 16pt이에요
							최대 확장길이는 600이고, 내가보낸 건 constraints top&amp;right
							입니다.
						</div>
						<div class="self-end p-2 mt-2 bg-white rounded-lg shadow">
							내가보낸 채팅 사이 간격은 10 으로 부탁드리고요...
						</div>
						<div class="self-start p-2 mt-2 bg-white rounded-lg shadow">
							남이보낸 건 constraints top&amp;left 입니다. 글고 남이 보낸 채팅
							사이와 내가 보낸 채팅 사이 간격은 20으로 부탁드려요. 글고 남이보낸
							건 fill은 amber 100으로 채워주세요
						</div>
						<div class="self-end p-2 mt-2 bg-white rounded-lg shadow">
							요 채팅 프레임 전체의 패딩값은 20이라서.. 채팅 말풍선 좌우측
							간격은 20이에요
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-center p-4 border-t">
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
					type="text"
					placeholder="텍스트를 입력해주세요."
				/>
				<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-4">
					전송
				</button>
			</div>
		</section>
		// <div>
		// 	<h2>Chat Room {roomId}</h2>
		// 	<div>
		// 		{messages.map((message, index) => (
		// 			<div
		// 				key={index}
		// 				style={{
		// 					textAlign:
		// 						message.sender_email === currentUserEmail ? "right" : "left",
		// 					backgroundColor:
		// 						message.sender_email === currentUserEmail
		// 							? "#e6f7ff"
		// 							: "#f6f6f6",
		// 					padding: "10px",
		// 					margin: "5px 0",
		// 					borderRadius: "10px",
		// 					maxWidth: "60%",
		// 					marginLeft:
		// 						message.sender_email === currentUserEmail ? "auto" : "0",
		// 					marginRight:
		// 						message.sender_email === currentUserEmail ? "0" : "auto",
		// 				}}
		// 			>
		// 				<strong>
		// 					{message.sender_email === currentUserEmail
		// 						? "Me"
		// 						: message.sender_email}
		// 					:
		// 				</strong>{" "}
		// 				{message.text}
		// 			</div>
		// 		))}
		// 	</div>
		// 	<form onSubmit={handleSubmit}>
		// 		<input
		// 			type="text"
		// 			value={newMessage}
		// 			onChange={(e) => setNewMessage(e.target.value)}
		// 			placeholder="Type a message..."
		// 		/>
		// 		<button type="submit">Send</button>
		// 	</form>
		// </div>
	);
};

export default ChatRoom;
