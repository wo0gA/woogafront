import React from 'react';
import styled from 'styled-components';
import kakaoBtn from '../images/kakaoBtn.png';
import { useLocation } from 'react-router-dom';

const KakaoLoginButton = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let REDIRECT_URI = '';
    //local 환경이면 localhost:3000, 배포 환경이면 배포 주소
    //searchParams에 localhost:3000이 포함되어 있으면 local 환경
    if (searchParams.has('localhost')) {
        REDIRECT_URI = 'http://localhost:3000/login';
    }
    else {
        REDIRECT_URI = 'https://server.templ.es/login';
    }
    // const REDIRECT_URI = 'http://localhost:3000/login';
    const REST_API_KEY = 'b6390fc9c0a186ec2d9dc18c54150b14';
    const KAKAO_LOGIN_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleClick = () => {
        window.location.href = KAKAO_LOGIN_LINK;
        // 어떤 버튼을 눌렀는지 localstorage에 저장
        localStorage.setItem('loginType', 'kakao');
    };

    return (
        <Img src={kakaoBtn} alt="구글 로그인" onClick={handleClick} />
    );
};

export default KakaoLoginButton;

const Img = styled.img`
width: 20%;
cursor: pointer;
`;