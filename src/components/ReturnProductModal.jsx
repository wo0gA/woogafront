import { useState } from "react";
import axios from "axios";

const SERVER_URL = "server.templ.es";

const ReturnProductModal = ({ rentalHistory, onSignal }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(0);
	const [hoveredStar, setHoveredStar] = useState(0);

	const openModal = () => {
		if (rentalHistory) {
			setIsOpen(true);
		}
	};

	const handleSubmit = async () => {
		if (review === "" || rating === 0) {
			alert("리뷰와 별점을 모두 작성해주세요!");
			return;
		}

		const accessToken = localStorage.getItem("access");
		try {
			await axios.put(
				`https://${SERVER_URL}/rentalhistories/${rentalHistory.id}/`,
				{ state: "RETURNED" },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
		} catch (err) {
			alert("에러 발생! 반납을 완료하지 못했습니다.");
			return;
		}

		try {
			await axios.post(
				`https://${SERVER_URL}/products/${rentalHistory.product.id}/reviews/`,
				{ star: rating, comment: review },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
		} catch (err) {
			alert("에러 발생! 반납 후 리뷰를 작성하지 못했습니다.");
			setIsOpen(false);
			return;
		}

		alert("반납을 완료하였습니다.");
		onSignal();
		setIsOpen(false);
	};

	return (
		<>
			<button
				class={
					(rentalHistory ? "bg-[#FFD56A]" : "bg-gray-300 text-gray-400") +
					" font-medium p-2 rounded-lg"
				}
				onClick={openModal}
			>
				반납 완료
			</button>
			{isOpen && (
				<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
					<div class="w-[40rem] rounded-lg bg-white p-6 shadow-lg animate-slideInUp">
						<div class="space-y-4">
							<div class="text-center">
								<h2 class="text-2xl font-bold">반납 하시겠습니까?</h2>
								<p class="text-gray-500">
									상품에 대한 한 줄 리뷰와 등록자에 대한 별점 리뷰를
									작성해주세요!
								</p>
							</div>
							<div className="space-y-2 mb-4 pt-8">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									상품에 대한 한 줄 리뷰
								</label>
								<textarea
									className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
									onChange={(e) => setReview(e.target.value)}
								/>
							</div>
							<div className="space-y-2 pb-8 pt-4">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									등록자에 대한 별점
								</label>
								<div className="w-full flex justify-center mb-4">
									{[1, 2, 3, 4, 5].map((star) => (
										<svg
											key={star}
											className={`w-8 h-8 cursor-pointer ${
												star <= (hoveredStar || rating)
													? "text-yellow-500"
													: "text-gray-400"
											}`}
											fill="currentColor"
											viewBox="0 0 20 20"
											onMouseEnter={() => setHoveredStar(star)}
											onMouseLeave={() => setHoveredStar(0)}
											onClick={() => setRating(star)}
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995h5.248c.969 0 1.371 1.24.588 1.81l-4.248 3.087 1.618 4.995c.3.921-.755 1.688-1.541 1.115L10 15.347l-4.248 3.087c-.786.573-1.841-.194-1.541-1.115l1.618-4.995-4.248-3.087c-.783-.57-.381-1.81.588-1.81h5.248l1.618-4.995z" />
										</svg>
									))}
								</div>
							</div>
							<button
								class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full mt-12 bg-[#FFD56A]"
								type="submit"
								onClick={handleSubmit}
							>
								반납하기
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

export default ReturnProductModal;
