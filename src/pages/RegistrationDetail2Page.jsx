import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationDetailMain2 from '../components/RegistrationDetailMain2';

const RegistrationDetail2Page = () => {
  return (
    <Wrapper>
        <Header>
        
        </Header> 
        <RegistrationDetailMain2 />
        <Footer>
  
        </Footer>
    </Wrapper>
  )
}

export default RegistrationDetail2Page

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
