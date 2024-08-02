import Header from "../components/Header";
import styled from "styled-components";
import ChatRoom from "../components/ChatRoom";
import { useEffect, useState } from "react";
import { fetchChatRooms } from "../apis/websocket";
import "../font.css";
import { timeAgo } from "../components/lib";

const ChatPage = () => {
	const [visitorChatRoom, setVisitorChatRoom] = useState([]);
	const [ownerChatRoom, setOwnerChatRoom] = useState([]);
	const [currentTab, setCurrentTab] = useState(0);
	const [currentChat, setCurrentChat] = useState(null);

	useEffect(() => {
		const getUserInfo = async () => {
			// const accessToken = localStorage.getItem("access");
			// const response = await axios.get(`https://${SERVER_URL}/accounts/`, {
			// 	headers: {
			// 		Authorization: `Bearer ${accessToken}`,
			// 	},
			// });
			// const email = response.data.email;
			const email = "admin@asdf.com";
			const username = "admin";
			setVisitorChatRoom(await fetchChatRooms(email, "visitor"));
			setOwnerChatRoom(await fetchChatRooms(email, "owner"));
		};
		getUserInfo();
	}, []);

	return (
		<Wrapper>
			<Header />
			<main class="flex flex-1 w-5/6 mt-12">
				<aside class="w-1/3 border-r">
					<div class="p-4">
						<div class="flex space-x-2 justify-center">
							<button
								class={
									(currentTab === 0 ? "bg-[#FCFF5D]" : "") +
									" inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2"
								}
								onClick={() => setCurrentTab(0)}
							>
								대여 받기
							</button>
							<button
								class={
									(currentTab === 1 ? "bg-[#FCFF5D]" : "") +
									" inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
								}
								onClick={() => setCurrentTab(1)}
							>
								대여 해주기
							</button>
						</div>
					</div>
					<div class="overflow-y-auto">
						{currentTab === 0
							? visitorChatRoom.map((roomData) => (
									<div
										class="flex items-center gap-2 p-2 m-4 border rounded-md cursor-pointer"
										onClick={() => setCurrentChat(roomData)}
									>
										<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
											<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
												U
											</span>
										</span>
										<div class="flex flex-col ml-4 whitespace-nowrap overflow-hidden">
											<span class="font-semibold text-left overflow-hidden text-ellipsis">
												{roomData.opponent_username}
											</span>
											<span class="w-full text-sm text-muted-foreground overflow-hidden text-ellipsis">
												{roomData.latest_message}
											</span>
										</div>
										<div class="flex flex-col pb-6 ml-auto text-right">
											<span class="min-w-16 text-sm text-muted-foreground">
												{timeAgo(roomData.latest_message_timestamp)}
											</span>
										</div>
									</div>
							  ))
							: ownerChatRoom.map((roomData) => {
									<div
										class="flex items-center gap-2 p-2 m-4 border rounded-md cursor-pointer"
										onClick={() => setCurrentChat(roomData)}
									>
										<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
											<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
												U
											</span>
										</span>
										<div class="flex flex-col ml-4 whitespace-nowrap overflow-hidden">
											<span class="font-semibold text-left overflow-hidden text-ellipsis">
												{roomData.opponent_username}
											</span>
											<span class="w-full text-sm text-muted-foreground overflow-hidden text-ellipsis">
												{roomData.latest_message}
											</span>
										</div>
										<div class="flex flex-col pb-6 ml-auto text-right">
											<span class="min-w-16 text-sm text-muted-foreground">
												{timeAgo(roomData.latest_message_timestamp)}
											</span>
										</div>
									</div>;
							  })}
					</div>
				</aside>
				{currentChat && (
					<ChatRoom
						roomData={currentChat}
						currentUserEmail={"admin@asdf.com"}
						currentUserName={"admin"}
					/>
				)}
			</main>
		</Wrapper>
	);
};

export default ChatPage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	box-sizing: border-box;

	/* padding-left: 100px;
  padding-right: 100px; */
`;
