import axios from "axios";
import { useParams } from "react-router-dom";

const SERVER_URL = "server.templ.es";

/**
 * 채팅방 목록을 불러오는 함수
 */
export const fetchChatRooms = async (email, type) => {
	const response = await axios.get(
		`https://${SERVER_URL}/chat/rooms/?email=${email}&type=${type}`
	);
	return response.data;
};

export const fetchMessages = async (roomId) => {
	const response = await axios.get(
		`https://${SERVER_URL}/chat/${roomId}/messages/`
	);
	return response.data;
};

/**
 * 새로운 채팅방을 생성 또는 조회하는 함수
 */
export const createChatRoom = async (shop_user_email, visitor_user_email, productID) => {
	const response = await axios.post(`https://${SERVER_URL}/chat/rooms/`, {
		shop_user_email: shop_user_email,
		visitor_user_email: visitor_user_email,
		product: productID,
	});
	return response.data;
};

class WebSocketService {
	constructor() {
		this.socket = null;
	}

	/**
	 * WebSocket 연결을 설정하는 함수
	 */
	connect(roomId, onMessage) {
		this.socket = new WebSocket(
			`wss://${SERVER_URL}/ws/room/${roomId}/messages`
		);
		this.socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			onMessage(data);
		};
	}

	/**
	 * WebSocket을 통해 메시지를 전송하는 함수
	 */
	sendMessage(message) {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			this.socket.send(JSON.stringify(message));
		}
	}

	/**
	 * WebSocket 연결을 해제하는 함수
	 */
	disconnect() {
		if (this.socket) {
			this.socket.close();
		}
	}
}

const webSocketService = new WebSocketService();
export default webSocketService;
