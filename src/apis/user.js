import axios from "axios";

const SERVER_URL = "server.templ.es";

//사용자 기본 정보 조회하는 함수
export const getUserInfo = async () => {
   const API_URL = `https://${SERVER_URL}/accounts/`;
      try {
         const response = await axios.get(API_URL, {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('access')}`
               }
         });
         console.log(response.data);
         return response.data;  // 사용자 정보 반환
      } catch (error) {
         console.error(error);
         throw error; // 에러가 발생하면 호출자에게 전달
      }
};