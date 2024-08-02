export function numberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function timeAgo(timestamp) {
	const now = new Date();
	const then = new Date(timestamp);
	const diffInSeconds = (now - then) / 1000;

	const secondsInMinute = 60;
	const secondsInHour = 60 * secondsInMinute;
	const secondsInDay = 24 * secondsInHour;

	if (diffInSeconds < secondsInMinute) {
		return `${Math.floor(diffInSeconds)}초 전`;
	} else if (diffInSeconds < secondsInHour) {
		return `${Math.floor(diffInSeconds / secondsInMinute)}분 전`;
	} else if (diffInSeconds < secondsInDay) {
		return `${Math.floor(diffInSeconds / secondsInHour)}시간 전`;
	} else {
		return `${Math.floor(diffInSeconds / secondsInDay)}일 전`;
	}
}
