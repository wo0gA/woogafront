
import styled from "styled-components";
import React, { useState } from 'react'
import Header from "../components/Header";
import RentalSearch from "../components/RentalSearchPage";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

const SearchPage = () => {
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);

  return (
    <Wrapper>
      <Header>
        
      </Header> 
    
      <Categories setSelectedSubSubCategory={setSelectedSubSubCategory} />
      <RentalSearch selectedSubSubCategory={selectedSubSubCategory} />
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
