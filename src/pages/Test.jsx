import GoogleLoginButton from "../components/Google";
import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Test = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <Main>

      </Main>
      <Footer>

      </Footer>
    </Wrapper>
  )
}

export default Test

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  padding-left: 100px;
  padding-right: 100px;
`;
