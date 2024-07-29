import React from 'react'
import styled from 'styled-components'

const RecommendGoods = () => {
  return (
    <Wrapper>
        <RecommendGoodsTitle>
            다른 운동용품들은 어때요?
        </RecommendGoodsTitle>
        {/* RecommendGoodsList */}
        <RecommendGoodsList>
            <RecommendGoodsCard>

            </RecommendGoodsCard>
            <RecommendGoodsCard>

            </RecommendGoodsCard>
            <RecommendGoodsCard>

            </RecommendGoodsCard>
            <RecommendGoodsCard>

            </RecommendGoodsCard>
        </RecommendGoodsList>
            `
    </Wrapper>
  )
}


const Wrapper = styled.div`
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

const RecommendGoodsTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
`;

const RecommendGoodsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    box-sizing: border-box;
`;

const RecommendGoodsCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 200px;
    height: 150px;
    box-sizing: border-box;
    border: 1px solid black;
`;

export default RecommendGoods