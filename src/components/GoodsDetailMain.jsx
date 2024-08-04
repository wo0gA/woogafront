import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import goodsimage from '../images/badminton.png'
import ReactCalendar from './special/ReactCalendar'
import RecommendGoods from './RecommendGoods'
import RentalFeeDisplay from './RentalFeeDisplay'
import { RentalFeeContext } from '../context/RentalFeeContext'
import { getReviewsOfProduct } from '../apis/review'
import { formatDate } from '../utils/formatDate'
import { getProductInfo, getRentalHistory } from '../apis/product'
import { getUserInfo } from '../apis/user'
import { useNavigate } from 'react-router-dom'
import { createChatRoom } from '../apis/websocket'

const GoodsDetailMain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]); // 리뷰 상태 추가
  const reviewsPerPage = 3; // 한 페이지에 표시할 리뷰 수
  const [level, setLevel] = useState('');
  const [username, setName] = useState('');
  const [mannerScore, setMannerScore] = useState(0);
  const [sellerEmail, setSellerEmail] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');


  // 물건 관련 상태(정보)들(화면에서 위에부터)
  const [firstCategory, setFirstCategory] = useState('');
  const [secondCategory, setSecondCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [productState, setProductState] = useState('');
  const [dayPrice, setDayPrice] = useState('');
  const [weekPrice, setWeekPrice] = useState('');
  const [modelName, setModelName] = useState('');
  const [transaction, setTransaction] = useState('');
  const [transactionPlace, setTransactionPlace] = useState('');

  const [viewCount, setViewCount] = useState(0);
  
  const [description, setDescription] = useState('');

  // 현재 페이지의 리뷰 데이터 가져오기
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  // 페이지 번호 클릭 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const productID = 2; // @@@@임시로 상수로 설정@@@@
  const imsiPrice = 1000;
  const { setDailyRate, highlightRanges, setHighlightRanges } = useContext(RentalFeeContext); //전역 상태 불러오기(RntalFeeContext)

  //navigate 하는 기본 함수
  const navigate = useNavigate();
  const handleNavClick = (path) => () => {
    navigate(path);
  };
    

  // 리뷰 데이터 가져오기
  const fetchReviews = async (productID) => {
    try {
        const reviewsData = await getReviewsOfProduct(productID);
        setReviews(reviewsData); // 상태 업데이트
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
  };

  // @@@@@@상품 정보 받아온 후 -> 변수들에 세팅하는 함수@@@@@@@
  const setProductInfo = (productID) => {
    getProductInfo(productID)
      .then((productInfo) => {
        // 상품 정보 세팅
        
        setSecondCategory(productInfo.category.sort);
        setProductName(productInfo.name);
        setOwnerName(productInfo.owner.username);
        // setUserLocation(productInfo.owner.location); // 임시로 주석 처리
        setProductState(productInfo.state);
        setDayPrice(productInfo.rental_fee_for_a_day);
        setWeekPrice(productInfo.rental_fee_for_a_week);
        setModelName(productInfo.model_name);
        setTransaction(productInfo.direct_dealing_is_allowed ? "가능" : "불가능");
        setTransactionPlace(productInfo.direct_dealing_place); //@@이거 나중에 시군구로 수정하기@@
        
        setViewCount(productInfo.views);

        setDescription(productInfo.description);
      })
      .catch((error) => {
        console.error('상품 정보 가져오기 실패:', error);
      });
  }

  //대여 버튼 눌러서, 채팅방 만들면서 & 페이지 여는 함수
  const handleRentBtnClick = (sellerEmail, buyerEmail) => {
    createChatRoom(sellerEmail, buyerEmail).then((response) => {
      console.log('채팅방 생성:', response);
      //채팅방 생성 후, 채팅방으로 이동
      navigate(`/chatting?chatRoomID=${response.id}`);
    }
    ).catch((error) => {
      console.error('채팅방 생성 실패:', error);
    });
  }


  useEffect(() => {
    //사용자 이메일 세팅
    setBuyerEmail(localStorage.getItem('email'));

    // 기준 요금 설정
    setDailyRate(imsiPrice);

    // 리뷰 데이터 가져오기
    fetchReviews(productID);

    // 상품 정보 불러오고 세팅
    setProductInfo(productID);

    // 상점 정보 불러오고 세팅
    getUserInfo().then((userInfo) => {
      setLevel(userInfo.level);
      setName(userInfo.username);
      setMannerScore(userInfo.manner_score);
      setSellerEmail(userInfo.email);
    }
    ).catch((error) => {
      console.error('사용자 정보 가져오기 실패:', error);
    });


  }, setDailyRate);

  return (
    <Wrapper>
      <CategoryNav>
        <First>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H5C3.9 6 3.01 6.9 3.01 8L3 20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM12 13C9.24 13 7 10.76 7 8H9C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8H17C17 10.76 14.76 13 12 13Z" fill="#52525B"/>
          </svg>
          <span>물품 대여</span>
        </First>
        <Second>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4.15332 13.4863L5.33332 14.6663L12 7.99967L5.33332 1.33301L4.15332 2.51301L9.63999 7.99967L4.15332 13.4863Z" fill="#52525B"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z" fill="#52525B"/>
          </svg>
          <span>{firstCategory}</span>
        </Second>
        <Third>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4.15332 13.4863L5.33332 14.6663L12 7.99967L5.33332 1.33301L4.15332 2.51301L9.63999 7.99967L4.15332 13.4863Z" fill="#52525B"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z" fill="#52525B"/>
          </svg>
          <span>{secondCategory}</span>
        </Third>
      </CategoryNav>
      <GoodsDetail>
        <GoodsImage>
        </GoodsImage>
        <GoodsInfo>
          <NotRentalBtnContainer>
          <GoodsTitle>
            <GoodsTitleCategory>
              {secondCategory}
            </GoodsTitleCategory>
            <GoodsTitleName>
              {productName}
            </GoodsTitleName>
            <GoodsTitleRegistrant>
              <ResistrantName>{ownerName} 님</ResistrantName>
              {/* <ResistrantLocation>{userLocation}</ResistrantLocation> 이거 안할듯!!!*/}
            </GoodsTitleRegistrant>
          </GoodsTitle>
          <GoodsDescription>
            <GoodsDescriptionLeft>
              <GoodsState>
                <Left>상품 상태</Left>
                <Right><GoodsStateBtn>{productState}</GoodsStateBtn></Right>
              </GoodsState>
              <GoodsCost>
                <Left>대여료</Left>
                <Right>
                  <GoodsCostBox>
                    <div id="day">일 <span>{dayPrice}원</span></div>
                    <div id="week">주 <span>{weekPrice}원</span></div>
                  </GoodsCostBox>
                </Right>
              </GoodsCost>
            </GoodsDescriptionLeft>
            <GoodsDescriptionRight>
              <GoodsModel>
                <Left>모델명</Left>
                <Right>{modelName}</Right>
              </GoodsModel>
              <GoodsDeliveryFee>
                <Left>배송비</Left>
                <Right>{transaction}</Right>
              </GoodsDeliveryFee>
              <GoodsTransactionPlace>
                <Left>직거래</Left>
                <Right>{transactionPlace}</Right>
              </GoodsTransactionPlace>
            </GoodsDescriptionRight>
          </GoodsDescription>
          </NotRentalBtnContainer>
          <RentalBtnContainer>
            <RantalBtnText>정확한 대여기간과 대여료는 등록자와의 채팅으로 확정해보세요.</RantalBtnText>
            <RentalBtnRow>            
              <RentalBtn onClick={() => handleRentBtnClick(sellerEmail, buyerEmail)}>대여 문의하기</RentalBtn>
              <ViewCount>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#A1A1AA"/>
              </svg>
              <span>{viewCount}</span>
              </ViewCount>
            </RentalBtnRow>
          </RentalBtnContainer>
        </GoodsInfo>
      </GoodsDetail>
      <Choice>
        <Calender>
          <div id="title">대여료 계산기</div>
          <span>예상되는 대여 가능 기간과 대여료를 먼저 계산해드립니다.</span>
          <ReactCalendar/>
        </Calender>
        <RentalFeeContainer>
          <RentalFeeDisplay />
        </RentalFeeContainer>
      </Choice>
      <Under>
        <DescriptionANDRecommend>
          <Description>
            <Title>상세 설명</Title>
            <Contents>{description}</Contents>
          </Description>      
            <RecommendGoods>
            </RecommendGoods>  
        </DescriptionANDRecommend>
        <ReviewANDStore>
          <Title>대여 리뷰</Title>
          <ReviewContainer>
          <GoodsReview>
            <Contents>
              <LittleTitle>
                <span>상품 후기</span>
                <br />
                상품에 대한 생생한 후기를 확인해보세요.
              </LittleTitle>
              <LittleContents>
                {currentReviews.map((review, index) => (
                  <OneReview key={index}>
                    <Reviwer>
                      <Writer>{review.writer.username}</Writer>
                      <Date>{formatDate(review.created_at)}</Date>
                    </Reviwer>
                    <ReviewContents>{review.comment}</ReviewContents>
                  </OneReview>
                ))}
              </LittleContents>
              <Pagination>
              {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, index) => (
                <PageNumber 
                  key={index + 1} 
                  onClick={() => paginate(index + 1)}
                  active={currentPage === index + 1}
                >
                  {index + 1}
                </PageNumber>
              ))}
              </Pagination>
            </Contents>
          </GoodsReview>            
          <OwnerStore>
              <Contents>
              <LittleTitle>
                  <span>등록자 상점</span>
                  <br/>
                  상품 등록자의 상점을 방문해보세요.
                </LittleTitle>
                <LittleContents>
                <ProfileImg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 140 140" fill="none">
                        <g filter="url(#filter0_d_1054_8014)">
                          <circle cx="70.5" cy="70" r="50" fill="#D9D9D9"/>
                          <circle cx="70.5" cy="57" r="16" fill="#A1A1AA"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M32.5005 97.8261C38.3783 86.8096 53.0873 79 70.3027 79C87.9183 79 102.91 87.1768 108.5 98.5994C99.7769 110.402 86.125 118 70.7806 118C55.1036 118 41.1933 110.069 32.5005 97.8261Z" fill="#A1A1AA"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_1054_8014" x="0.5" y="0" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset/>
                              <feGaussianBlur stdDeviation="10"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1054_8014"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1054_8014" result="shape"/>
                          </filter>
                        </defs>
                    </svg>
                  </ProfileImg>
                  <ProfileName>
                    <Level>{level}</Level>
                    <Name><span>{username}</span>님</Name>
                  </ProfileName>
                  <MannerScore>
                    <MannerText>
                        매너 바로미터 <span>{mannerScore}</span>
                    </MannerText>
                    <MannerBar>
                        <RealMannerBar/>
                    </MannerBar>
                  </MannerScore>
                </LittleContents>
              </Contents>
            </OwnerStore>
          </ReviewContainer>
        </ReviewANDStore>
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
  overflow: visible; /* 화면 크기를 자동으로 조정 */
  box-sizing: border-box;
`;

const GoodsDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;

  box-sizing: border-box;
`;
const GoodsImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  box-sizing: border-box;

  background-image: url('${goodsimage}');
  background-repeat: no-repeat; /* 배경 이미지 반복 안 함 */
  background-size: cover; /* 요소 전체를 덮도록 이미지 크기 조정 */
  background-position: center; /* 이미지가 가운데에 배치되도록 설정 */
`;
const GoodsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 50%;

  box-sizing: border-box;
`;
const GoodsTitle = styled.div`  
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  margin-bottom: 20px;

  border-bottom: 1.5px solid grey;
`;
const GoodsTitleCategory = styled.div`
  font-size: 12px;
`;
const GoodsTitleName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const GoodsTitleRegistrant = styled.div`
    font-size: 14px;
    margin-bottom: 7px;
`;
const ResistrantName = styled.span`
  font-weight: bold;
`;
const ResistrantLocation = styled.span`
  margin-left: 10px;
  font-size: 13px;
`;
const GoodsState = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
`;
const GoodsCost = styled.div`
  display: flex;
  width: 100%;
`;
const GoodsCostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px;
  
  //id가 day인 div와 week인 div에 각각 css 적용
  & > * {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  & > #day {
    width: 100%;
    & > span {
      font-weight: bold;
      font-size: 16px;
      margin-left: 5px;
    }
    margin-bottom: 5px;
  }
  & > #week {
    width: 100%;
    & > span {
      font-weight: bold;
      font-size: 16px;
      margin-left: 5px;
    }
  }
`;


const GoodsModel = styled.div`
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

const GoodsDescription = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 90%;
  justify-content: space-between;
`;


const Choice = styled.div`
  margin-top: 40px;
  display: flex;
  height: auto;
  width: 100%;
`;
const Calender = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  // height: auto;
  box-sizing: border-box;

  & > span {
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
    font-size: 13px;
  }
  & > #title {
    border: none;
    margin-bottom: none;
    width: 100%;
    text-align: left; 
    font-size: 16px;
    font-weight: bold;
    }
