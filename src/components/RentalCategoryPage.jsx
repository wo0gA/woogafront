import React, { useState } from 'react'
import styled from 'styled-components'
import categories from './data/categories';
import SearchResultCard from './Card/SearchResultCard';
import CategoryComponent from './CategoryComponent';

const RentalCategoryPage = ( { searchTerm } ) => {
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [resultCard, setResultCard] = useState();

    const handleMainCategoryClick = (category) => {
    setSelectedMainCategory(category);
  };

    const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

    return (
    <Wrapper>
           <CategoryComponent onItemSearch = {handleMainCategoryClick} onItemSelect={handleItemSelect} />
        <Contents>
            <Category>
            <CatTitle>카테고리</CatTitle>
            <CategoryContents>
            <SportsDescription>
          {Object.keys(categories).map((mainCategory) => (
            <CategoryItem
              key={mainCategory}
              onClick={() => handleMainCategoryClick(mainCategory)}
              selected={selectedMainCategory === mainCategory}
            >
              {mainCategory}
            </CategoryItem>
          ))}
            </SportsDescription>
            </CategoryContents>
            </Category>
            <Contentarr>
                <SearchResult>
                        {/* Display search term results */}
                        {searchTerm && (
                            <Title>'{searchTerm}'에 대한 검색결과</Title>
                        )}
                        {/* Display category results */}
                        {selectedItem && !searchTerm && (
                            <Title>'{selectedItem}'에 대한 카테고리 검색결과</Title>
                        )}
                <SearchNavigation>
                    <Nav>관련도순</Nav>
                    <Nav>판매순</Nav>
                    <Nav>낮은 가격순</Nav>
                    <Nav>매너지수 높은순</Nav>
                    <Nav>장기대여 가능순</Nav>
                    <Nav>최근 등록순</Nav>
                </SearchNavigation>
                <SearchResultBox>
                        <SearchResultCard setResultCard={setResultCard} />
                </SearchResultBox>
                </SearchResult>
                <Popular>
                <Title>빌리GO의 제안</Title>
                <Magazines>
                    <MagazinesItem>집에서도<br/>건강하게<br/>홈트레이닝</MagazinesItem>
                    <MagazinesItem>풋살 & 축구,<br/>그 차이점을<br/>알아보다</MagazinesItem>
                    <MagazinesItem>뜨거운 여름<br/>레저스포츠가<br/>제격</MagazinesItem>
                </Magazines>
                <MorePop $button={true}>더보기</MorePop>
                </Popular>
            </Contentarr>
        </Contents>
    </Wrapper>
);
}

export default RentalCategoryPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    /* border: 1px solid black; */

    & > * {
        margin-top: 25px; /* 모든 자식 요소에 left-margin 적용 */
    }
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const Contents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 95%;
    height: 100%;
`;

const Category = styled.div`
    border-radius: 20px;
    background: #FFF;

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 8%;
    height: auto;
    padding: 18px;
    z-index: 1000;
    top: 150px;

    margin-right: 3rem;
`;

const CategoryContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
`;

const SportsDescription = styled.div`
    margin-top: px;
    font-size: 12px;
    text-align: left;
    justify-content: space-between;
`;

const Popular = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    /* border: 1px solid black; */
`;

// --
const Title = styled.div`
    text-align: left;
    width: 100%;
    font-size: 24px;
    font-weight: 550;
    margin-bottom: 10px;
`;

const CatTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 14px;
    font-weight: 550;
    margin-bottom: 10px;
    color: #000;

/* head 2 
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 30px */
`;

const Contentarr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    padding-left: 20px;
`;

const SearchNavigation = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: 100%;
    font-size: 14px;
`;

const SearchResult = styled.div`
    width: 100%;
    padding-bottom: 100px;
`;

const SearchResultBox = styled.div`
    display: flex;
    overflow: hidden;
    margin-top: 5px;
    justify-content: space-between;
    `;

const SearchResultCards = styled.div`
    margin-top: 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 200px;
    width: 200px;
    background-color: #bfbfbf;

    margin-inline: 5px;
`;

const Magazines = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
    justify-content: space-between;

`;

const MagazinesItem = styled.div`
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 200px;
    width: 200px;
    background-color: beige;
    font-size: 27px;
    font-weight: 400;
    margin-inline: 5px; 
    padding-bottom: 20px;
`;

const MorePop = styled.div`
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    background-color: #8ec18b; 
    color: black; 
    border: none; 
    border-radius: 30px; 
    padding: 10px 30px; 
    font-size: 16px; 
    font-weight: bold; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
    margin-bottom: 25px;

    &:hover {
        background-color: #8bb06f;
    }
    
    &:focus {
        outline: none; 
    }

`;

const CategoryItem = styled.div`
    margin-bottom: 0.7rem;
`;