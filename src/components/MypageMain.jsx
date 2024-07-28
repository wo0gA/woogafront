import React from 'react'
import styled from 'styled-components';

const MypageMain = () => {
  return (
    <div>
      <Wrapper>
      <Banner><Title>마이페이지</Title></Banner>
      <Picture />
      <GoodsRecord>
        <RecordText>대여 기록</RecordText>
        <Process>
          <ProcessCard>
            <ProcessGoods>3</ProcessGoods>
            <OnProcess>대여 신청</OnProcess>
          </ProcessCard>
          <ProfileIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8.30664 26.9734L10.6666 29.3334L24 16.0001L10.6666 2.66675L8.30664 5.02675L19.28 16.0001L8.30664 26.9734Z" fill="#71717A"/>
          </svg>
          </ProfileIcon>
          <ProcessCard>
            <ProcessGoods>1</ProcessGoods>
            <OnProcess>거래 승인</OnProcess>
          </ProcessCard>
          <ProfileIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8.30664 26.9734L10.6666 29.3334L24 16.0001L10.6666 2.66675L8.30664 5.02675L19.28 16.0001L8.30664 26.9734Z" fill="#71717A"/>
          </svg>
          </ProfileIcon>
          <ProcessCard>
            <ProcessGoods>0</ProcessGoods>
            <OnProcess>사용중</OnProcess>
          </ProcessCard>
          <ProfileIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8.30664 26.9734L10.6666 29.3334L24 16.0001L10.6666 2.66675L8.30664 5.02675L19.28 16.0001L8.30664 26.9734Z" fill="#71717A"/>
          </svg>
          </ProfileIcon>
          <ProcessCard>
            <ProcessGoods>12</ProcessGoods>
            <OnProcess>반납 완료</OnProcess>
          </ProcessCard>
        </Process>
        <GoodsItems>
        <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
        </GoodsItems>
      </GoodsRecord>
      <UnderBar />
      <GoodsRecord>
      <RecordText>등록 기록</RecordText>
      <Process>
          <ProcessCard>
            <ProcessGoods>3</ProcessGoods>
            <OnProcess>등록 물품</OnProcess>
          </ProcessCard>
          <ProfileIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8.30664 26.9734L10.6666 29.3334L24 16.0001L10.6666 2.66675L8.30664 5.02675L19.28 16.0001L8.30664 26.9734Z" fill="#71717A"/>
          </svg>
          </ProfileIcon>
          <ProcessCard>
            <ProcessGoods>1</ProcessGoods>
            <OnProcess>거래 승인</OnProcess>
          </ProcessCard>
          <ProfileIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8.30664 26.9734L10.6666 29.3334L24 16.0001L10.6666 2.66675L8.30664 5.02675L19.28 16.0001L8.30664 26.9734Z" fill="#71717A"/>
          </svg>
          </ProfileIcon>
          <ProcessCard>
            <ProcessGoods>0</ProcessGoods>
            <OnProcess>사용중</OnProcess>
          </ProcessCard>
          <ProfileIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8.30664 26.9734L10.6666 29.3334L24 16.0001L10.6666 2.66675L8.30664 5.02675L19.28 16.0001L8.30664 26.9734Z" fill="#71717A"/>
          </svg>
          </ProfileIcon>
          <ProcessCard>
            <ProcessGoods>12</ProcessGoods>
            <OnProcess>반납 완료</OnProcess>
          </ProcessCard>
        </Process>
        <GoodsItems>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
          <GoodsCard>
            <GoodsPic>
              <GoodsDday>D- 5</GoodsDday>
            </GoodsPic>
            <GoodsDescription>
              <GoodsName>아동용 자전거</GoodsName>
              <GoodsDate>24.07.24 ~ 2024.07.30</GoodsDate>
            </GoodsDescription>
          </GoodsCard>
        </GoodsItems>
      </GoodsRecord>
      </Wrapper>
    </div>
  )
}

export default MypageMain

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Banner = styled.div`
  height: 6rem;
  width: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Title = styled.div`
    text-align: left;
    width: 100%;
    font-size: 20px;
    font-weight: 470;
    margin-left: 4rem;
`;

const Picture = styled.div`
    height: 20rem;
    width: 100%;
    background-color: #dcdcdc;
`;

const GoodsRecord = styled.div`
  width: 85%;
`;

const RecordText = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Process = styled.div`
    background-color: #e4e3e3;
    display: flex;
    height: 8rem;
    width: 75%;
    align-items: center;
    border-radius: 15px;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;
`;

const OnProcess = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const ProcessCard = styled.div`

`;

const ProcessGoods = styled.div`
      font-size: 30px;
      font-weight: 450;
      margin-bottom: 1rem;
`;

const GoodsItems = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-x: auto;
  height: 11rem;
`;

const GoodsCard = styled.div`
  height: 8rem;
  width: 8rem;
  margin-right: 1rem;
`;

const GoodsPic = styled.div`
  background-color: #aebac5;
  border-radius: 10px;
  height: 8rem;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
`;

const GoodsDday = styled.div`
  background-color: yellow;
  width: 2rem;
  height: 1rem;
  font-size: 10px;
  font-weight: 510;
  align-items: center;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 7px;
  left: 10px;
`;

const GoodsDescription = styled.div`
`;

const GoodsName = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: left;
`;

const GoodsDate = styled.div`
  font-size: 10px;
  text-align: left;
`;

const ProfileIcon = styled.div`
  
`;

const UnderBar = styled.div`
  width: 85%;
  background-color: #e4e4e4;
  height: 0.7rem;
  margin-bottom: 2.5rem;
`;