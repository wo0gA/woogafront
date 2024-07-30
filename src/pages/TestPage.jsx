import React, { useEffect } from 'react';
import GoogleLoginButton from '../apis/GoogleLoginButton';
import styled from 'styled-components';
import KakaoLoginButton from '../apis/KakaoLoginButton';
import PCMap from '../test/PCMap';

const TestPage = () => {
  const username = localStorage.getItem('username');


  return (
    <Wrapper>
      <GoogleLoginButton />
      <KakaoLoginButton />
      <PCMap />
    </Wrapper>
  );
};

export default TestPage;

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
