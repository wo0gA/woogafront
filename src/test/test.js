import axios from 'axios';

const SERVER_URL = 'server.templ.es'; // Replace with your actual server URL

export async function getPopular() {
    try {
        const response = await axios.get(`https://${SERVER_URL}/products/popularity/`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching popular products:', error);
    }
}

//키워드로 검색
export async function searchProducts(keyword) {
    try {
        const response = await axios.get(`https://${SERVER_URL}/products/?keyword=${keyword}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

// 카테고리로 검색
export async function searchByCategory(categoryID) {
    try {
        const response = await axios.get(`https://${SERVER_URL}/products/categories/${categoryID}/`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

// 로그아웃
export async function logout() {
    // localstorage에서 username, refresh, access, loginType, first_login 삭제
    localStorage.removeItem('username');
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    localStorage.removeItem('loginType');
    localStorage.removeItem('first_login');
    localStorage.removeItem('email');

    // 화면을 새로고침
    window.location.reload();
}
