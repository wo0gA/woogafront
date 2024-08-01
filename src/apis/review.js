import axios from 'axios';

const SERVER_URL = 'server.templ.es'; 

export const getReviewsOfProduct = async (productID) => {
    const API_URL = `https://${SERVER_URL}/products/${productID}/reviews/`;
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        });
        return response.data; // 리뷰 목록 반환
    } catch (error) {
        console.error(error);
        throw error; // 에러가 발생하면 호출자에게 전달
    }
};
