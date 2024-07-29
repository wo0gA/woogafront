
const KakaoLogin = () => {
    const REST_API_KEY = 'b6390fc9c0a186ec2d9dc18c54150b14';
    const REDIRECT_URI = 'http://localhost:3000';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


    const loginHandler = () => {
        window.location.href = link;
    };

    return (
            <button type='button' onClick={loginHandler}>
                카카오 로그인
            </button>
        );
    };

export default KakaoLogin