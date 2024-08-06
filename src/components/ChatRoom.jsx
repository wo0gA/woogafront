import React, { useEffect, useRef, useState } from "react";
import webSocketService, { fetchMessages } from "../apis/websocket";
import { numberWithCommas, timeAgo } from "./lib";
import ChangeDateModal from "./ChangeDateModal";
import axios from "axios";
import ReturnProductModal from "./ReturnProductModal";

const SERVER_URL = "server.templ.es";

const ChatRoom = ({ roomData, currentUser }) => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const [rentalHistory, setRentalHistory] = useState(null);
	const messageEndRef = useRef(null);

	const getMessage = async () => {
		const fetchMsg = await fetchMessages(roomData.id);
		fetchMsg.map((message) =>
			setMessages((prevMessages) => [
				...prevMessages,
				{ sender_username: message.sender.username, message: message.text },
			])
		);
	};

	const fetchRentalHistory = async () => {
		try {
			const accessToken = localStorage.getItem("access");
			const rentalHistoryRes = await axios.get(
				`https://${SERVER_URL}/rentalhistories/?product=${roomData.product.id}&renter=${roomData.visitor_user.id}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			if (rentalHistoryRes.data.length !== 0) {
				setRentalHistory(rentalHistoryRes.data[0]);
			} else {
				setRentalHistory(null);
			}
		} catch {
			setRentalHistory(null);
		}
	};

	useEffect(() => {
		getMessage();
		fetchRentalHistory();

		// WebSocket 연결 설정
		webSocketService.connect(roomData.id, (messageData) => {
			// 수신된 메시지를 상태에 추가하여 실시간으로 갱신
			setMessages((prevMessages) => [...prevMessages, messageData]);
		});

		// 언마운트 시 WebSocket 연결 해제
		return () => {
			webSocketService.disconnect();
			setMessages([]);
		};
	}, [roomData]);

	useEffect(() => {
		messageEndRef.current.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleMessageSubmit = (e) => {
		e.preventDefault();
		// WebSocket을 통해 새 메시지 전송
		webSocketService.sendMessage({
			sender_email: currentUser.email,
			message: newMessage,
			room_id: roomData.id,
		});
		setNewMessage("");
	};

	return (
		<>
			{roomData && (
				<section class="flex flex-col flex-1 max-h-[calc(100vh-15rem)]">
					<div class="flex justify-center p-4 bg-[#FCFF5D] border">
						<div class="flex items-center space-x-4">
							<div
								class="border rounded-lg bg-[#ffd56a] px-2.5 py-1.5 text-xs"
								data-v0-t="badge"
							>
								대여
							</div>
							<span class="font-semibold text-xl">
								{roomData.opponent_username
									? roomData.opponent_username
									: "상대방"}
							</span>
							<span class="text-sm text-muted-foreground">
								{timeAgo(roomData.latest_message_timestamp)}
							</span>
						</div>
					</div>
					<div class="flex justify-between py-2 px-6 border">
						<div class="flex items-center">
							<span class="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full mr-6 border">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
									<img src={roomData.product.thumbnails[0].thumbnail} />
								</span>
							</span>
							<div class="text-left">
								<div class="text-lg font-semibold">{roomData.product.name}</div>
								<div class="flex">
									<div class="mr-4">
										일&nbsp;&nbsp;
										{numberWithCommas(roomData.product.rental_fee_for_a_day)}원
									</div>
									<div>
										주&nbsp;&nbsp;
										{numberWithCommas(roomData.product.rental_fee_for_a_week)}원
									</div>
								</div>
							</div>
						</div>
						<div class="flex items-center">
							<ChangeDateModal
								roomData={roomData}
								rentalHistory={rentalHistory}
								onSignal={fetchRentalHistory}
							/>
							<ReturnProductModal
								rentalHistory={rentalHistory}
								onSignal={fetchRentalHistory}
							/>
						</div>
					</div>
					<div class="flex-1 p-4 overflow-y-auto bg-yellow-50 border">
						<div class="space-y-4">
							{/* <div class="text-center text-sm text-muted-foreground">
								2024년 7월 30일
							</div> */}
							<div class="flex flex-col">
								<div class="self-start bg-[#FEF3C7] animate-slideInRight p-2 mt-4 rounded-xl border max-w-[75%] text-left">
									<p>
										<div class="font-semibold text-lg inline">
											{roomData.product.name}
										</div>
										&nbsp;에 대한 대화를 시작해보세요.
									</p>
									<p>
										{currentUser.username === roomData.visitor_user.username
											? "등록자"
											: "대여자"}
										와의 대화를 통해 대여 일정과 가격을 확정하세요.
									</p>
								</div>

								{messages.map((message) => (
									<div
										class={
											(message.sender_username === currentUser.username
												? "self-end bg-white animate-slideInLeft"
												: "self-start bg-[#FEF3C7] animate-slideInRight") +
											" p-2 mt-4 rounded-xl border max-w-[75%] text-left"
										}
									>
										{message.message}
									</div>
								))}
								<div ref={messageEndRef}></div>
							</div>
						</div>
					</div>
					<form class="flex items-center border" onSubmit={handleMessageSubmit}>
						<input
							class="flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm"
							type="text"
							value={newMessage}
							placeholder="텍스트를 입력해주세요."
							onChange={(e) => setNewMessage(e.target.value)}
						/>
						<button
							class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-4"
							type="submit"
						>
							전송
						</button>
					</form>
					<style jsx>{`
						@keyframes slideInRight {
							0% {
								transform: translateX(2rem);
								opacity: 0;
							}
							100% {
								transform: translateX(0);
								opacity: 1;
							}
						}
						@keyframes slideInLeft {
							0% {
								transform: translateX(-2rem);
								opacity: 0;
							}
							100% {
								transform: translateX(0);
								opacity: 1;
							}
						}
						.animate-slideInRight {
							animation: slideInRight 0.5s cubic-bezier(0.19,1,0.22,1); forwards;
						}
						.animate-slideInLeft {
							animation: slideInLeft 0.5s cubic-bezier(0.19,1,0.22,1); forwards;
						}
					`}</style>
				</section>
			)}
		</>
	);
};

export default ChatRoom;
