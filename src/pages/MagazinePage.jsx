import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import MagazineMain from "../components/MagazineMain";

const MagazinePage = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <MagazineMain>
        
      </MagazineMain>
      <Footer>

      </Footer>
    </Wrapper>
  )
}

export default MagazinePage

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
