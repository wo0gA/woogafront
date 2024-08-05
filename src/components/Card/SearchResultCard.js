import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchResultCard = ({selectedProducts, setResultCard}) => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('https://server.templ.es/products/')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Wrapper>
            { selectedProducts ? (
                <>
                    {selectedProducts.length === 0 ? <><div style={{paddingTop: "2rem"}}>검색 결과가 없습니다.</div></> : <>{selectedProducts.map((selectedProducts) => (
                        <SearchResultCards key={selectedProducts.id}>
                            <ResultImage src={selectedProducts.photos} alt={selectedProducts.name} />
                            <ResultDescription>
                                <ResultName>{selectedProducts.name}</ResultName>
                                <PriceWrapper>
                                <ResultPrice>일: {selectedProducts.rental_fee_for_a_day}원</ResultPrice>
                                <ResultPrice>주: {selectedProducts.rental_fee_for_a_week}원</ResultPrice>
                                </PriceWrapper>
                            </ResultDescription>
                        </SearchResultCards>
                    ))}</>}
                    
                </>
            ) : (
                <>
                    {data.map((item) => (
                        <SearchResultCards key={item.id}>
                            <ResultImage src={item.photos} alt={item.name} />
                            <ResultDescription>
                                <ResultName>{item.name}</ResultName>
                                <PriceWrapper>
                                <ResultPrice>일: {item.rental_fee_for_a_day}원</ResultPrice>
                                <ResultPrice>주: {item.rental_fee_for_a_week}원</ResultPrice>
                                </PriceWrapper>
                            </ResultDescription>
                        </SearchResultCards>
                    ))}
                </>
            )}
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
//    background-color: #bfbfbf;
    margin-inline: 5px;
    margin-right: 1rem;
`;

const ResultImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover; //비율 구기지 않고 그냥 프레임에 맞게 자르게!!

`;

const ResultDescription = styled.div`
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
//    background-color: beige;
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