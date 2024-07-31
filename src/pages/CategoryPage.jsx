import styled from "styled-components";
import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalCategoryPage from "../components/RentalCategoryPage";
import CategoryComponent from "../components/CategoryComponent";

const CategoryPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemSelect = (item) => {
      setSelectedItem(item);
    };
    
  return (
    <Wrapper>
      <Header>
        
      </Header> 
    
      <CategoryComponent onItemSelect={handleItemSelect} />
      {selectedItem && <RentalCategoryPage selectedItem={selectedItem} />}
      <Footer>
       
      </Footer>
    </Wrapper>
  )
}

export default CategoryPage

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