`;
const RentalFeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  box-sizing: border-box;
`;

const Under = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-top: 100px;
  margin-bottom: 40px;
`;
const GoodsDescriptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  & > * {
    margin-bottom: 20px;
  }
`;
const GoodsDescriptionRight = styled.div` 
  display: flex;
  flex-direction: column; 
  width: 45%;
  & > * {
    margin-bottom: 20px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;  
const OwnerStore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  height: auto; /* 높이를 자동으로 조정 */
`;  


const Left = styled.div`
  width: 40%;
  font-weight: bold;
  font-size: 13px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Right = styled.div`
  width: 60%;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const GoodsStateBtn = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border: 1.3px solid #b0b0b0;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fffccc;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
`;

const NotRentalBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const RentalBtnContainer = styled.div`
  width: 90%;
`;
const RantalBtnText = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  color: #b0b0b0;
  margin-bottom: 7px;
`;
const RentalBtnRow = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
const RentalBtn = styled.div` 
  display: flex;
  width: 78%;
  height: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #faff70;
  cursor: pointer;
  &:hover {
    background-color: #d7d7d7;
  }
  &:active {
    background-color: #b8b8b8;
  }
`; 

const ViewCount = styled.div`
  display: flex;
  width: 18%;
  height: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;  
  border: 1px solid #b0b0b0;

  & > span {
    margin-left: 5px;
    color: #A1A1AA;
    font-size: 12px;
  }
`;

