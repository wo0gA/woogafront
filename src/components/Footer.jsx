import React from 'react'
import styled from 'styled-components'
import wooga from '../images/WOOGA.png'

const Footer = () => {
  //깃헙 주소로 보내는 함수
  const goGithub = (link) => {
    window.open(link);
  }

  return (
    <Wrapper>
      <UpperWrapper>
      <Info>운동의 문턱을 낮추다, 지금 바로(borrow)하세요!</Info>
      <div><img src={wooga} width='100rem'/></div>
      <Info>Chung-ang University LIKELION 12th HACKATHON</Info>
      </UpperWrapper>
      <ContentWrapper>
        <InfoBox>
          <Info onClick={()=>goGithub("https://github.com/g0-kang")}>Project Manager<br/><span>강지영</span></Info>
          <Info onClick={()=>goGithub("https://github.com/d-idii")}>Designer<br/>양채령</Info>
          <Info onClick={()=>goGithub("https://github.com/suzzang2")}>Front-End<br/><span>박수빈</span></Info>
          <Info onClick={()=>goGithub("https://github.com/joeyycho")}>Front-End<br/><span>조유빈</span></Info>
          <Info onClick={()=>goGithub("https://github.com/Temple2001")}>Back-End<br/><span>김동영</span></Info>
          <Info onClick={()=>goGithub("https://github.com/JooJooda")}>Back-End<br/><span>이영주</span></Info>
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
  span {
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid #D4D4D8;
`;