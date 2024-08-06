import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import categories from './data/categories';
import SearchResultCard from './Card/SearchResultCard';
import CategoryComponent from './CategoryComponent';
import mag1 from '../images/Mask group1.png'
import mag2 from '../images/Mask group2.png'
import mag3 from '../images/Mask group3.png'
import axios from 'axios';

const RentalCategoryPage = ({ searchTerm, selectedItem, onItemSelect, selectedProducts }) => {
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [resultCard, setResultCard] = useState(null);

    const handleMainCategoryClick = (category) => {
        setSelectedMainCategory(category);
    };

    const SERVER_URL = "server.templ.es";

    const fetchProducts = async (param, categoryName) => {
		const trimmedName = categoryName.replaceAll(" ", "");
		try {
			const response = await axios.get(
				`https://${SERVER_URL}/products/?${param}=${trimmedName}`
			);
            console.log(response);
		} catch (err) {
		}
	};

return (
    <Wrapper>
        <CategoryComponent onItemSearch={handleMainCategoryClick} onItemSelect={onItemSelect} />
        <Contents>
            <Category>
                <CatTitle>카테고리</CatTitle>
                <CategoryContents>
                    <SportsDescription>
                        {Object.keys(categories).map((mainCategory) => (
                            <CategoryItem
                                key={mainCategory}
                                selected={selectedMainCategory === mainCategory}
                                onClick={() => fetchProducts("category", mainCategory)}
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
                        <Nav>최신순</Nav>
                        <Nav>인기순</Nav>
                        <Nav>낮은 가격순</Nav>
                    </SearchNavigation>
                    <SearchResultBox>
                        <SearchResultCard selectedProducts={selectedProducts} setResultCard={setResultCard} />
                    </SearchResultBox>
                </SearchResult>
                <Popular>
                    <Title>바로지금의 제안</Title>
                    <Magazines>
                        <MagazinesItem><img src={mag1} width='200px' /></MagazinesItem>
                        <MagazinesItem><img src={mag2} width='200px' /></MagazinesItem>
                        <MagazinesItem><img src={mag3} width='200px' /></MagazinesItem>
                    </Magazines>
                </Popular>
            </Contentarr>
        </Contents>
    </Wrapper>
);
};

export default RentalCategoryPage;

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
    width: 12%;
    height: auto;
    padding: 18px;
    z-index: 1000;
    top: 150px;

    margin-right: 2rem;
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
    margin-bottom: 2rem;
`;

const CatTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 14px;
    font-weight: 550;
    margin-bottom: 10px;
    color: #000`;

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
    justify-content: space-evenly;
    width: 35%;
    height: 100%;
    font-size: 14px;`;

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

const Magazines = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 6rem;
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
    font-size: 27px;
    font-weight: 400;
    margin-inline: 5px; 
    padding-bottom: 20px;
`;

const CategoryItem = styled.div`
    margin-bottom: 0.7rem;
`;