import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
                navigate('/');
                })
                .catch((error) => {
                console.error("카카오 인증 처리 중 오류 발생:", error);
                });
            }
        }, [code, navigate]);

    return (
            <LoginBtn type='button' onClick={loginHandler}>
                카카오 로그인
            </LoginBtn>
        );
    };

export default KakaoLoginButton

const LoginBtn = styled.button`
    background-color: #ffeb3b;
    border: none;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    `;