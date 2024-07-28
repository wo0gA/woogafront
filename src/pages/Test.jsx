
import styled from "styled-components";
import React, { useState } from 'react'
import Header from "../components/Header";
import Main from "../components/Main";
import RentalSearch from "../components/RentalSearchPage";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import MapComponent from "../components/MapComponent";

const Test = () => {
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);

  return (
    <Wrapper>
      <Header>
        
      </Header> 
    
      <Categories setSelectedSubSubCategory={setSelectedSubSubCategory} />
      <RentalSearch selectedSubSubCategory={selectedSubSubCategory} />

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
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  /* padding-left: 100px;
  padding-right: 100px; */
`;
