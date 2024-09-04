import React, { useState } from 'react';
import styled from 'styled-components';
import categories from './data/categories';
import { BREAKPOINT_PHONE, mediaQueries } from '../mediaquery/mediaQuery';

const CategoryComponent = ({ onItemSelect }) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleMainCategoryClick = (category) => {
    setSelectedMainCategory(category);
    setSelectedSubCategory(null);
    onItemSelect(category);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    onItemSelect(subCategory);
  };

  const handleItemClick = (item) => {
    onItemSelect(item);
  };

  return (
    <Wrapper>
      <CategoryContainer>
        <MainCategories>
          <CatTitle>전체 카테고리</CatTitle>
          {Object.keys(categories).map((mainCategory) => (
            <CategoryItem
              key={mainCategory}
              onClick={() => handleMainCategoryClick(mainCategory)}
              selected={selectedMainCategory === mainCategory}
            >
              {mainCategory}
            </CategoryItem>
          ))}
        </MainCategories>
        {selectedMainCategory && (
          <SubCategories>
            <CatTitle>{selectedMainCategory}</CatTitle>
            {Object.keys(categories[selectedMainCategory]).map((subCategory) => (
              <SubCategoryItem
                key={subCategory}
                onClick={() => handleSubCategoryClick(subCategory)}
                selected={selectedSubCategory === subCategory}
              >
                {subCategory}
              </SubCategoryItem>
            ))}
          </SubCategories>
        )}
        {selectedMainCategory && selectedSubCategory && (
          <Items>
            <CatTitle>{selectedSubCategory}</CatTitle>
            {categories[selectedMainCategory][selectedSubCategory].map((item) => (
              <Item key={item} onClick={() => handleItemClick(item)}>
                {item}
              </Item>
            ))}
          </Items>
        )}
      </CategoryContainer>
    </Wrapper>
  );
};

export default CategoryComponent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  ${mediaQueries(BREAKPOINT_PHONE)}{
    width: 100%;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  width: 80%;
  background-color: rgb(244,244,245);
  border: 1px solid var(--zinc-300, #D4D4D8);
  ${mediaQueries(BREAKPOINT_PHONE)}{
    width: 100%;
    height: 100%;
    font-size: 9px;
  }
`;

const MainCategories = styled.div`
  width: 20%;
  margin-right: 1rem;
  text-align: left;
  border-right: 1px solid var(--zinc-300, #D4D4D8);
  ${mediaQueries(BREAKPOINT_PHONE)}{
    width: 40%;
  }
`;

const SubCategories = styled.div`
  width: 40%;
  margin-right: 1rem;
  text-align: left;
  border-right: 1px solid var(--zinc-300, #D4D4D8);
  ${mediaQueries(BREAKPOINT_PHONE)}{
    width: 30%;
    margin-right: 0.5rem;
  }
`;

const CategoryItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#F5FA25' : 'transparent')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

const SubCategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'normal')};
  color: ${(props) => (props.selected ? '#FFD56A' : 'black')};
  width: 45%;
`;

const Items = styled.div`
  text-align: left;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'normal')};
  color: ${(props) => (props.selected ? '#FFD56A' : 'black')};
  flex-grow: 1;
`;

const Item = styled.div`
  padding: 0.5rem 0;
  margin-left: 10px;
`;

const CatTitle = styled.div`
  text-align: left;
  width: 100%;
  font-size: 14px;
  font-weight: 550;
  margin: 10px 10px 10px 10px;
  color: #000;
  ${mediaQueries(BREAKPOINT_PHONE)}{
    font-size: 10px;
  }
`;
