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
import { getUserInfo } from '../apis/user'

const StoreMain = () => {
   const [level, setLevel] = useState('');
   const [username, setName] = useState('');
   const [mannerScore, setMannerScore] = useState(0); //초기 매너지수는 0

   useEffect(() => {
      //test
      getUserInfo().then((data) => {
         setLevel(data.level);
         setName(data.username);
         setMannerScore(data.manner_score);
      });
   }, []);

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
            등록
            <br/>
            <span>7</span>
         </Stat>
         <Stat>
            대여 중
            <br/>
            <span>3</span>
         </Stat>
         <Stat>
            거래 횟수
            <br/>
            <span>369</span>
         </Stat>
      </Up>
      <Down>
         <DownTitle>등록 물품</DownTitle>
         <PopularContents>
            <PopularItem>
               <PopularImage src={footsalImage}/>
               <PolularText>
                     <PopularName>풋살화 270사이즈</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={badmintonImage}/>
               <PolularText>
                     <PopularName>배드민턴 세트</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={volleyImage}/>
               <PolularText>
                     <PopularName>배구공 5개</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={bikeImage}/>
               <PolularText>
                     <PopularName>산악자전거 MX4000</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={helmetImage}/>
               <PolularText>
                     <PopularName>라이딩헬멧</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={rollerImage}/>
               <PolularText>
                     <PopularName>폼롤러</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={campingtableImage}/>
               <PolularText>
                     <PopularName>캠핑 테이블</PopularName>
                     <PopularPrice>
                        <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
            <PopularItem>
               <PopularImage src={pingpongImage}/>
               <PolularText>
                     <PopularName>탁구 세트</PopularName>
                     <PopularPrice>
                     <PopularPriceDay>
                           <Unit>일</Unit>
                           <Price>7,000원</Price>
                        </PopularPriceDay>
                        <PopularPriceWeek>
                           <Unit>주</Unit>
                           <Price>40,000원</Price>
                        </PopularPriceWeek>
                     </PopularPrice>
               </PolularText>
            </PopularItem>
         </PopularContents>

         <DownTitle>리뷰</DownTitle>
         <ReviewContainer>
            <Review>
               <ReviewImage src={bikeImage}/>
               <ReviewText>
                  <ReviewFirstRow>
                     배드민턴 라켓
                  </ReviewFirstRow>
                  <ReviewSecondRow>
                     수쨩 님 <span>2024.08.02 - 2024.08.02</span>
                  </ReviewSecondRow>
                  <ReviewThirdRow>
                     써보니 확실히 편해요.
                  </ReviewThirdRow>
               </ReviewText>
            </Review>
            <Review>
               <ReviewImage src={footsalImage}/>
               <ReviewText>
                  <ReviewFirstRow>
                     소니크 테니스 라켓
                  </ReviewFirstRow>
                  <ReviewSecondRow>
                     잉잉 님 <span>2024.08.02 - 2024.08.02</span>
                  </ReviewSecondRow>
                  <ReviewThirdRow>
                     이거 개좋아요~~~~~~~ 강추
                  </ReviewThirdRow>
               </ReviewText>
            </Review>
            <Review>
               <ReviewImage src={bikeImage}/>
               <ReviewText>
                  <ReviewFirstRow>
                     배드민턴 라켓
                  </ReviewFirstRow>
                  <ReviewSecondRow>
                     수쨩 님 <span>2024.08.02 - 2024.08.02</span>
                  </ReviewSecondRow>
                  <ReviewThirdRow>
                     써보니 확실히 편해요.
                  </ReviewThirdRow>
               </ReviewText>
            </Review>
            <Review>
               <ReviewImage src={footsalImage}/>
               <ReviewText>
                  <ReviewFirstRow>
                     소니크 테니스 라켓
                  </ReviewFirstRow>
                  <ReviewSecondRow>
                     잉잉 님 <span>2024.08.02 - 2024.08.02</span>
                  </ReviewSecondRow>
                  <ReviewThirdRow>
                     이거 개좋아요~~~~~~~ 강추
                  </ReviewThirdRow>
               </ReviewText>
            </Review>
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
    &:nth-child(4n + 1) {
        margin-left: 0;
    }
    &:nth-child(4n) {
        margin-right: 0;
    }
`;
const PopularImage = styled.img`
    width: 100%;
    
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
`;
const PopularPrice = styled.div`
    display: flex;
    flex-direction: row;    
    width: 100%;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
`;
const PopularPriceDay = styled.div`
    display: flex;
    flex-direction: row;
`;
const PopularPriceWeek = styled.div`  
    display: flex;
    flex-direction: row;
`;
const Unit = styled.div`
    margin-right: 5px;
`;
const Price = styled.div`
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
