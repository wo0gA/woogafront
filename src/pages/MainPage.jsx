
import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Main from "../components/MainMain";
import Footer from "../components/Footer";

const MainPage = () => {
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

export default MainPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  /* padding-left: 100px;
  padding-right: 100px; */
`;