const CategoryNav = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  width: 100%;
  font-size: 14px;
`;
const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  & > span {
    margin-left: 3px;
    margin-right: 10px;
  }
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  & > span {
    margin-left: 3px;
    margin-right: 10px;
  }
`;
const Third = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  & > span {
    margin-left: 3px;
    margin-right: 10px;
  }
`;




const DescriptionANDRecommend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 100%;
`;

const ReviewANDStore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid grey;
`;

const Contents = styled.div`
  width: 100%;
  min-height: 200px;
  font-size: 15px;
  text-align: left; 
  //줄간격  
  line-height: 2.5;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const GoodsReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const LittleTitle = styled.div`
  line-height: 1.5;
  font-size: 12px;
  & > span {
    font-weight: bold;
    font-size: 14px;
  }
`;
const LittleContents = styled.div`  
  line-height: 1.5;
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const OneReview = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 15px;
  margin-top: 15px;
  border: 1px solid #d5d5d5;
  padding: 5px;
`;
const Reviwer = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
const ReviewContents = styled.div`
  font-size: 12px;
`;


// 스타일 컴포넌트 추가
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PageNumber = styled.div`
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  //지금 선태된 페이지에는 밑줄을 그어줌
  text-decoration: ${props => props.active ? 'underline' : 'none'};
  &:hover {
    text-decoration: underline;
  }
`;

