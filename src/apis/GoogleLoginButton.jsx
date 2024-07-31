import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import googleBtn from '../images/googleBtn.png';

const GoogleLoginButton = () => {
    const REDIRECT_URI = 'http://localhost:3000';
    const CLIENT_ID = '564600149423-3k57skta0kr16fblavp23vp34k9tvkp0.apps.googleusercontent.com';
    const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`;

    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    const loginHandler = () => {
        window.location.href = link;

        //어떤 버튼을 눌렀는지 localstorage에 저장
        localStorage.setItem('loginType', 'google');
    };

    useEffect(() => {
        if (localStorage.getItem('loginType') === 'google' && code) {
            console.log("< 구글 인가 코드 >");
            console.log(code);
        
            // 백엔드로 인가 코드를 보내기
            axios.post("https://server.templ.es/accounts/google/callback/", { code })
                .then((response) => {
                    console.log(response.data);
                    // 구글 로그인 성공 시, 서버에서 받은 토큰을 로컬스토리지에 저장
                    localStorage.setItem('access', response.data.token.access_token);
                    localStorage.setItem('refresh', response.data.token.refresh_token);
                    //username도 저장
                    localStorage.setItem('username', response.data.user.username);

                    //만약 첫 로그인이면 프로필 설정 페이지로 이동
                    if(response.data.user.first_login){
                        navigate('/profile');
                    }
                    else{
                        navigate('/');
                    }
                })
                .catch((error) => {
                    console.error("구글 인증 처리 중 오류 발생:", error);
                });
        }
    }, [code, navigate]);

    return (
        // <LoginBtn onClick={loginHandler}/>
        <Img src={googleBtn} alt="구글 로그인" onClick={loginHandler} />
    );
};

export default GoogleLoginButton

const LoginBtn = styled.button`
    background-image: url(${googleBtn});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20%;
    aspect-ratio: 5/2;
    border: none;

    cursor: pointer;
`;

const Img = styled.img`
    width: 20%;
    cursor: pointer;
`;
