import React, { useState } from 'react';
import styled from 'styled-components';
import categories from './data/categories';

const CategoryComponent = ({onItemSelect}) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleMainCategoryClick = (category) => {
    setSelectedMainCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
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
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
    width: 80%;
    background-color: #f0f0f0;
`;

const MainCategories = styled.div`
  width: 20%;
  margin-right: 20px;
  text-align: left;
  border: 1px solid var(--zinc-300, #D4D4D8);
`;

const SubCategories = styled.div`
  width: 35%;
  margin-right: 20px;
  text-align: left;
  border: 1px solid var(--zinc-300, #D4D4D8);
`;

const CategoryItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'white' : '#f0f0f0')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

const SubCategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  width: 45%;
`;

const Items = styled.div`
  text-align: left;
  border: 1px solid var(--zinc-300, #D4D4D8);
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
    //border-bottom: 1px solid var(--zinc-300, #D4D4D8);
`;