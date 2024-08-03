
import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreMain from "../components/StoreMain";

const MainPage = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <StoreMain>
        
      </StoreMain>
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
