import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import empty from '../../images/Frame 114.png'

const SearchResultCard = ({selectedProducts, setResultCard}) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch('https://server.templ.es/products/')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
            //console.log();
    };

    useEffect(() => {
        getData().then(console.log(data));
    }, []);

    const handleItemClick = (productID) => {
        window.location.href = `/goodsDetail/${productID}`;
    };

    return (
        <Wrapper>
            { selectedProducts ? (
                <>
                    {selectedProducts.length === 0 ? <><div style={{paddingTop: "2rem"}}>검색 결과가 없습니다.</div></> : <>{selectedProducts.map((selectedProducts) => (
                        <SearchResultCards key={selectedProducts.id} onClick={()=>handleItemClick(selectedProducts.id)}>
                           {selectedProducts.thumbnails[0] ? 
                            <ResultImage src={selectedProducts.thumbnails[0].thumbnail} alt={selectedProducts.name} /> :  <ResultImage src={empty}/>}
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
                        <SearchResultCards key={item.id} onClick={()=>handleItemClick(item.id)}>
                        {item.thumbnails[0] ? 
                            <ResultImage src={item.thumbnails[0].thumbnail} alt={item.name}/> : <ResultImage src={empty}/>}
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
    padding: 10px;
    border: 1px solid #E4E4E7;
//    background-color: #bfbfbf;
    margin-inline: 5px;
    margin-right: 1rem;
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