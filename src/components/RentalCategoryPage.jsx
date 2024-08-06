import React, { useState } from 'react';
import styled from 'styled-components';
import categories from './data/categories';
import SearchResultCard from './Card/SearchResultCard';
import CategoryComponent from './CategoryComponent';
import suggest1 from '../images/suggest1.png';
import suggest2 from '../images/suggest2.png';
import suggest3 from '../images/suggest3.png';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const RentalCategoryPage = ({ searchString, onItemSelect, selectedProducts }) => {
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [resultCard, setResultCard] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState('recent');

    const handleMainCategoryClick = (category) => {
        setSelectedMainCategory(category);
        fetchProducts("category", category); // Main category click handler
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
            console.error(err);
        }
    };

    //정렬 기준을 url에 추가하는 함수
    const location = useLocation();
    const navigate = useNavigate();
    const updateOrderParam = (order) => {
        setSelectedOrder(order);  // Update the selected order state
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("order", order);
        navigate(`?${searchParams.toString()}`);
    }

    //category를 url에 추가하는 함수
    const updateCategoryParam = (categoryName) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("category", categoryName);
        navigate(`?${searchParams.toString()}`);
    };


    const suggestNavigate = (categoryName) => {
        navigate(`/rentalCategory?category=${categoryName}`);
    }


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
                                    onClick={() => updateCategoryParam(mainCategory)}
                                >
                                    {mainCategory}
                                </CategoryItem>
                            ))}
                        </SportsDescription>
                    </CategoryContents>
                </Category>
                <Contentarr>
                    <SearchResult>
                        {searchString && (
                            <Title>{searchString}에 대한 검색결과</Title>
                        )}
                        <SearchNavigation>
                            <Nav onClick={() => updateOrderParam("recent")} isSelected={selectedOrder === "recent"}>최신순</Nav>
                            <Nav onClick={() => updateOrderParam("views")} isSelected={selectedOrder === "views"}>인기순</Nav>
                            <Nav onClick={() => updateOrderParam("min_price")} isSelected={selectedOrder === "min_price"}>낮은 가격순</Nav>
                        </SearchNavigation>
                        <SearchResultBox>
                            <SearchResultCard selectedProducts={selectedProducts} setResultCard={setResultCard} />
                        </SearchResultBox>
                    </SearchResult>
                    <Popular>
                        <Title>바로지금의 제안</Title>
                        <Magazines>
                            <MagazinesItem><img onClick={()=>suggestNavigate("요가 및 필라테스")} src={suggest1} width='200px' alt="magazine1" /></MagazinesItem>
                            <MagazinesItem><img onClick={()=>suggestNavigate("축구")} src={suggest2} width='200px' alt="magazine2" /></MagazinesItem>
                            <MagazinesItem><img onClick={()=>suggestNavigate("수상 스포츠")} src={suggest3} width='200px' alt="magazine3" /></MagazinesItem>
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
    cursor: pointer;
    margin-right: 1rem;
    font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
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
    margin-top: 10px;
    font-size: 12px;
    text-align: left;
    justify-content: space-between;
`;

const Popular = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    color: #000;
`;

const Contentarr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`;

const SearchNavigation = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    font-size: 14px;
    border-bottom: 1px solid #000;
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
    cursor: pointer;
`;

const CategoryItem = styled.div`
    margin-bottom: 0.7rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
