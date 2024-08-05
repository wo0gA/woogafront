import axios from "axios";

const SERVER_URL = 'server.templ.es'; 


// 상점 정보와 물품 조회하는 함수(4번 api)
export const getStoreInfo = async (userID) => {
   const API_URL = `https://${SERVER_URL}/accounts/${userID}/store/products/`;
   try {
      const response = await axios.get(API_URL);
      console.log('상점 정보:', response.data);
      return response.data; // 상점 정보 반환
   } catch (error) {
      console.error('상점 정보를 가져오는 중 오류 발생:', error); // 콘솔에 에러 출력
      return []; // 에러 발생 시 빈 배열 반환
   }
}

