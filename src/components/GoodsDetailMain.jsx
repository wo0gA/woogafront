import React, { useState } from 'react'
import styled from 'styled-components'
import goodsimage from '../images/badminton.png'
import ReactCalendar from './special/ReactCalendar'
import RecommendGoods from './RecommendGoods'

const GoodsDetailMain = () => {
  // 페이지 네이션 기능을 추가하기 위해 필요한 상태와 핸들러 함수
const [currentPage, setCurrentPage] = useState(1);
const reviewsPerPage = 3; // 한 페이지에 표시할 리뷰 수

// 샘플 리뷰 데이터
const reviews = [
  { reviewer: '리뷰어1', content: '리뷰 내용1' },
  { reviewer: '리뷰어2', content: '리뷰 내용2' },
  { reviewer: '리뷰어3', content: '리뷰 내용3' },
  { reviewer: '리뷰어4', content: '리뷰 내용4' },
  { reviewer: '리뷰어5', content: '리뷰 내용5' },
  // 더 많은 리뷰 추가 가능
];
// 현재 페이지의 리뷰 데이터 가져오기
const indexOfLastReview = currentPage * reviewsPerPage;
const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

// 페이지 번호 클릭 핸들러
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const imsiPrice = 1000;
  const dayPrice = imsiPrice.toLocaleString();
  const weekPrice = imsiPrice.toLocaleString();
  const viewCount = 100;
  const userLocation = "서울시 동작구 상도동";
  const transactionPlace = "중앙대학교 정문 앞";
  const modelName = "훼르자 브릴란떼";
  const transanction = "포함";
  const goodsName = "배드민턴 세트";
  const ownerName = "잉잉";
  const description = "아이 방과후 용으로 샀던 배드민턴 세트입니다. 훼르자 브륄란떼 제품이고, 용용감 무지 적어요. 반납 후에 관리도 꼼꼼히 해주고 있습니다. 새 셔틀콕도 같이 넣어드려요! 채팅으로 연락주세요.";

  const firstCategory = "구기 스포츠";
  const secondCategory = "테니스 및 라켓";

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
          <NotRentalBtn_Container>
          <GoodsTitle>
            <GoodsTitle_Category>
              {secondCategory}
            </GoodsTitle_Category>
            <GoodsTitle_Name>
              {goodsName}
            </GoodsTitle_Name>
            <GoodsTitle_Registrant>
              <ResistrantName>{ownerName} 님</ResistrantName>
              <ResistrantLocation>{userLocation}</ResistrantLocation>
            </GoodsTitle_Registrant>
          </GoodsTitle>
          <GoodsDescription>
            <GoodsDescription_Left>
              <Goods_State>
                <Left>상품 상태</Left>
                <Right><Goods_State_Btn>거의 새 것</Goods_State_Btn></Right>
              </Goods_State>
              <Goods_Cost>
                <Left>대여료</Left>
                <Right>
                  <Goods_Cost_Box>
                    <div id="day">일 <span>{dayPrice}원</span></div>
                    <div id="week">주 <span>{weekPrice}원</span></div>
                  </Goods_Cost_Box>
                </Right>
              </Goods_Cost>
            </GoodsDescription_Left>
            <GoodsDescription_Right>
              <Goods_Model>
                <Left>모델명</Left>
                <Right>{modelName}</Right>
              </Goods_Model>
              <Goods_DeliveryFee>
                <Left>배송비</Left>
                <Right>{transanction}</Right>
              </Goods_DeliveryFee>
              <Goods_TransactionPlace>
                <Left>직거래 장소</Left>
                <Right>{transactionPlace}</Right>
              </Goods_TransactionPlace>
            </GoodsDescription_Right>
          </GoodsDescription>
          </NotRentalBtn_Container>
          <RentalBtn_Container>
            <RantalBtnText>정확한 대여기간과 대여료는 등록자와의 채팅으로 확정해보세요.</RantalBtnText>
            <RentalBtn_Row>            
              <RentalBtn>대여 문의하기</RentalBtn>
              <ViewCount>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#A1A1AA"/>
              </svg>
              <span>{viewCount}</span>
              </ViewCount>
            </RentalBtn_Row>
          </RentalBtn_Container>
        </GoodsInfo>
      </GoodsDetail>
      <Choice>
        <Calender>
          <ReactCalendar/>
        </Calender>
        <Empty>
          empty
        </Empty>
      </Choice>
      <Under>
        <Description_AND_Recommend>
          <Description>
            <Title>상세 설명</Title>
            <Contents>{description}</Contents>
          </Description>      
            <RecommendGoods>

            </RecommendGoods>  
        </Description_AND_Recommend>
        <Review_AND_Store>
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
                    <Reviwer>{review.reviewer}</Reviwer>
                    <ReviewContents>{review.content}</ReviewContents>
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
          </GoodsReview>            <OwnerStore>
              <Contents>
              <LittleTitle>
                  <span>등록자 상점</span>
                  <br/>
                  상품 등록자의 상점을 방문해보세요.
                </LittleTitle>
                <LittleContents>

                </LittleContents>
              </Contents>
            </OwnerStore>
          </ReviewContainer>
        </Review_AND_Store>
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
const GoodsTitle_Category = styled.div`
  font-size: 12px;
`;
const GoodsTitle_Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const GoodsTitle_Registrant = styled.div`
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
const Goods_State = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
`;
const Goods_Cost = styled.div`
  display: flex;
  width: 100%;
`;
const Goods_Cost_Box = styled.div`
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


const Goods_Model = styled.div`
    display: flex;
    text-align: left;
    width: 90%;
`;
const Goods_DeliveryFee = styled.div`
  display: flex;
  text-align: left;
  width: 90%;
`;
const Goods_TransactionPlace = styled.div`
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
  display: flex;
  height: 350px;
  width: 100%;
`;
const Calender = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
`;
const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 20px;
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
const GoodsDescription_Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  & > * {
    margin-bottom: 20px;
  }
`;
const GoodsDescription_Right = styled.div` 
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

const Goods_State_Btn = styled.div`
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

const NotRentalBtn_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const RentalBtn_Container = styled.div`
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
const RentalBtn_Row = styled.div`
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




const Description_AND_Recommend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 100%;
`;

const Review_AND_Store = styled.div`
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