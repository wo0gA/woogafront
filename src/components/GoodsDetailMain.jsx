import React from 'react'
import styled from 'styled-components'
import goodsimage from '../images/badminton.png'
import ReactCalendar from './special/ReactCalendar'

const GoodsDetailMain = () => {
  return (
    <Wrapper>
      <GoodsDetail>
        <GoodsImage>
          goodsimage
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
           cost
        </Cost>
      </Choice>
      <RecommendGoods>
        recommendgoods
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

  /* padding-left: 100px;
  padding-right: 100px; */
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
  height: 250px;
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
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid black;
`;


const RecommendGoods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 20px;

  box-sizing: border-box;
  border: 1px solid black;
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