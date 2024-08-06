import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import empty from '../../images/Frame 114.png'

const SearchResultCard = ({ selectedProducts, setResultCard }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const getData = async () => {
        await fetch('https://server.templ.es/products/')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        getData().then(console.log(data));
    }, []);

    const handleItemClick = (productID) => {
        window.location.href = `/goodsDetail/${productID}`;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 데이터 분할 함수
    const paginate = (array, pageNumber, itemsPerPage) => {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return array.slice(start, end);
    };

    const displayedProducts = selectedProducts ? paginate(selectedProducts, currentPage, itemsPerPage) : paginate(data, currentPage, itemsPerPage);
    const totalPages = Math.ceil((selectedProducts ? selectedProducts.length : data.length) / itemsPerPage);

    return (
        <Wrapper>
            {displayedProducts.length === 0 ? (
                <div style={{ paddingTop: "2rem" }}>검색 결과가 없습니다.</div>
            ) : (
                displayedProducts.map((product) => (
                    <SearchResultCards key={product.id} onClick={() => handleItemClick(product.id)}>
                        {product.thumbnails && product.thumbnails[0] ? 
                            <ResultImage src={product.thumbnails[0].thumbnail} alt={product.name} /> : 
                            <ResultImage src={empty} alt="No Image Available" />}
                        <ResultDescription>
                            <ResultName>{product.name}</ResultName>
                            <PriceWrapper>
                                <ResultPrice>일: {product.rental_fee_for_a_day}원</ResultPrice>
                                <ResultPrice>주: {product.rental_fee_for_a_week}원</ResultPrice>
                            </PriceWrapper>
                        </ResultDescription>
                    </SearchResultCards>
                ))
            )}
            <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PageNumber key={index + 1} onClick={() => handlePageChange(index + 1)} isActive={currentPage === index + 1}>
                        {index + 1}
                    </PageNumber>
                ))}
            </Pagination>
        </Wrapper>
    );
};

export default SearchResultCard;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
`;

const SearchResultCards = styled.div`
    margin-top: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 15rem;
    width: 12rem;
    padding: 10px;
    border: 1px solid #E4E4E7;
//    background-color: #bfbfbf;
    margin-inline: 5px;
    margin-right: 1rem;
    cursor: pointer;
`;

const ResultImage = styled.img`
    width: 100%;
    height: 10rem;
    object-fit: cover; //비율 구기지 않고 그냥 프레임에 맞게 자르게!!
`;

const ResultDescription = styled.div`
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
`;

const ResultName = styled.div`
    font-weight: bold;
`;

const ResultPrice = styled.div`
    font-size: 10px;
    text-align: left;
    margin-top: 5px;
`;

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

const PageNumber = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 12px;
    padding-left: 2px;
    padding-right: 2px;
    margin: 0 5px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    background-color: ${props => (props.isActive ? '#ddd' : 'white')};

    &:hover {
        background-color: #eee;
    }
`;
