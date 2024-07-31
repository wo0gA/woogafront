import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import GoogleLoginButton from '../apis/GoogleLoginButton';
import KakaoLoginButton from '../apis/KakaoLoginButton';

const LoginMain = () => {
    // useEffect(() => {
    //     // 페이지가 마운트될 때
    //     document.body.style.overflow = 'hidden';
        
    //     // 페이지가 언마운트될 때
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, []);
    
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
