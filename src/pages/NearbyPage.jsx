
import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nearbymain from "../components/Nearbymain";

const NearbyPage = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <Nearbymain>
        
      </Nearbymain>
      <Footer>

      </Footer>
    </Wrapper>
  )
}

export default NearbyPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  box-sizing: border-box;

  /* padding-left: 100px;
  padding-right: 100px; */
`;

