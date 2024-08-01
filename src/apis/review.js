import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';

const SERVER_URL = 'server.templ.es'; 

//서버로부터 한 물품에 대한리뷰 목록을 가져오는 API

export const getReviewsOfProduct = async (productID) => {
    const API_URL = `https://${SERVER_URL}/products/${productID}/reviews/`;
    //헤더에 토큰 넣기
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
        }
    })
    .then((response) => {
        console.log(response.data);
        console.log(typeof(response.data));
        //순회하면서 각 리뷰를 출력
        response.data.forEach((review) => {
            console.log(review);
        });
    })
    .catch((error) => {
        console.error(error);
    });

    return response; ///리뷰 목록 반환
}