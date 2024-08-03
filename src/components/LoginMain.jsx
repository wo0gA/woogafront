import React, { useEffect } from 'react';
import styled from 'styled-components';
import GoogleLoginButton from '../apis/GoogleLoginButton';
import KakaoLoginButton from '../apis/KakaoLoginButton';
import { sendWhichLogin } from '../apis/login';
import { useNavigate } from 'react-router-dom';

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
            <Container>
                <Banner />
                <LoginContainer>
                    <GoogleLoginButton />
                    <KakaoLoginButton />
                </LoginContainer>
            </Container>
        </Wrapper>
    )
}

export default LoginMain

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 75%;
    aspect-ratio: 6 / 3;
    box-sizing: border-box;
    background-color: #fffee4;
    margin-top: 5rem;
`;

const Banner = styled.div`
    width: 60%;
    aspect-ratio: 5 / 2;
    background-color: #b3b3b3;
    border-bottom: 1px solid #e0e0e0;
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
