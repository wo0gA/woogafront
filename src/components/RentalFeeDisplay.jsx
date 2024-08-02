import React, { useContext, useEffect } from 'react';
import { RentalFeeContext } from '../context/RentalFeeContext';
import styled from 'styled-components';

const RentalFeeDisplay = () => {
  const { rentalFee, dailyRate, totalDays, selectedRange } = useContext(RentalFeeContext);

  //확인용
  useEffect(() => {
    console.log(typeof(rentalFee));
  });

  return (

    <Wrapper>
        <Title>
          <TitleIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
            <path d="M48.75 9.25L45 5.5L41.25 9.25L37.5 5.5L33.75 9.25L30 5.5L26.25 9.25L22.5 5.5L18.75 9.25L15 5.5V40.5H7.5V48C7.5 52.15 10.85 55.5 15 55.5H45C49.15 55.5 52.5 52.15 52.5 48V5.5L48.75 9.25ZM37.5 50.5H15C13.625 50.5 12.5 49.375 12.5 48V45.5H37.5V50.5ZM47.5 48C47.5 49.375 46.375 50.5 45 50.5C43.625 50.5 42.5 49.375 42.5 48V40.5H20V13H47.5V48Z" fill="#D4D4D8"/>
            <path d="M22.5 18H37.5V23H22.5V18ZM40 18H45V23H40V18ZM22.5 25.5H37.5V30.5H22.5V25.5ZM40 25.5H45V30.5H40V25.5Z" fill="#D4D4D8"/>
          </svg>
          </TitleIcon>
          <TitleText>
            예상 전체 대여료  <span>{rentalFee} 원</span>
          </TitleText>
        </Title>
        <DevisionLine />
        <Contents>
            {selectedRange && (
              <Row>
                대여 기간 <span>{selectedRange[0].toLocaleDateString('ko-KR')} - {selectedRange[1].toLocaleDateString('ko-KR')}</span>
              </Row>
            )}
          <Row>
            선택 일수 <span>{rentalFee.toLocaleString('ko-KR')} 일</span>
          </Row>
        </Contents>
      </Wrapper>
  );
};
export default RentalFeeDisplay;

const Wrapper = styled.div`
  width: auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #232323;
  border-radius: 8px;
  `;

const Title  = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 10px;
`;
const TitleIcon = styled.div`
  margin-right: 10px;
`;
const TitleText = styled.div`
  //밑으로 정렬
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: #a4a4a4;  

  span {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const Contents = styled.div`
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 15px;
  color: #a4a4a4;

  span {
    color: #333;
  }
`;

const DevisionLine = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid #c8c8c8;
`;