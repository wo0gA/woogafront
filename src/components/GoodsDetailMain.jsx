import React from 'react'
import styled from 'styled-components'
import goodsimage from '../images/badminton.png'

const GoodsDetailMain = () => {
  return (
    <Wrapper>
      <GoodsDetail>
        <GoodsImage>
          goodsimage

        </GoodsImage>
        <GoodsInfo>
          goodsinfo 
        </GoodsInfo>
      </GoodsDetail>
      <Choice>
        <Calender>
          calender
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
  width: 100%;
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