import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationDetailMain from '../components/RegistrationDetailMain';

const RegistrationDetailPage = () => {
  return (
    <Wrapper>
        <Header>
        
        </Header> 
        <RegistrationDetailMain />
        <Footer>
  
        </Footer>
    </Wrapper>
  )
}

export default RegistrationDetailPage

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
