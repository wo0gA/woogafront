import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BREAKPOINT_PHONE, mediaQueries } from '../mediaquery/mediaQuery';
import GoogleLoginButton from './loginButtons/GoogleLoginButton';
import KakaoLoginButton from './loginButtons/KakaoLoginButton';
import { sendWhichLogin } from '../apis/login';
import { useNavigate } from 'react-router-dom';
import loginbanner from '../images/loginbanner.png';

const LoginMain = () => {
    const navigate = useNavigate();
    useEffect(() => {
        //url에서 인가코드 받아오기
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');
        console.log(code);
        //인가코드가 있으면 백엔드에 보내기
        if (code) {
            sendWhichLogin(code);
        }
        else{
            console.log("인가코드 없음");
        }
        
    }
    , []);
    
    return (
        <Wrapper>
                <Banner><img src={loginbanner} width="100%"/></Banner>
                <Container>
                    <Title>만나서 반가워요!</Title>
                    <LoginContainer>
                    <GoogleLoginButton />
                    <KakaoLoginButton />
                    </LoginContainer>
            </Container>
        </Wrapper>
    )
}

export default LoginMain

const Title = styled.div`
    font-size: 18px;
    font-weight: 550;

    ${mediaQueries(BREAKPOINT_PHONE)} {
        font-size: 14px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 60vw;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 75%;
    //aspect-ratio: 6 / 3;
    box-sizing: border-box;
    background-color: #fffee4;
`;

const Banner = styled.div`
    width: 50%;
    //aspect-ratio: 5 / 2;
    //background-color: #b3b3b3;
    //border-bottom: 1px solid #e0e0e0;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > * {
        margin-top: 1rem;
    }
`;
