import React from 'react';
import styled from 'styled-components';
import googleBtn from '../../images/googleBtn.png';

const GoogleLoginButton = () => {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // let REDIRECT_URI = '';
    // //local 환경이면 localhost:3000, 배포 환경이면 배포 주소
    // //searchParams에 localhost:3000이 포함되어 있으면 local 환경
    // if (searchParams.has('localhost')) {
    //     REDIRECT_URI = 'http://localhost:3000/login';
    // }
    // else {
    //     REDIRECT_URI = 'https://server.templ.es/login';
    // }

    const REDIRECT_URI = 'http://localhost:3000/login';
    const CLIENT_ID = '564600149423-3k57skta0kr16fblavp23vp34k9tvkp0.apps.googleusercontent.com';
    const GOOGLE_LOGIN_LINK = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`;

    const handleClick = () => {
        window.location.href = GOOGLE_LOGIN_LINK;
        // 어떤 버튼을 눌렀는지 localstorage에 저장
        localStorage.setItem('loginType', 'google');
    };

    return (<Wrapper>
        <Img src={googleBtn} alt="구글 로그인" onClick={handleClick} />
    </Wrapper>
    );
};

export default GoogleLoginButton;

const Img = styled.img`
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
`;