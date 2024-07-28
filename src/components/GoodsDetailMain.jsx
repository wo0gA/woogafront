import React from 'react'
import styled from 'styled-components'
import goodsimage from '../images/badminton.png'
import ReactCalendar from './special/ReactCalendar'
import RecommendGoods from './RecommendGoods'

const GoodsDetailMain = () => {
  return (
    <Wrapper>
      <GoodsDetail>
        <GoodsImage>
        </GoodsImage>
        <GoodsInfo>
          <GoodsTitle>
            <GoodsTitle_Category>
              아웃도어
            </GoodsTitle_Category>
            <GoodsTitle_Name>
              배드민턴 세트
            </GoodsTitle_Name>
            <GoodsTitle_Registrant>
              <ResistrantName>잉잉 님</ResistrantName>
              <ResistrantLocation>동작구</ResistrantLocation>
            </GoodsTitle_Registrant>
          </GoodsTitle>
          <GoodsDescription>
            <Left>상품 설명</Left>
            <Right>배드민턴 세트입니다. 훼르자 브륄란떼 제품으로 알고 있어요. 
              아이 방과후 용으로 샀다가, 집에서 놀고 있네요. 물건 상태 좋습니다. 셔틀콕도 들어있어요.
            </Right>
          </GoodsDescription>
          <GoodsCost>
            <Left>대여료</Left>
            <Right>일 1,000원 주 5,000원</Right>
          </GoodsCost>
          <GoodsDeliveryFee>
            <Left>배송비</Left>
            <Right>3,000원</Right>
          </GoodsDeliveryFee>
          <GoodsTransactionPlace>
            <Left>직거래 장소</Left>
            <Right>중앙대학교 정문 앞</Right>
          </GoodsTransactionPlace>
        </GoodsInfo>
      </GoodsDetail>
      <Choice>
        <Calender>
          <ReactCalendar/>
        </Calender>
        <Cost>
          <CostUp>
            <DayChoice>일별 대여</DayChoice>
            <WeekChoice>주별 대여</WeekChoice>
          </CostUp>
          <CostDown>
            <TotalCalculation>
              <TotalDays>
                총 2 일
              </TotalDays>
              <TotalCost>
                전체 대여료 2,000원
              </TotalCost>
            </TotalCalculation>
            <RentButton>
              대여하기
            </RentButton>
          </CostDown>
        </Cost>
      </Choice>
      <RecommendGoods>
      </RecommendGoods>
      <Under>
        <Description>
          description
        </Description>
        <Review>
          <GoodsReview>goodsreview</GoodsReview>
          <UserReview>userreview</UserReview>
        </Review>
      </Under>
    </Wrapper>
  )
}

export default GoodsDetailMain


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 100%;
  box-sizing: border-box;
`;

const GoodsDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;

  box-sizing: border-box;
  border: 1px solid black;
`;
const GoodsImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid black;

  background-image: url('${goodsimage}');
  background-repeat: no-repeat; /* 배경 이미지 반복 안 함 */
  background-size: cover; /* 요소 전체를 덮도록 이미지 크기 조정 */
  background-position: center; /* 이미지가 가운데에 배치되도록 설정 */
`;
const GoodsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;

  box-sizing: border-box;
  border: 1px solid black;

  & > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const GoodsTitle = styled.div`  
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  margin-bottom: 20px;

  border-bottom: 1.5px solid black;
`;
const GoodsTitle_Category = styled.div`
  font-size: 14px;
`;
const GoodsTitle_Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const GoodsTitle_Registrant = styled.div`
    font-size: 14px;
`;
const ResistrantName = styled.span`
  font-weight: bold;
`;
const ResistrantLocation = styled.span`
  margin-left: 10px;
`;


const GoodsDescription = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 90%;
`;
const GoodsCost = styled.div`
  display: flex;
  text-align: left;
  width: 90%;
`;
const GoodsDeliveryFee = styled.div`
  display: flex;
  text-align: left;
  width: 90%;
`;
const GoodsTransactionPlace = styled.div`
  display: flex;
  text-align: left;
  width: 90%;
`;


const Choice = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
`;
const Calender = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid black;
`;
const Cost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 20px;
  border: 1px solid black;
`;
const DayChoice = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  border: 1px solid grey;
  border-radius: 30px;
  text-align: right;
  align-items: center;
  justify-content: center;

  margin-bottom: 5px;
  background-color: #f0f0f0;
`;
const WeekChoice = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  border: 1px solid grey;
  border-radius: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const TotalCalculation = styled.div`
  display: flex;
  flex-direction: column; 
  width: 90%;
  font-weight: bold;
  font-size: 20px;
`;
const TotalDays = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;
const TotalCost = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: right;
`; 
const RentButton = styled.div` 
  display: flex;
  width: 90%; 
  height: 50px;
  border: 1px solid grey;
  border-radius: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background-color: #fbff81;
`;



const Under = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid black;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid black;
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid black;
`;  
const GoodsReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  border: 1px solid black;
`;  
const UserReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  border: 1px solid black;
`;  


const Left = styled.div`
  width: 20%;
  font-weight: bold;
`;
const Right = styled.div`
  width: 80%;

  font-size: 14px;
`;

const CostUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CostDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;