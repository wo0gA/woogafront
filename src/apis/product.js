import axios from "axios";

const SERVER_URL = 'server.templ.es'; 

//단일 상품 정보 가져오는 함수
export const getProductInfo = async (productID) => {
      const API_URL = `https://${SERVER_URL}/products/${productID}/`;
      try {
         const response = await axios.get(API_URL, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('access')}`
            }
         }); 
         // console.log('상품 정보:', response.data);
         return response.data; // 상품 정보 반환
      } catch (error) {
         // console.error(error);
         throw error; // 에러가 발생하면 호출자에게 전달
      }
   }

//인기 상품 8개 가져오는 함수
export const getPopularProducts = async () => {
   const API_URL = `https://${SERVER_URL}/products/popularity/`;
   try {
      const response = await axios.get(API_URL, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
         }
      });
      console.log('인기 상품 목록:', response.data);
      return response.data; // 인기 상품 목록 반환
   } catch (error) {
      // console.error(error);
      throw error; // 에러가 발생하면 호출자에게 전달
   }
}

// 단일 물품에 대한 대여 기록 가져오는 함수(달력에 표시하려고)
export const getRentalHistory = async (productID) => {
   const API_URL = `https://${SERVER_URL}/rentalhistories/enrollment/${productID}/`;
   try {
      const response = await axios.get(API_URL, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
         }
      });
      console.log('대여 기록:', response.data);
      return response.data; // 대여 기록 반환
   } catch (error) {
      // console.error(error);
      throw error; // 에러가 발생하면 호출자에게 전달
   }
}