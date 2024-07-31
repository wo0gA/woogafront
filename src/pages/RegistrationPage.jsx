import styled from "styled-components";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationMain from '../components/RegistrationMain'

const RegistrationPage = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <RegistrationMain />
      <Footer>

      </Footer>
    </Wrapper>
  )
}

export default RegistrationPage

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
