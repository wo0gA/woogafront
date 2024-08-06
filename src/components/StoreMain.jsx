import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import footsalImage from '../images/footsal.png'
import badmintonImage from '../images/badminton.png'
import bikeImage from '../images/bike.png'
import campingtableImage from '../images/campingtable.png'
import helmetImage from '../images/helmet.png'
import pingpongImage from '../images/pingpong.png'
import rollerImage from '../images/roller.png'
import volleyImage from '../images/volley.png'
import { getOwnerProducts, getOwnerReviews, getUserInfo } from '../apis/user'
import { useParams } from 'react-router-dom'
import { getStoreInfo } from '../apis/store'

const StoreMain = () => {
   const [level, setLevel] = useState('');
   const [username, setName] = useState('');
   const [mannerScore, setMannerScore] = useState(0); //초기 매너지수는 0
   const {userID} = useParams();
   const [goodsCount, setGoodsCount] = useState(0);
   const [dealCount, setDealCount] = useState(0);
   const [products, setProducts] = useState([]); // 등록 물품 상태 추가
   const [reviews, setReviews] = useState([]); // 리뷰 상태 추가

   useEffect(() => {
      getUserInfo().then((data) => { //@@이게 아니라 상점 기능 api로 바꿔야함무!!! (이걸로하면 어떤 상점을 들어가든 본인 상점이 뜸;;)
         setLevel(data.level);
         setName(data.username);
         setMannerScore(data.manner_score);
      });

      getOwnerProducts(userID).then((data) => {
         setProducts(data); // 등록 물품 데이터 설정
         setGoodsCount(data.length); // 등록 물품 수 설정
      });

      getOwnerReviews(userID).then((data) => {
         setReviews(data); // 리뷰 데이터 설정
         setDealCount(data.length); // 리뷰 수 설정
      });

      getStoreInfo(userID);

   }, [userID]);

  return (
   <Wrapper>
      <Up>
         <Profile>
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
               {/* 매너지수가 0이면 바 대신에 텍스트 출력 */}
                  {mannerScore === 0 
                  ? '아직 거래가 없어요.' 
                  : <MannerBar>
                        <RealMannerBar mannerScore={mannerScore}/>
                     </MannerBar>}
            </MannerScore>
         </Profile>
         <Stat>
         등록 물품
            <br/>
            <span>{goodsCount}</span>
         </Stat>
         <Stat>
            물품 리뷰
            <br/>
            <span>{dealCount}</span>
         </Stat>
      </Up>
      <Down>
         <DownTitle>등록 물품</DownTitle>
         <PopularContents>
            {products.map((product) => (
               <PopularItem key={product.id}>
                  <PopularImage src={product.thumbnails[0].thumbnail} />
                  <PolularText>
                     <PopularName>{product.name}</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>{product.rental_fee_for_a_day}원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>{product.rental_fee_for_a_week}원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
                  </PolularText>
               </PopularItem>
            ))}
         </PopularContents>

         <DownTitle>물품 리뷰</DownTitle>
         <ReviewContainer>
            {reviews.map((review) => (
               <Review key={review.id}>
                  <ReviewImage src={review.product_image} />
                  <ReviewText>
                     <ReviewFirstRow>
                        {review.product_name}
                     </ReviewFirstRow>
                     <ReviewSecondRow>
                        {review.writer.username} 님 <span>{review.created_at.substring(0,10)}</span>
                     </ReviewSecondRow>
                     <ReviewThirdRow>
                        {review.comment}
                     </ReviewThirdRow>
                  </ReviewText>
               </Review>
            ))}
         </ReviewContainer>
      </Down>
   </Wrapper>
  )
}

export default StoreMain

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 80%;
   height: 100%;
   box-sizing: border-box;
   margin-top: 50px;
`;

const Up = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   justify-content: space-between;
   margin-bottom: 40px;
   `; 

const Down = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   `;

const Profile = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 25%;
   height: 100%;
   padding-top: 10px;
   padding-bottom: 35px;
   font-size: 12px;
   border-radius: 30px;
   border: 1px solid var(--zinc-200, #E4E4E7);
   background: var(--amber-50, #FFFBEB);
`;

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
   //매너지수에 따라 길이가 변하도록 설정
   width: ${(props) => props.mannerScore}%;   
   transition: width 0.3s ease-in-out; //매너지수 변화에 따라 부드럽게 변하도록 설정
   height: 100%;
   background-color: #FCFF5D;
   border-radius: 50px;
`;

const Stat = styled.div`
   background-color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   width: 13%;
   //Profile의 절반
   aspect-ratio: 1;
   box-sizing: border-box;
   border: 1px solid var(--zinc-200, #E4E4E7);
   border-radius: 20px;

   span {
      font-weight: bold;
      font-size: 25px;
   }
`;


// ㅇㅇㅇ
const DownTitle = styled.div`
   display: flex;
   flex-direction: row;
   padding-left: 30px;
   font-size: 18px;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
   border-bottom: 1px solid black;
   font-weight: bold;
   padding-bottom: 5px;
`;


// @@@/
const PopularContents = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
   margin-top: 15px;
   & > div:nth-child(-n+4) {
      margin-bottom: 40px; // 윗줄과 아랫줄 간격 설정
   }

   margin-bottom: 50px;
`;

const PopularItem = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: calc(25% - 15px); // 4개씩 배치되도록 설정, 여백을 고려하여 계산
    height: 20%;
    margin-bottom: 20px; // 아이템 사이의 세로 간격 설정
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    border: 1px solid #E4E4E7;
    cursor: pointer;
    &:nth-child(4n + 1) {
        margin-left: 0;
    }
    &:nth-child(4n) {
        margin-right: 0;
    }

    & > img {
        width: 100%;
        aspect-ratio: 1/1;
    }
`;
const PopularImage = styled.img`
    width: 100%;
    object-fit: cover; //비율 구기지 않고 그냥 프레임에 맞게 자르게!!

`;
const PolularText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start; // 왼쪽 정렬
`;
const PopularName = styled.div`
    margin-top: 10px;
    align-self: flex-start; // 왼쪽 정렬
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
`;
const PopularPrice = styled.div`
    display: flex;
    flex-direction: row;    
    width: 100%;
    align-items: center;
    font-weight: 600;
    justify-content: space-between;
`;
const PopularPriceDay = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 13px;
`;
const PopularPriceWeek = styled.div`  
    display: flex;
    flex-direction: row;
    font-size: 13px;
`;
const Unit = styled.div`
    margin-right: 5px;
    font-weight: 400;
    font-size: 10px;
`;
const Price = styled.div`
font-size: 10px;
`;

// @@@???
const ReviewContainer = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
   `;
const Review = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 48%;
      aspect-ratio: 4/1;
      border: 1px solid #d1d1d1;
      margin-bottom: 20px;      
   `;

const ReviewImage = styled.img`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 13%;
   aspect-ratio: 1;
   margin-left: 10px;
   margin-right: 10px;
   object-fit: cover; //비율 구기지 않고 그냥 프레임에 맞게 자르게!!
`; 

const ReviewText = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 100%;
   `;

const ReviewFirstRow = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
      font-weight: bold;

      margin-bottom: 10px;
   `;
const ReviewSecondRow = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
      font-size: 13px;

      span {
         margin-left: 10px;
         color: grey;
      }
   `;
const ReviewThirdRow = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
      font-size: 14px;
   `;
