export const getUserInfo = async () => {

	const response = await axios.get(`https://wooga.o-r.kr/accounts/kakao/callback/`,
        {
        headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
    });
	console.log('사용자 정보 저장 완료');

	return response.data;
};
