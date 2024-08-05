import React from 'react'
import styled from 'styled-components'
import wooga from '../images/WOOGA.png'

const Footer = () => {
  return (
    <Wrapper>
      <UpperWrapper>
      <Info>운동의 문턱을 낮추다, 지금 바로(borrow)하세요!</Info>
      <div><img src={wooga} width='100rem'/></div>
      <Info>Chung-ang University LIKELION 12th HACKATHON</Info>
      </UpperWrapper>
      <ContentWrapper>
        <InfoBox>
          <Info>Project Manager<br/>강지영</Info>
          <Info>Designer<br/>양채령</Info>
          <Info>Front-End<br/>박수빈</Info>
          <Info>Front-End<br/>조유빈</Info>
          <Info>Back-End<br/>김동영</Info>
          <Info>Back-End<br/>이영주</Info>
        </InfoBox>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12rem;
    background-color: rgb(244,244,245);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  text-align: left;
`;

const InfoBox = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Info = styled.div`
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid #D4D4D8;
`;