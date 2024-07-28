import React from 'react'
import styled from 'styled-components'
import SportItem from '../images/main_card_image.png'
import Categories from './Categories'

const RentalSearch = ({ selectedSubSubCategory }) => {
  return (
    <Wrapper>
        <Mainbar>
            <Navigation>
                <Nav>물품 대여</Nav>
                <Nav>물품 등록</Nav>
                <Nav>건강 AtoZ</Nav>
                <Nav>어디GO</Nav>
                <Nav>채팅</Nav>
            </Navigation>
            <Search>
                <div>
                   찾고 있는 운동 용품 또는 운동 종목이 있나요? 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black"/>
                </svg>
            </Search>
        </Mainbar>
        <Bannerbar>
            <BarText>물품 대여</BarText>
            <Categories />
        </Bannerbar>
        <Contents>
            <Category>
                <CatTitle>카테고리</CatTitle>
                <CategoryContents>
                    <Sports>
                        <SportsDescription>유산소 운동 장비</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>근력 트레이닝 장비</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>유연성 운동</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>구기 스포츠</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>전문 스포츠</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>전자 및 기술기반 운동 장비</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>아웃도어 어드벤처</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>회복 및 재활 장비</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>가족 및 아동용 장비</SportsDescription>
                    </Sports>
                    <Sports>
                        <SportsDescription>건강, 웰빙</SportsDescription>
                    </Sports>
                </CategoryContents>
            </Category>
            <Contentarr>
                <SearchResult>
                <Title>
                {selectedSubSubCategory && (
        <div>
          <h3>선택된 소분류:</h3>
          <p>{selectedSubSubCategory.label}</p>
        </div>
      )}</Title>
                <SearchNavigation>
                    <Nav>관련도순</Nav>
                    <Nav>판매순</Nav>
                    <Nav>낮은 가격순</Nav>
                    <Nav>매너지수 높은순</Nav>
                    <Nav>장기대여 가능순</Nav>
                    <Nav>최근 등록순</Nav>
                </SearchNavigation>
                <SearchResultBox>
                    <SearchResultCards>
                        <ResultImage src={SportItem}  alt='운동 용품 이미지' />
                        <ResultDesciption>
                            <ResultName>배드민턴 세트</ResultName>
                            <ResultPrice>일 1,000원<br/>주 4,000원</ResultPrice>
                            <Wishlist>♡ 000</Wishlist>
                        </ResultDesciption>
                    </SearchResultCards>
                    <SearchResultCards>
                        <ResultImage src={SportItem}  alt='운동 용품 이미지' />
                        <ResultDesciption>
                            <ResultName>배드민턴 세트</ResultName>
                            <ResultPrice>일 1,000원<br/>주 4,000원</ResultPrice>
                            <Wishlist>♡ 000</Wishlist>
                        </ResultDesciption>
                    </SearchResultCards>
                    <SearchResultCards>
                        <ResultImage src={SportItem}  alt='운동 용품 이미지' />
                        <ResultDesciption>
                            <ResultName>배드민턴 세트</ResultName>
                            <ResultPrice>일 1,000원<br/>주 4,000원</ResultPrice>
                            <Wishlist>♡ 000</Wishlist>
                        </ResultDesciption>
                    </SearchResultCards>
                </SearchResultBox>
                </SearchResult>
                <Popular>
                <Title>오늘의 인기 운동</Title>
                <Magazines>
                    <MagazinesItem>집에서도<br/>건강하게<br/>홈트레이닝</MagazinesItem>
                    <MagazinesItem>풋살 & 축구,<br/>그 차이점을<br/>알아보다</MagazinesItem>
                    <MagazinesItem>뜨거운 여름<br/>레저스포츠가<br/>제격</MagazinesItem>
                </Magazines>
                <MorePop button onClick={morePop}>더보기</MorePop>
                </Popular>
            </Contentarr>
        </Contents>
    </Wrapper>
  )
}

export default RentalSearch

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    /* border: 1px solid black; */

    & > * {
        margin-top: 25px; /* 모든 자식 요소에 left-margin 적용 */
    }
`;

const Mainbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    height: 50px;

    /* border: 1px solid black; */
`;
const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    height: 100%;
    font-size: 20px;

    border-bottom: 1px solid black;
    /* border: 1px solid black; */
`;
const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;

    border: 1px solid black;
    border-radius: 40px;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 85%;
    height: 100%;
`;

const Category = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 20%;
    height: auto;
    background-color: #bebebe;
    padding: 18px;
    z-index: 1000;
    top: 150px;
    /* border: 1px solid black; */
`;
const CategoryContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
`;
const Sports = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const SportsDescription = styled.div`
    margin-top: 10px;
    font-size: 10px;
`;

const Popular = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    /* border: 1px solid black; */
`;

// --
const Title = styled.div`
    text-align: left;
    width: 100%;
    font-size: 24px;
    font-weight: 550;
    margin-bottom: 10px;
`;

const CatTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 15px;
    font-weight: 550;
    margin-bottom: 10px;
`;

const Contentarr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    padding-left: 20px;
`;

const Bannerbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 218px;
    background-color: aliceblue;
`;

const BarText = styled.div`
    text-align: left;
    width: 100%;
    font-size: 30px;
    font-weight: 550;
    margin-bottom: 10px;
    margin-left: 150px;
`;

const SearchNavigation = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: 100%;
    font-size: 14px;
`;

const SearchResult = styled.div`
    width: 100%;
    padding-bottom: 100px;
`;

const SearchResultBox = styled.div`
    display: flex;
    overflow: hidden;
    border-top: 1px solid black;
    margin-top: 5px;
    `;

const SearchResultCards = styled.div`
    margin-top: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 200px;
    width: 200px;
    background-color: #bfbfbf;

    margin-inline: 5px;
`;

const ResultImage = styled.img`
    flex: 3;
    width: 100%;
    height: auto;
`;

const ResultDesciption = styled.div`
    flex: 1;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: beige;
`;

const ResultName = styled.div`
    top: 10px;
    left: 10px;
    font-weight: bold;
`;

const ResultPrice = styled.div`
    top: 10px;
    right: 10px;
    display: flex;
    align-items: flex-start; /* 상단 정렬 */
    justify-content: flex-start; /* 왼쪽 정렬 */
    position: absolute;
    font-size: 15px;
    text-align: right;

`;

const Wishlist = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
`;

const Magazines = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
`;

const MagazinesItem = styled.div`
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 200px;
    width: 200px;
    background-color: beige;
    font-size: 27px;
    font-weight: 400;
    margin-inline: 5px; 
    padding-bottom: 20px;
`;

const MorePop = styled.div`
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    background-color: #8ec18b; 
    color: black; 
    border: none; 
    border-radius: 30px; 
    padding: 10px 30px; 
    font-size: 16px; 
    font-weight: bold; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
    margin-bottom: 25px;

    &:hover {
        background-color: #8bb06f;
    }
    
    &:focus {
        outline: none; 
    }

`;

const morePop = styled.div`
    
`;
