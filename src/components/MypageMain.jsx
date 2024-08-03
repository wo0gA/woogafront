import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import levelpic from '../images/image 59.png';

const MypageMain = () => {
  const accessToken = 'your_access_token_here'; // Replace this with your actual access token

  const [userData, setUserData] = useState(null);
  const [isRentSelected, setIsRentSelected] = useState(true);
  const [historyData, setHistoryData] = useState(null);
  const [RegisterData, setRegiserData] = useState(null);

  const fetchHistoryDataFromAPI = async () => {
    try {
      const response = await fetch('https://server.templ.es/rentalhistories/rental/');
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
      const data = await fetchHistoryDataFromAPI();
      setUserData(data);
    };
    getData();
  }, []);

  const fetchRegisterDataFromAPI = async () => {
    try {
      const response = await fetch('https://server.templ.es/rentalhistories/rental/');
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
      const data = await fetchRegisterDataFromAPI();
      setUserData(data);
    };
    getData();
  }, []);

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
      const data = await fetchDataFromAPI(accessToken);
      setUserData(data);
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
        <GoodsRecord>
          <RecordText>대여 기록</RecordText>

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
            {/* Other GoodsCard components... */}
          </GoodsItems>
        </GoodsRecord>   
      </Wrapper>
    );
  }

  function Register() {
    return (
      <Wrapper>
        <GoodsRecord>
          <RecordText>등록 기록</RecordText>
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
            {/* Other GoodsCard components... */}
          </GoodsItems>
        </GoodsRecord>   
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
          {/* 각각의 버튼 */}
          <Buttons>
            <button onClick={showRent}>
              대여하기
            </button>
            <button onClick={showRegister}>
              등록하기
            </button>
          </Buttons>
          {/* 페이지 하단 토글 요소 */}
          <main>
            {isRentSelected ? <Rent /> : <Register />}
          </main>
        </MainComponents>     
      </Wrapper>
    </div>
  );
};

export default MypageMain

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