const Writer = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
const Date = styled.span`
  font-size: 12px;
  color: #A1A1AA;
`;



// @@@@
const ProfileImg = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   box-sizing: border-box;
`;

const ProfileName = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-evenly;
   width: 60%;
   height: 20%;
   box-sizing: border-box;
`;
const Level = styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    color: grey;
    border: 1px solid grey;
    padding: 2px 5px;
    font-size: 10px;
`;
const Name = styled.div`
   box-sizing: border-box;

   span {
      font-weight: bold;
      font-size: 15px;
      margin-right: 8px;
   }
`;

const MannerScore = styled.div`
   width: 70%;
   height: 30%;
   box-sizing: border-box;
`; 
const MannerText = styled.div`
   width: 100%;
   height: 50%;
   box-sizing: border-box;
   text-align: left;
   margin-top: 15px;

   span {   
      font-weight: bold;
   }
`;
const MannerBar = styled.div`
   width: 100%;
   height: 15px;
   box-sizing: border-box;
   border-radius: 50px;
   background-color: #D4D4D8;
`; 
const RealMannerBar = styled.div`
   width: 80%; //@@@@이거 나중에 변수로 바꿔주기@@@@@@
   height: 100%;
   background-color: #FCFF5D;
   border-radius: 50px;
`;
