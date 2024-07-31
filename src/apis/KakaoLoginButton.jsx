import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import kakaoBtn from '../images/kakaoBtn.png';

const KakaoLoginButton = () => {
    const REST_API_KEY = 'b6390fc9c0a186ec2d9dc18c54150b14';
    const REDIRECT_URI = 'http://localhost:3000';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    const loginHandler = () => {
        window.location.href = link;

        //어떤 버튼을 눌렀는지 localstorage에 저장
        localStorage.setItem('loginType', 'kakao');
    };

    useEffect(() => {
        if (localStorage.getItem('loginType') === 'kakao' && code) {
            console.log("< 카카오 인가 코드 >");
            console.log(code);
        
            // 백엔드로 인가 코드를 보내기
            axios.post("https://server.templ.es/accounts/kakao/callback/", { code })
                .then((response) => {
                console.log(response.data);

                // 카카오 로그인 성공 시, 서버에서 받은 토큰을 로컬스토리지에 저장
                localStorage.setItem('access', response.data.token.access_token);
                localStorage.setItem('refresh', response.data.token.refresh_token);
                //username도 저장
                localStorage.setItem('username', response.data.user.username);
                
                //만약 첫 로그인이면 프로필 설정 페이지로 이동
                // if(response.data.user.first_login){
                //     navigate('/profile');
                // }
                // else{
                //     navigate('/');
                // }
                })
                .catch((error) => {
                console.error("카카오 인증 처리 중 오류 발생:", error);
                });
            }
        }, [code, navigate]);

    return (
            // <LoginBtn type='button' onClick={loginHandler} />
            <Img src={kakaoBtn} alt="구글 로그인" onClick={loginHandler} />
        );
    };

export default KakaoLoginButton

const LoginBtn = styled.button`
    background-image: url(${kakaoBtn});
    background-size: cover;
    background-repeat: no-repeat;
    width: 20%;
    height: 5 / 2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

const Img = styled.img`
width: 20%;
cursor: pointer;
`;