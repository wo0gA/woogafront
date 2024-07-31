import styled from "styled-components";
import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalSearchPage from "../components/RentalSearchPage";

const SearchPage = () => {
  return (
    <Wrapper>
      <Header>
        
      </Header> 
      <RentalSearchPage />
      <Footer>
       
      </Footer>
    </Wrapper>
  )
}

export default SearchPage

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
