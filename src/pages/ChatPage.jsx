import Header from "../components/Header";
import styled from "styled-components";
import ChatRoom from "../components/ChatRoom";
import axios from "axios";
import { useEffect } from "react";

const SERVER_URL = "server.templ.es";

const ChatPage = () => {
	const [ownerChatRoom, setOwnerChatRoom] = useEffect([]);
	const [visitorChatRoom, setVisitorChatRoom] = useEffect([]);

	useEffect(() => {
		async function getUserInfo() {
			const accessToken = localStorage.getItem("access");
			const response = await axios.get(`https://${SERVER_URL}/accounts/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
		}
	}, []);

	return (
		<Wrapper>
			<Header />
			{/* <header class="flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6">
				<div class="flex items-center space-x-4">
					<img src="/placeholder.svg" alt="Logo" class="h-10" />
					<nav class="flex space-x-4">
						<a class="font-semibold" href="#">
							물품 대여
						</a>
						<a class="font-semibold" href="#">
							물품 등록
						</a>
						<a class="text-muted-foreground" href="#">
							건강 A to Z
						</a>
						<a class="text-muted-foreground" href="#">
							주변 운동공간
						</a>
						<a class="text-muted-foreground" href="#">
							채팅
						</a>
					</nav>
				</div>
				<div class="flex space-x-4">
					<input
						class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-80"
						type="search"
						placeholder="찾고 있는 운동품 또는 운동품목이 있나요?"
					/>
					<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-6 h-6"
						>
							<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
						<span class="sr-only">User menu</span>
					</button>
				</div>
			</header> */}
			<main class="flex flex-1 w-5/6">
				<aside class="w-1/3 border-r">
					<div class="p-4">
						<div class="flex space-x-2">
							<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-primary/90 h-10 px-4 py-2 text-yellow-500">
								전체 대화
							</button>
							<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
								대여 대화
							</button>
							<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
								판매 대화
							</button>
						</div>
					</div>
					<div class="overflow-y-auto">
						<div class="flex items-center gap-2 p-2 m-4 border rounded-md">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
									U
								</span>
							</span>
							<div class="flex flex-col ml-4">
								<span class="font-semibold">d_idii</span>
								<span class="text-sm text-muted-foreground">
									언제까지 입금하실 건가요?
								</span>
							</div>
							<div class="ml-auto text-right">
								<span class="text-sm text-muted-foreground">2시간 전</span>
								<div
									class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2"
									data-v0-t="badge"
								>
									3
								</div>
							</div>
						</div>
						<div class="flex items-center gap-2 p-2 m-4 border rounded-md">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
									U
								</span>
							</span>
							<div class="flex flex-col ml-4">
								<span class="font-semibold">d_idii</span>
								<span class="text-sm text-muted-foreground">
									언제까지 입금하실 건가요?
								</span>
							</div>
							<div class="ml-auto text-right">
								<span class="text-sm text-muted-foreground">2시간 전</span>
								<div
									class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2"
									data-v0-t="badge"
								>
									3
								</div>
							</div>
						</div>
						<div class="flex items-center gap-2 p-2 m-4 border rounded-md">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
									U
								</span>
							</span>
							<div class="flex flex-col ml-4">
								<span class="font-semibold">d_idii</span>
								<span class="text-sm text-muted-foreground">
									언제까지 입금하실 건가요?
								</span>
							</div>
							<div class="ml-auto text-right">
								<span class="text-sm text-muted-foreground">2시간 전</span>
								<div
									class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2"
									data-v0-t="badge"
								>
									3
								</div>
							</div>
						</div>
					</div>
				</aside>
				<ChatRoom roomId={1} currentUserEmail={"qw@naver.com"} />
				{/* <section class="flex flex-col flex-1">
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
									텍스트필드는 이렇습니다... 패딩값 세로15, 가로20. 폰트
									16pt이에요 최대 확장길이는 600이고, 내가보낸 건 constraints
									top&amp;right 입니다.
								</div>
								<div class="self-end p-2 mt-2 bg-white rounded-lg shadow">
									내가보낸 채팅 사이 간격은 10 으로 부탁드리고요...
								</div>
								<div class="self-start p-2 mt-2 bg-white rounded-lg shadow">
									남이보낸 건 constraints top&amp;left 입니다. 글고 남이 보낸
									채팅 사이와 내가 보낸 채팅 사이 간격은 20으로 부탁드려요. 글고
									남이보낸 건 fill은 amber 100으로 채워주세요
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
				</section> */}
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
