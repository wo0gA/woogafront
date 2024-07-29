import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <Title>Contact us</Title>
      <ContentWrapper>
        <Logo>wooga</Logo>
        <InfoBox>
          <Info>PM 강지영 instagram @</Info>
          <Info>DE 양채령 instagram @d_idicoode</Info>
        </InfoBox>
        <InfoBox>
          <Info>FE 박수빈 instagram @</Info>
          <Info>FE 조유빈 instagram @joeyycho</Info>
        </InfoBox>
        <InfoBox>
          <Info>BE 김동영 instagram @</Info>
          <Info>BE 이영주 instagram @</Info>
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
    background-color: #F0F0F0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 550;
  text-align: left;
  width: 75%;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-between;
  text-align: left;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 550;
  margin-right: 2rem;
`;

const InfoBox = styled.div`
`;

const Info = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;