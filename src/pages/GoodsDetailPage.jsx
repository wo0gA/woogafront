import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoodsDetailMain from "../components/GoodsDetailMain";

const GoodsDetailPage = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <GoodsDetailMain />
      <Footer>
        
      </Footer>
    </Wrapper>
  )
}

export default GoodsDetailPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;


`;
