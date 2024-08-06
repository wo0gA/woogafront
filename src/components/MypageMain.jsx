import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import empty from '../images/Frame 250.png';
import ReactCalendar from './special/NonclickReactCalendar';
import { useNavigate, useParams } from 'react-router-dom';
import profileImage from '../images/profileImage.png';
import { getRentalHistory } from '../apis/product';

import level1 from '../images/level1.png';  
import level2 from '../images/level2.png';
import level3 from '../images/level3.png';
import level4 from '../images/level4.png';
import level5 from '../images/level5.png';

const MypageMain = () => {
  const accessToken = localStorage.getItem("access");
  const user_id = localStorage.getItem("userID");
  console.log(user_id);

  const [userData, setUserData] = useState(null);
  const [isRentSelected, setIsRentSelected] = useState(true);
  const [historyData, setHistoryData] = useState(null);
  const [registerData, setRegisterData] = useState(null);
  const [activeItem, setActiveItem] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [rentalData, setRentalData] = useState(null);
  const { productID } = useParams();
  const [levelImage, setLevelImage] = useState(level1);
  const [isLogin, setIsLogin] = useState(!!accessToken);

  const navigate = useNavigate();
  const switchCalendar = (productID) => {
    console.log(productID);
    navigate(`/myPage/${productID}`);
  };

  const handleEditClick = (productID) => {
    navigate(`/editProduct/${productID}`);
  };

  const handleDeleteClick = async (productID) => {
    if (window.confirm("등록된 물품을 삭제하시겠습니까?")) {
      try {
        await fetch(`https://server.templ.es/products/${productID}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        })
        alert("삭제하였습니다.")
      } catch (error) {
        alert("에러 발생! 삭제에 실패했습니다.")
      }
    }
  }

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
      console.log('userInfo:', data);
      
      if (data.level === 'NEWBIE') { 
        setLevelImage(level1);
      } else if (data.level === 'ROOKIE') {
        setLevelImage(level2);
      }
      else if (data.level === 'SEMIPRO') {
        setLevelImage(level3);
      }
      else if (data.level === 'PRO') {
        setLevelImage(level4);
      }
      else if (data.level === 'MASTER') {
        setLevelImage(level5);
      }

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      if (accessToken) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    checkLogin();

    const getData = async () => {
      if (isLogin) {
        const userData = await fetchDataFromAPI(accessToken);
        setUserData(userData);
        const historyData = await fetchHistoryDataFromAPI(accessToken, user_id);
        setHistoryData(historyData);
        console.log('<<historydata>>: ', historyData);
        const registerData = await fetchRegisterDataFromAPI(accessToken, user_id);
        setRegisterData(registerData);

        getRentalHistory(productID).then((data) => {
          setRentalData(data);
        });
      }
    };

    getData();
  }, [accessToken, user_id, productID, isLogin]);

  const showRent = () => {
    setIsRentSelected(true);
  };

  const showRegister = () => {
    setIsRentSelected(false);
  };

  function Rent() {
    return (
      <RentContainer>
        {historyData =='null' ?
          <GoodsRecord>
            <GoodsItems>
              {historyData.map((historyData) => (
                <GoodsCard key={historyData.id}>
                  <GoodsPic><GoodsImg src={historyData.product.thumbnails[0].thumbnail} alt='rentalItem' />
                    <GoodsDday>D-{historyData.remaining_days}</GoodsDday>
                  </GoodsPic>
                  <GoodsDescription>
                    <GoodsName>{historyData.product.name}</GoodsName>
                    <GoodsDate>{historyData.rental_start_date} ~ {historyData.rental_end_date}</GoodsDate>
                  </GoodsDescription>
                </GoodsCard>
              ))}
            </GoodsItems>
          </GoodsRecord>
          : <GoodsRecord><img src={empty} width='20%' /></GoodsRecord>}
      </RentContainer>
    );
  }

  function Register() {
    return (
      <RegisterContainer>
        <RegisterRecord>
          {registerData.map((registerData) => (
            <RegisterItem key={registerData.id} onClick={() => {switchCalendar(registerData.id); setActiveItem(registerData.id)}} isActive={activeItem===registerData.id}>
              <Itempic src={registerData.thumbnails && registerData.thumbnails[0] && registerData.thumbnails[0].thumbnail 
                ? registerData.thumbnails[0].thumbnail 
                : ''}></Itempic>
              <ItemDetails>
                <Itemname>{registerData.name}</Itemname>
                <Itemprice>일 {registerData.rental_fee_for_a_day}원  주 {registerData.rental_fee_for_a_week}원</Itemprice>
              </ItemDetails>
              <EditIcon onClick={(e) => {
                e.stopPropagation();
                handleEditClick(registerData.id);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17.2495V20.9995H6.75L17.81 9.93951L14.06 6.18951L3 17.2495ZM20.71 7.03951C20.8027 6.947 20.8762 6.83711 20.9264 6.71614C20.9766 6.59517 21.0024 6.46548 21.0024 6.33451C21.0024 6.20355 20.9766 6.07386 20.9264 5.95289C20.8762 5.83192 20.8027 5.72203 20.71 5.62951L18.37 3.28951C18.2775 3.19681 18.1676 3.12326 18.0466 3.07308C17.9257 3.0229 17.796 2.99707 17.665 2.99707C17.534 2.99707 17.4043 3.0229 17.2834 3.07308C17.1624 3.12326 17.0525 3.19681 16.96 3.28951L15.13 5.11951L18.88 8.86951L20.71 7.03951Z" fill="#A1A1AA" />
                </svg>
              </EditIcon>
              <div class="flex items-center justify-center w-[10%] opacity-50 cursor-pointer" onClick={() => handleDeleteClick(registerData.id)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="black"/>
                </svg>
              </div>
            </RegisterItem>
          ))}
        </RegisterRecord>
        <CalendarContainer>
          <ReactCalendar />
          <RentalList>
            {rentalData && rentalData.map((rentalData) => (
              <Rental key={rentalData.id}>
                <RentalPic src={profileImage} />
                <RentalName>{rentalData.renter.username}</RentalName>
                <RentalDate>{rentalData.rental_start_date} - {rentalData.rental_end_date}</RentalDate>
                <RentalState>
                  {rentalData.state === "SCHEDULED"
                    ? "일정 확정"
                    : rentalData.state === "RETURNED"
                      ? "반납완료"
                      : rentalData.state === "IN_USE"
                        ? "사용중"
                        : rentalData.state}
                </RentalState>
              </Rental>
            ))}
          </RentalList>
        </CalendarContainer>
      </RegisterContainer>
    );
  }
  if (!userData) {
    return <PlzLogin>로그인을 해주세요.</PlzLogin>;
  }

  return (
    <Wrapper>
      <Banner><Title>마이페이지</Title></Banner>
      {isLogin ? (
        <UpperContents>
          <Picture><img src={levelImage} width="100%" alt='levelPic'/></Picture>
          <ProfileSection>
            <Greeting>{userData.username}님, 반가워요!</Greeting>
            <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={userData.profile || 'default-profile.png'}
                  alt="Profile"
                  style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                />
                <span onClick={() => navigate('/profileSetting')}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width:'1rem',
                    height: '1rem',
                    backgroundColor: '#FCFF5D',
                    borderRadius: '50%',
                    fontSize:'10px',
                    textAlign:'center',
                    display: 'flex',
                    justifyContent:'center',
                    cursor: 'pointer',
                  }}
                >
                  ✎
                </span></div>
              </div>
              <div style={{ marginLeft: '10px', display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', width:'100%', marginTop:'1rem',}}>
                <div style={{borderRadius:'30%', textDecorationColor:'#eee', backgroundColor: '#eee', fontSize:'10px', width:'20%', height:'1rem',}}>{userData.level}</div>
                <div style={{fontSize:'12px',}}>{userData.username} 님</div>
              </div>
            <div style={{ marginTop: '20px', marginLeft:'20px', marginRight:'20px'}}>
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
          </ProfileSection>
        </UpperContents>
      ) : (
        <div>로그인하세요</div>
      )}
      <MainComponents>
        <Buttons>
          <Button onClick={showRent} isSelected={isRentSelected}>
            대여 기록
          </Button>
          <Button onClick={showRegister} isSelected={!isRentSelected}>
            등록 관리
          </Button>
        </Buttons>
        {isRentSelected ? <Rent /> : <Register />}
      </MainComponents>
    </Wrapper>
  );
};

export default MypageMain;


const MainComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  height: 6rem;
  width: 100vw;
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
  width: 100%;
`;

const GoodsRecord = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
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
  height: 10rem;
  width: 10rem;
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
const GoodsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; //비율 구기지 않고 그냥 프레임에 맞게 자르게!!
  border-radius: 7px;
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
  width: 100%;
  border-bottom: 1px solid #535353;
  padding-left: 15rem;
  padding-right: 15rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
  color: ${props => (props.isSelected ? '#000' : '#777')};
  border-bottom: ${props => (props.isSelected ? '2px solid #000' : 'none')};

  &:focus {
    outline: none;
  }
`;

const ProfileSection = styled.div`
  width: 40%;
  margin-left: 1rem;
  border: 1px solid #eee;
`;

const UpperContents = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
`;

const Greeting = styled.div`
  padding: 20px;
  max-width: 300px;
  background-color: #ffeb3b;
  padding: 10px;
  font-size: 12px;
  text-align: left;
  span {
    font-weight: bold;
  }
`;

const RegisterRecord = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  height: 80vh;
  border: 1px solid #d3d3d3;
`;


const RegisterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 14%;
  width: 100%;
  padding: 10px;
  svg {
    width: 100%;
  }

  &:hover {
    background-color: #eee;
  }

  border-bottom: 1px solid #eee;

  background-color: ${props => (props.isActive ? '#eee' : 'white')};

`;

const Itempic = styled.img`
  aspect-ratio: 1/1;
  cursor: pointer;
`;

const ItemDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Itemname = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 550;
  height: 40%;
`;

const Itemprice = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  height: 40%;
`;

const EditIcon = styled.div`
      display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  cursor: pointer;
`;

const RentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60%;
`;

const CalendarContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const RentalList = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid #d3d3d3;
  overflow-y: auto;
  margin-top: 20px;
`;

const Rental = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d3d3d3;
  padding-left: 20px;
  padding-right: 20px;
  padding: 10px;
`;

const RentalPic = styled.img`
  width: 7%;
  aspect-ratio: 1/1;
`;

const RentalName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 10%; */
  height: 100%;
  font-size: 14px;
  font-weight: 600;
`;

const RentalDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 20%; */
  height: 100%;
  font-size: 12px;
`;

const RentalState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 20%; */
  height: 100%;
  font-size: 12px;

`;

const PlzLogin = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  height: 50vh;
  color: #777;
`;