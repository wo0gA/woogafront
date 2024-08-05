import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import levelpic from '../images/ill.png';
import empty from '../images/Frame 250.png';
import ReactCalendar from './special/ReactCalendar';

const MypageMain = () => {
	const accessToken = localStorage.getItem("access");
  const user_id = localStorage.getItem("userID");
  console.log(user_id);

  const [userData, setUserData] = useState(null);
  const [isRentSelected, setIsRentSelected] = useState(true);
  const [historyData, setHistoryData] = useState(null);
  const [registerData, setRegisterData] = useState(null);

  const fetchHistoryDataFromAPI = async (accessToken) => {
    try {
      const response = await fetch('https://server.templ.es/rentalhistories/rental/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
      const historyData = await response.json();
      console.log(historyData);
      return historyData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const fetchRegisterDataFromAPI = async (accessToken, user_id) => {
    console.log(user_id);
    try {
      const response = await fetch(`https://server.templ.es/accounts/${user_id}/store/products/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      const registerData = await response.json();
      console.log(registerData);
      return registerData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const fetchDataFromAPI = async (accessToken) => {
    try {
      const response = await fetch('https://server.templ.es/accounts/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  useEffect(() => {
    const getData = async () => {
      const userData = await fetchDataFromAPI(accessToken);
      setUserData(userData);
      const historyData = await fetchHistoryDataFromAPI(accessToken, user_id);
      setHistoryData(historyData);
      console.log('<<historydata>>: ', historyData);
      const registerData = await fetchRegisterDataFromAPI(accessToken, user_id);
      setRegisterData(registerData);
    };
    getData();
  }, [accessToken]);

  const showRent = () => {
    setIsRentSelected(true);
  };

  const showRegister = () => {
    setIsRentSelected(false);
  };

  function Rent() {
    return (
        <Wrapper>
          {historyData ?
        <W2>
        <GoodsRecord>
          <RecordText>대여 기록</RecordText>
          <GoodsItems>
          {historyData.map((historyData) => (
            <GoodsCard>
              <GoodsPic><img src={historyData.product.thumbnails[0].thumbnail} />
               <GoodsDday>D-{historyData.remaining_days}</GoodsDday>
              </GoodsPic>
              <GoodsDescription>
                <GoodsName>{historyData.product.name}</GoodsName>
                <GoodsDate>{historyData.rental_start_date} ~ {historyData.rental_end_date}</GoodsDate>
              </GoodsDescription>
            </GoodsCard>))}
          </GoodsItems>
        </GoodsRecord>
        </W2> : <img src={empty} width='10rem'/>}
      </Wrapper>
    );
  }

  function Register() {
    return (
      <Wrapper>
        <RegisterRecord>
          <RecordText>등록 기록</RecordText>
          <ItemBox>
          {registerData.map((registerData) => (
          <RegisterItem key={registerData.id}>
            <Itempic><img src={registerData.photos}/></Itempic>
            <Itemname>{registerData.name}</Itemname>
            <Itemprice>일 {registerData.rental_fee_for_a_day}원  주 {registerData.rental_fee_for_a_week}원</Itemprice>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 17.2495V20.9995H6.75L17.81 9.93951L14.06 6.18951L3 17.2495ZM20.71 7.03951C20.8027 6.947 20.8762 6.83711 20.9264 6.71614C20.9766 6.59517 21.0024 6.46548 21.0024 6.33451C21.0024 6.20355 20.9766 6.07386 20.9264 5.95289C20.8762 5.83192 20.8027 5.72203 20.71 5.62951L18.37 3.28951C18.2775 3.19681 18.1676 3.12326 18.0466 3.07308C17.9257 3.0229 17.796 2.99707 17.665 2.99707C17.534 2.99707 17.4043 3.0229 17.2834 3.07308C17.1624 3.12326 17.0525 3.19681 16.96 3.28951L15.13 5.11951L18.88 8.86951L20.71 7.03951Z" fill="#A1A1AA"/></svg>
          </RegisterItem>))}
          </ItemBox>
        </RegisterRecord>
        <ReactCalendar/> 
      </Wrapper>
    );
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Wrapper>
        <Banner><Title>마이페이지</Title></Banner>
        <UpperContents>
          <Picture><img src={levelpic} width="100%" /></Picture>
          <LevelRoad></LevelRoad>
          <ProfileSection>
            <Greeting>{userData.username} 님, 반가워요!</Greeting>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={userData.profile || 'default-profile.png'}
                  alt="Profile"
                  style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    backgroundColor: '#ffeb3b',
                    borderRadius: '50%',
                    padding: '5px',
                  }}
                >
                  ✎
                </span>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <div>{userData.level}</div>
                <div>{userData.username} 님</div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div>바로미터 {userData.manner_score}</div>
              <div style={{ backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden', marginTop: '10px' }}>
                <div
                  style={{
                    width: `${userData.manner_score}%`,
                    backgroundColor: '#ffeb3b',
                    height: '10px',
                  }}
                />
              </div>
            </div>
            <div>바로지금의 코멘트</div>
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
              <div>{userData.comment}</div>
            </div>
          </ProfileSection>
        </UpperContents>

        <MainComponents>
          <Buttons>
            <button onClick={showRent}>
              대여하기
            </button>
            <button onClick={showRegister}>
              등록하기
            </button>
          </Buttons>
          <main>
            {isRentSelected ? <Rent /> : <Register />}
          </main>
        </MainComponents>
      </Wrapper>
    </div>
  );
};

export default MypageMain;

const W2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainComponents = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
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
    width: 70%;
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

const Buttons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
  justify-content: space-between;
  width: 60%;
`;

const ProfileSection = styled.div`
  width: 30%;
  margin-left: 1rem;
  border: 1px solid #eee;
`;
const UpperContents = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 85%;
`;
const LevelRoad = styled.div``;
const Greeting = styled.div`
  padding: 20px;
  max-width: 300px;
  background-color: #ffeb3b;
  padding: 10px;
  font-size: 12px;
  text-align: left;
`;

const RegisterRecord = styled.div`
  width: 40%;
  align-items: flex-start;
`;

const ItemBox = styled.div`
  
`;
const RegisterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Itempic = styled.div`
  width: 1rem;
`;
const Itemname = styled.div`
  font-size: 12px;
  font-weight: 550;
`;
const Itemprice = styled.div`
  font-size: 10px;
  
`;