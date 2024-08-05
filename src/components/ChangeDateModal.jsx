import { useState } from "react";
import axios from "axios";

const SERVER_URL = "server.templ.es";

const ChangeDateModal = ({ roomData, rentalHistory, onSignal }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleSubmit = async () => {
		if (rentalHistory) {
			try {
				const accessToken = localStorage.getItem("access");
				await axios.put(
					`https://${SERVER_URL}/rentalhistories/${rentalHistory.id}/`,
					{
						new_rental_start_date: startDate,
						new_rental_end_date: endDate,
					},
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);
				alert("일정을 변경하였습니다.");
			} catch (err) {
				alert("에러 발생! 일정을 변경하지 못했습니다.");
			}
		} else {
			try {
				const accessToken = localStorage.getItem("access");
				await axios.post(
					`https://${SERVER_URL}/rentalhistories/?product=${roomData.product.id}&renter=${roomData.visitor_user.id}`,
					{
						rental_start_date: startDate,
						rental_end_date: endDate,
					},
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);
				onSignal();
				alert("일정을 설정하였습니다.");
			} catch (err) {
				alert("에러 발생! 일정을 설정하지 못했습니다.");
			}
		}
		setIsOpen(false);
	};

	return (
		<>
			<button
				class="p-2 mr-4 rounded-lg bg-[#FFD56A] font-medium"
				onClick={() => setIsOpen(true)}
			>
				{rentalHistory ? "일정 변경" : "일정 설정"}
			</button>
			{isOpen && (
				<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
					<div class="w-[30rem] rounded-lg bg-white p-6 shadow-lg animate-slideInUp">
						<div class="space-y-4">
							<div class="text-center">
								<h2 class="text-2xl font-bold">
									{rentalHistory ? "일정 변경" : "일정 설정"}
								</h2>
								<p class="text-gray-500">
									대여 일정을 {rentalHistory ? "변경" : "설정"}합니다.
								</p>
							</div>
							<div className="space-y-2 mb-4">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									대여 시작일
								</label>
								<input
									className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
									type="date"
									onChange={(e) => setStartDate(`${e.target.value}`)}
								/>
							</div>
							<div className="space-y-2 pb-4">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									대여 종료일
								</label>
								<input
									className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
									type="date"
									onChange={(e) => setEndDate(`${e.target.value}`)}
								/>
							</div>
							<button
								class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full mt-12 bg-[#FFD56A]"
								type="submit"
								onClick={handleSubmit}
							>
								{rentalHistory ? "변경" : "설정"}
							</button>
							<button
								class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
								type="button"
								onClick={() => setIsOpen(false)}
							>
								닫기
							</button>
						</div>
					</div>
				</div>
			)}
			<style jsx>{`
						@keyframes slideInUp {
							0% {
								transform: translateY(20%);
								opacity: 0;
							}
							100% {
								transform: translateY(0);
								opacity: 1;
							}
						}
						.animate-slideInUp {
							animation: slideInUp 0.5s cubic-bezier(0.19,1,0.22,1); forwards;
						}
					`}</style>
		</>
	);
};

export default ChangeDateModal;
