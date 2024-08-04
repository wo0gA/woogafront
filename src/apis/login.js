import axios from 'axios';

//백엔드로 인가 코드(구글) 보내는 함수
export const sendGoogleCode = async (code) => {
    try {
        const response = await axios.post("https://server.templ.es/accounts/google/callback/", { code });
        console.log(response.data);

        // 구글 로그인 성공 시, 서버에서 받은 토큰을 로컬스토리지에 저장
        localStorage.setItem('access', response.data.token.access_token);
        localStorage.setItem('refresh', response.data.token.refresh_token);
        //username도 저장
        localStorage.setItem('username', response.data.user.username);
        //첫 로그인 여부도 저장
        localStorage.setItem('first_login', response.data.first_login);
        //이메일도 저장
        localStorage.setItem('email', response.data.user.email);


    } catch (error) {
        console.error("구글 인증 처리 중 오류 발생:", error);
    }
}

//백엔드로 인가 코드(카카오) 보내는 함수
export const sendKakaoCode = async (code) => {
    try {
        const response = await axios.post("https://server.templ.es/accounts/kakao/callback/", { code });
        console.log(response.data);

        // 카카오 로그인 성공 시, 서버에서 받은 토큰을 로컬스토리지에 저장
        localStorage.setItem('access', response.data.token.access_token);
        localStorage.setItem('refresh', response.data.token.refresh_token);
        //username도 저장
        localStorage.setItem('username', response.data.user.username);
        //첫 로그인 여부도 저장
        localStorage.setItem('first_login', response.data.first_login);
        //이메일도 저장
        localStorage.setItem('email', response.data.user.email);

    } catch (error) {
        console.error("구글 인증 처리 중 오류 발생:", error);
    }
}

// 위 두 개중에 뭐쓸지 조건 검사하는 함수
export const sendWhichLogin = async (code) => {
    const loginType = localStorage.getItem('loginType');
    
    if (loginType === 'google') {
        await sendGoogleCode(code);
    } else if (loginType === 'kakao') {
        await sendKakaoCode(code);
    }
    
    // 로컬스토리지에 값들 저장 후, 값들이 있으면 메인으로 이동
    //첫 로그인이면 프로필 설정 페이지로 이동
    if (localStorage.getItem('access') && localStorage.getItem('refresh') && localStorage.getItem('username')) {
        if (localStorage.getItem('first_login') === 'true') {
            window.location.href = "/profileSetting";
        } else {
            window.location.href = "/";
        }
    }
}
