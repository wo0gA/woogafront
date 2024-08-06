import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { searchProducts, searchByCategory } from '../test/test'
import { useLocation, useNavigate } from 'react-router-dom';
import { getPopularProducts, getPopularFiveCategories } from '../apis/product'
import SimpleSlider from './special/banner'
import bannerImage from '../images/banner.png'
import textlogo from '../images/text logo.png'
import empty from '../images/Frame 114.png'
import healthtip from '../images/healthtip.png'
import footsalImage from '../images/footsal.png'
import badmintonImage from '../images/badminton.png'
import bikeImage from '../images/bike.png'
import campingtableImage from '../images/campingtable.png'
import helmetImage from '../images/helmet.png'
import pingpongImage from '../images/pingpong.png'
import rollerImage from '../images/roller.png'
import volleyImage from '../images/volley.png'

const Main = () => {
    const navigate = useNavigate();
    const healthInfos = [healthInfo1, healthInfo2, healthInfo3, healthInfo4, healthInfo5];
    //랜덤으로 healthInfo 이미지를 뽑기 위한 함수
    const getRandomHealthInfo = () => {
        const random = Math.floor(Math.random() * healthInfos.length);
        console.log("random", random);
        return healthInfos[random];
    }

    const [searchValue, setSearchValue] = useState('');
    const [popularItems, setPopularItems] = useState([]); // 인기 아이템 상태 추가
    const [popularCategories, setPopularCategories] = useState(["", "", "", "", ""]); // 인기 카테고리 5개
    const [healthInfo, setHealthInfo] = useState(getRandomHealthInfo());

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearchClick = () => {
        console.log(`Search value: ${searchValue}`);
        const params = new URLSearchParams({ keyword: searchValue });
		navigate(`/rentalCategory?${params.toString()}`);
		//searchProducts(searchValue);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };
    const handleCategoryClick = (categoryID) => () => {
        console.log(`Search Category ID: ${categoryID}`);
        // searchByCategory(categoryID);
        window.location.href = `/rentalCategory/?category=${categoryID}`;
    }

    const location = useLocation();
    const updateCategoryParam = (categoryName) => {
		const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("keyword")) {
      searchParams.delete("keyword");
    }
		searchParams.set("category", categoryName);
		navigate(`/rentalCategory?${searchParams.toString()}`);
	};

    //nav
    const handleNavClick = (path) => () => {
        navigate(path);
    };

    useEffect(() => {
        // Fetch popular products and categories
        getPopularProducts().then((items) => {
            setPopularItems(items); // API 응답 데이터를 상태에 저장
        });

        getPopularFiveCategories().then((data) => {
            let popularCategories = [];
            //응답을 순회하면서 인기 순위 카테고리 이름 세팅
            data.forEach((category, index) => {
                console.log(`${index + 1}: ${category.sort}`);
                popularCategories.push(category.sort);
            });
            setPopularCategories(popularCategories);
        });

        //popularCategories 잘 설정 됐는지 확인
        console.log("popular", popularCategories);
    }, []);

    const handleItemClick = (productID) => {
        window.location.href = `/goodsDetail/${productID}`;
    };

    return (
        <Wrapper>
            <SimpleSlider />
            {/* <Banner>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 60" fill="none">
                    <path d="M29.6167 9.425L26.6667 5L10 30L26.6667 55L29.6167 50.575L15.9 30L29.6167 9.425Z" fill="black" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 60" fill="none">
                    <path d="M10.3828 50.575L13.3328 55L29.9995 30L13.3328 5L10.3828 9.425L24.0995 30L10.3828 50.575Z" fill="black" />
                </svg>
            </Banner> */}
            <MainSearch>
                <MainSearchIcon>
                    <svg onClick={handleSearchClick} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M25.8333 23.3333H24.5167L24.05 22.8833C25.7398 20.9234 26.6685 18.4212 26.6667 15.8333C26.6667 13.6907 26.0313 11.5962 24.8409 9.81466C23.6505 8.03313 21.9586 6.64459 19.9791 5.82464C17.9995 5.00469 15.8213 4.79016 13.7199 5.20816C11.6184 5.62617 9.68808 6.65795 8.17301 8.17301C6.65795 9.68808 5.62617 11.6184 5.20816 13.7199C4.79016 15.8213 5.00469 17.9995 5.82464 19.9791C6.64459 21.9586 8.03313 23.6505 9.81466 24.8409C11.5962 26.0313 13.6907 26.6667 15.8333 26.6667C18.5167 26.6667 20.9833 25.6833 22.8833 24.05L23.3333 24.5167V25.8333L31.6667 34.15L34.15 31.6667L25.8333 23.3333ZM15.8333 23.3333C11.6833 23.3333 8.33334 19.9833 8.33334 15.8333C8.33334 11.6833 11.6833 8.33334 15.8333 8.33334C19.9833 8.33334 23.3333 11.6833 23.3333 15.8333C23.3333 19.9833 19.9833 23.3333 15.8333 23.3333Z" fill="black" />
                    </svg>
                </MainSearchIcon>
                <MainSearchInput type="text" placeholder="더운 여름! 레저 스포츠 도전하기" value={searchValue} onChange={handleSearchChange} onKeyPress={handleKeyPress} ></MainSearchInput>
            </MainSearch>
            <Contents>
                <Category>
                    <CategoryTitle>카테고리 분류</CategoryTitle>
                    <CategoryContents>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("생활체육")}  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50" fill="none">
                                    <path d="M32.2917 11.4583C34.5833 11.4583 36.4583 9.58333 36.4583 7.29167C36.4583 5 34.5833 3.125 32.2917 3.125C30 3.125 28.125 5 28.125 7.29167C28.125 9.58333 30 11.4583 32.2917 11.4583ZM10.4167 25C4.58333 25 0 29.5833 0 35.4167C0 41.25 4.58333 45.8333 10.4167 45.8333C16.25 45.8333 20.8333 41.25 20.8333 35.4167C20.8333 29.5833 16.25 25 10.4167 25ZM10.4167 42.7083C6.45833 42.7083 3.125 39.375 3.125 35.4167C3.125 31.4583 6.45833 28.125 10.4167 28.125C14.375 28.125 17.7083 31.4583 17.7083 35.4167C17.7083 39.375 14.375 42.7083 10.4167 42.7083ZM22.5 21.875L27.5 16.875L29.1667 18.5417C31.875 21.25 35.4167 22.9167 39.7917 22.9167V18.75C36.6667 18.75 34.1667 17.5 32.2917 15.625L28.3333 11.6667C27.2917 10.8333 26.25 10.4167 25 10.4167C23.75 10.4167 22.7083 10.8333 22.0833 11.6667L16.25 17.5C15.4167 18.3333 15 19.375 15 20.4167C15 21.6667 15.4167 22.7083 16.25 23.3333L22.9167 29.1667V39.5833H27.0833V26.6667L22.5 21.875ZM39.5833 25C33.75 25 29.1667 29.5833 29.1667 35.4167C29.1667 41.25 33.75 45.8333 39.5833 45.8333C45.4167 45.8333 50 41.25 50 35.4167C50 29.5833 45.4167 25 39.5833 25ZM39.5833 42.7083C35.625 42.7083 32.2917 39.375 32.2917 35.4167C32.2917 31.4583 35.625 28.125 39.5833 28.125C43.5417 28.125 46.875 31.4583 46.875 35.4167C46.875 39.375 43.5417 42.7083 39.5833 42.7083Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>생활체육</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("피트니스")} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 51 50" fill="none">
                                    <path d="M43.1387 30.9584L46.1178 27.9792L43.1387 25.0001L35.7012 32.4376L17.847 14.5834L25.2845 7.14591L22.3053 4.16675L19.3262 7.14591L16.347 4.16675L11.8887 8.62508L8.9095 5.64591L5.93034 8.62508L8.9095 11.6042L4.45117 16.0626L7.43034 19.0417L4.45117 22.0209L7.43034 25.0001L14.8678 17.5626L32.722 35.4167L25.2845 42.8542L28.2637 45.8334L31.2428 42.8542L34.222 45.8334L38.6803 41.3751L41.6595 44.3542L44.6387 41.3751L41.6595 38.3959L46.1178 33.9376L43.1387 30.9584Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>피트니스</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("구기 스포츠")} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 51 50" fill="none">
                                    <path d="M41.2396 5.18739C36.3646 0.312392 27.4479 1.29156 21.3438 7.39572C18.0104 10.7291 16.0937 15.4582 16.0521 18.7707C16.0104 22.0624 16.5937 26.8749 13.2396 30.2291L4.40625 39.0624L7.36458 42.0207L16.1979 33.1874C19.5521 29.8332 24.3646 30.4166 27.6562 30.3749C30.9479 30.3332 35.6979 28.4166 39.0312 25.0832C45.1146 18.9791 46.1146 10.0624 41.2396 5.18739ZM22.0729 24.3332C18.8854 21.1457 19.8854 14.7291 24.2812 10.3332C28.6771 5.93739 35.0729 4.93739 38.2812 8.12489C41.4688 11.3124 40.4688 17.7291 36.0729 22.1249C31.6771 26.5207 25.2812 27.5207 22.0729 24.3332ZM38.0729 35.4166C39.1771 35.4166 40.2396 35.8541 41.0104 36.6457C42.6354 38.2707 42.6354 40.9166 41.0104 42.5416C40.2396 43.3124 39.1771 43.7499 38.0729 43.7499C36.9688 43.7499 35.9062 43.3124 35.1354 42.5207C33.5104 40.8957 33.5104 38.2499 35.1354 36.6249C35.9062 35.8541 36.9688 35.4166 38.0729 35.4166ZM38.0729 31.2499C36.4229 31.2466 34.8091 31.7334 33.4362 32.6487C32.0632 33.564 30.9931 34.8664 30.3615 36.3907C29.7299 37.9151 29.5652 39.5927 29.8885 41.2107C30.2117 42.8288 31.0083 44.3144 32.1771 45.4791C33.8021 47.1041 35.9479 47.9166 38.0729 47.9166C39.7229 47.9199 41.3368 47.433 42.7097 46.5177C44.0826 45.6025 45.1527 44.3001 45.7843 42.7757C46.416 41.2514 46.5806 39.5738 46.2573 37.9557C45.9341 36.3377 45.1376 34.8521 43.9687 33.6874C43.1944 32.9136 42.2751 32.3 41.2635 31.8818C40.2518 31.4635 39.1676 31.2488 38.0729 31.2499Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>구기 스포츠</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("전문 스포츠")} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 51 50" fill="none">
                                    <path d="M17.5234 17.7083C17.5234 17.125 17.9818 16.6667 18.5651 16.6667H23.8151L23.7734 14.5833H18.5651C17.9818 14.5833 17.5234 14.125 17.5234 13.5417C17.5234 12.9583 17.9818 12.5 18.5651 12.5H23.7734V6.25H7.10677V37.5H13.3568V41.6667H5.02344V45.8333H38.3568C44.1068 45.8333 48.7734 41.1667 48.7734 35.4167H44.6068C44.6068 38.875 41.8151 41.6667 38.3568 41.6667H34.1901V37.5H40.4401V31.5C40.4401 27.125 37.2109 24.1458 34.1276 23.4167L28.5026 22.0208C26.6901 21.5625 25.2318 20.3333 24.4401 18.75H18.5651C17.9818 18.75 17.5234 18.2917 17.5234 17.7083ZM30.0234 41.6667H17.5234V37.5H30.0234V41.6667Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>전문 스포츠</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("아웃도어")} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 51 50" fill="none">
                                    <path d="M39.7253 19.375V8.33333H33.4753V13.75L25.1419 6.25L4.30859 25H10.5586V41.6667H20.9753V29.1667H29.3086V41.6667H39.7253V25H45.9753L39.7253 19.375ZM20.9753 20.8333C20.9753 18.5417 22.8503 16.6667 25.1419 16.6667C27.4336 16.6667 29.3086 18.5417 29.3086 20.8333H20.9753Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>아웃도어</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("아동용품")} xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                                    <path d="M22.1574 39.0626C22.9283 38.1042 24.1158 37.5001 25.4283 37.5001C26.7408 37.5001 27.9074 38.1042 28.6783 39.0626C29.4908 38.8751 30.2616 38.6251 31.0116 38.3126L28.0533 31.6876C26.3332 32.3432 24.4296 32.3283 22.7199 31.6459L19.7408 38.2917C20.5324 38.6251 21.3241 38.8959 22.1574 39.0626ZM11.1574 20.8334C10.4083 23.5692 10.4662 26.4631 11.3241 29.1667C12.6366 29.2709 13.8658 30.0001 14.5741 31.2292C15.2616 32.4167 15.3033 33.7917 14.8033 34.9584C15.3658 35.5209 15.9699 36.0626 16.6158 36.5417L19.7824 29.4792C18.8033 28.2709 18.2199 26.7292 18.2199 25.0417C18.2199 21.1042 21.4491 17.9376 25.4283 17.9376C29.4074 17.9376 32.6366 21.1251 32.6366 25.0417C32.6366 26.7501 32.0324 28.3126 31.0116 29.5417L34.1366 36.5209C34.8033 36.0209 35.4283 35.4792 36.0116 34.8751C35.5533 33.7292 35.5949 32.3751 36.2616 31.2292C36.9491 30.0417 38.1366 29.3126 39.4283 29.1667C40.3055 26.453 40.3706 23.542 39.6158 20.7917C38.2824 20.7084 36.9908 19.9792 36.2824 18.7084C35.5324 17.4167 35.5533 15.8751 36.2199 14.6459C34.3241 12.6042 31.8449 11.0834 29.0533 10.3751C28.3241 11.6667 26.9699 12.5001 25.4283 12.5001C23.8866 12.5001 22.5324 11.6459 21.8033 10.3959C19.0568 11.0856 16.5681 12.5542 14.6366 14.6251C15.3241 15.8751 15.3658 17.4376 14.5949 18.7501C13.8658 20.0417 12.5324 20.7709 11.1574 20.8334ZM8.4491 19.9584C6.8241 18.7084 6.3241 16.4167 7.3866 14.5834C8.4491 12.7501 10.6783 12.0209 12.5741 12.8126C14.9305 10.3281 17.9546 8.57738 21.2824 7.77091C21.5741 5.72925 23.3241 4.16675 25.4283 4.16675C27.5324 4.16675 29.2824 5.72925 29.5533 7.77091C32.9491 8.58341 35.9491 10.3542 38.2616 12.8126C39.1937 12.4259 40.2348 12.3924 41.1898 12.7184C42.1448 13.0444 42.9481 13.7075 43.4491 14.5834C44.5116 16.4167 44.0116 18.7084 42.3866 19.9584C42.8658 21.5626 43.1158 23.2501 43.1158 25.0001C43.1158 26.7501 42.8658 28.4376 42.3866 30.0417C44.0116 31.2917 44.5116 33.5834 43.4491 35.4167C42.3866 37.2501 40.1574 37.9792 38.2616 37.1876C37.4283 38.0834 36.4908 38.8751 35.4699 39.5834L38.2616 45.8334H34.3866L32.3658 41.3126C31.4699 41.6876 30.5324 42.0001 29.5741 42.2292C29.2824 44.2709 27.5324 45.8334 25.4283 45.8334C23.3241 45.8334 21.5741 44.2709 21.3033 42.2292C20.3033 41.9792 19.3449 41.6667 18.4283 41.2709L16.3866 45.8334H12.4699L15.3033 39.5209C14.326 38.8341 13.4188 38.0525 12.5949 37.1876C10.6783 37.9792 8.4491 37.2501 7.3866 35.4167C6.3241 33.5834 6.8241 31.2917 8.4491 30.0417C7.96994 28.4376 7.71994 26.7501 7.71994 25.0001C7.71994 23.2501 7.96994 21.5626 8.4491 19.9584Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>아동용품</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("건강 및 웰빙")} xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                                    <path d="M25.7155 4.16675C14.6113 13.6459 9.04883 21.8334 9.04883 28.7501C9.04883 39.1251 16.9655 45.8334 25.7155 45.8334C34.4655 45.8334 42.3822 39.1251 42.3822 28.7501C42.3822 21.8334 36.8197 13.6459 25.7155 4.16675ZM31.9655 37.5001H19.4655V33.3334H31.9655V37.5001ZM31.9655 27.0834H27.7988V31.2501H23.6322V27.0834H19.4655V22.9167H23.6322V18.7501H27.7988V22.9167H31.9655V27.0834Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>건강 및 웰빙</SportsDescription>
                        </Sports>
                        <Sports>
                            <Eclipse>
                                <svg onClick={() => updateCategoryParam("기타")} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M12.5007 20.8333C10.209 20.8333 8.33398 22.7083 8.33398 24.9999C8.33398 27.2916 10.209 29.1666 12.5007 29.1666C14.7923 29.1666 16.6673 27.2916 16.6673 24.9999C16.6673 22.7083 14.7923 20.8333 12.5007 20.8333ZM37.5007 20.8333C35.209 20.8333 33.334 22.7083 33.334 24.9999C33.334 27.2916 35.209 29.1666 37.5007 29.1666C39.7923 29.1666 41.6673 27.2916 41.6673 24.9999C41.6673 22.7083 39.7923 20.8333 37.5007 20.8333ZM25.0007 20.8333C22.709 20.8333 20.834 22.7083 20.834 24.9999C20.834 27.2916 22.709 29.1666 25.0007 29.1666C27.2923 29.1666 29.1673 27.2916 29.1673 24.9999C29.1673 22.7083 27.2923 20.8333 25.0007 20.8333Z" fill="black" />
                                </svg>
                            </Eclipse>
                            <SportsDescription>기타</SportsDescription>
                        </Sports>
                    </CategoryContents>
                </Category>
                <Popular>
                    <Title>인기 운동용품</Title>
                    <Description>최근 사용자들이 많이 찾는 용품이에요!</Description>
                    <PopularContents>
                        {popularItems.map((item) => (
                            <PopularItem key={item.id} onClick={() => handleItemClick(item.id)}>
                                  {item.thumbnails[0] ?
                                <PopularImage src={item.thumbnails[0].thumbnail} /> : <PopularImage src={empty}/>} {/* @@@이미지 경로 */}
                                <PolularText>
                                    <PopularName>{item.name}</PopularName>
                                    <PopularPrice>
                                        <PopularPriceDay>
                                            <Unit>일</Unit>
                                            <Price>{item.rental_fee_for_a_day}원</Price>
                                        </PopularPriceDay>
                                        <PopularPriceWeek>
                                            <Unit>주</Unit>
                                            <Price>{item.rental_fee_for_a_week}원</Price>
                                        </PopularPriceWeek>
                                    </PopularPrice>
                                </PolularText>
                            </PopularItem>
                        ))}
                    </PopularContents>
                </Popular>
                <RankingAndNearby>
                    <Ranking>
                        <Title>인기 카테고리 랭킹</Title>
                        <Description>사람들의 관심 운동이 궁금하지 않으신가요?</Description>
                        <Rankings>
                            <RankingItem id='1'>
                                <RankingNumber>1
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="70" viewBox="0 0 49 70" fill="none">
                                        <path d="M28.6909 69.6255L35.1925 59.3276C35.3758 59.0374 35.7232 58.8956 36.0572 58.9748L47.9071 61.7852C48.5427 61.9359 49.0831 61.3051 48.8363 60.7001L38.7775 36.0459L17.209 44.8458L27.2678 69.5C27.5149 70.1053 28.3421 70.1782 28.6909 69.6255Z" fill="#F41943" />
                                        <path d="M32.2903 47.7168L25.2585 64.5755L18.3809 47.7168H32.2903Z" fill="#BA0F38" />
                                        <path d="M31.6872 44.8453L30.5158 47.7166L26.1846 58.3321L26.0056 58.7696L24.4482 62.5887L21.6281 69.4995C21.3813 70.1042 20.5544 70.1772 20.2047 69.6253L13.7037 59.328C13.5215 59.0381 13.1736 58.8957 12.8387 58.9752L0.988853 61.7853C0.354385 61.9359 -0.185727 61.3046 0.061026 60.6999L10.1199 36.0454L31.6872 44.8453Z" fill="#F41943" />
                                        <path d="M41.7276 43.2745C40.7867 44.1128 34.1326 49.8507 24.4498 49.8507C22.6273 49.8507 20.8045 49.6615 19.0218 49.2823C14.6368 48.3505 10.5181 46.2555 7.17188 43.2745L10.1212 36.0454L13.498 37.4239L13.8045 37.5497L24.45 41.8906L35.0956 37.5497L35.4021 37.4239L38.7789 36.0454L41.7276 43.2745Z" fill="#BA0F38" />
                                        <path d="M24.4486 47.7175C37.6254 47.7175 48.3073 37.0356 48.3073 23.8587C48.3073 10.6819 37.6254 0 24.4486 0C11.2718 0 0.589844 10.6819 0.589844 23.8587C0.589844 37.0356 11.2718 47.7175 24.4486 47.7175Z" fill="#F9B906" />
                                        <path d="M24.4481 45.5959C36.4532 45.5959 46.1853 35.8639 46.1853 23.8588C46.1853 11.8536 36.4532 2.12158 24.4481 2.12158C12.443 2.12158 2.71094 11.8536 2.71094 23.8588C2.71094 35.8639 12.443 45.5959 24.4481 45.5959Z" fill="#E8A615" />
                                        <path d="M24.4478 44.2657C35.7181 44.2657 44.8545 35.1293 44.8545 23.8589C44.8545 12.5886 35.7181 3.45215 24.4478 3.45215C13.1774 3.45215 4.04102 12.5886 4.04102 23.8589C4.04102 35.1293 13.1774 44.2657 24.4478 44.2657Z" fill="#F9B906" />
                                        <path d="M34.7714 6.25945L6.1174 32.823C4.789 30.1162 4.04102 27.0725 4.04102 23.8581C4.04102 21.4741 4.45218 19.1861 5.20645 17.058L19.541 4.04867C21.113 3.65867 22.7583 3.45166 24.4492 3.45166C28.2134 3.45195 31.7415 4.47556 34.7714 6.25945Z" fill="#FFC943" />
                                        <path d="M43.4302 16.3667L15.5442 42.2192C12.7353 40.8514 10.2858 38.8587 8.37695 36.4215L38.5055 9.07764C40.6365 11.1051 42.3303 13.5867 43.4302 16.3667Z" fill="#FFC943" />
                                    </svg>
                                </RankingNumber>
                                <RankingName>{popularCategories[0]}</RankingName>
                            </RankingItem>
                            <RankingItem id='2'>
                                <RankingNumber>2
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="60" viewBox="0 0 42 60" fill="none">
                                        <path d="M24.5936 59.679L30.1664 50.8523C30.3235 50.6035 30.6213 50.482 30.9075 50.5498L41.0646 52.9587C41.6094 53.0879 42.0726 52.5472 41.8611 52.0286L33.2392 30.8965L14.752 38.4393L23.3738 59.5714C23.5853 60.0903 24.2946 60.1528 24.5936 59.679Z" fill="#F41943" />
                                        <path d="M27.6785 40.8999L21.6512 55.3502L15.7559 40.8999H27.6785Z" fill="#BA0F38" />
                                        <path d="M27.161 38.439L26.157 40.9001L22.4445 49.9992L22.2911 50.3741L20.9561 53.6476L18.5389 59.5712C18.3274 60.0895 17.6187 60.152 17.3189 59.679L11.7461 50.8525C11.59 50.604 11.2917 50.482 11.0047 50.5501L0.847673 52.9587C0.303844 53.0879 -0.159354 52.5467 0.052394 52.0284L8.67426 30.896L27.161 38.439Z" fill="#F41943" />
                                        <path d="M35.7657 37.0923C34.9592 37.8109 29.2557 42.7291 20.9561 42.7291C19.394 42.7291 17.8316 42.5669 16.3035 42.2419C12.545 41.4432 9.01464 39.6475 6.14648 37.0923L8.67447 30.896L11.5688 32.0775L11.8316 32.1854L20.9561 35.9066L30.0809 32.1858L30.3436 32.078L33.238 30.8965L35.7657 37.0923Z" fill="#BA0F38" />
                                        <path d="M20.9562 40.9007C32.2506 40.9007 41.4066 31.7448 41.4066 20.4504C41.4066 9.15594 32.2506 0 20.9562 0C9.66179 0 0.505859 9.15594 0.505859 20.4504C0.505859 31.7448 9.66179 40.9007 20.9562 40.9007Z" fill="#EBF2F2" />
                                        <path d="M20.9561 39.0821C31.2462 39.0821 39.588 30.7403 39.588 20.4502C39.588 10.1601 31.2462 1.81836 20.9561 1.81836C10.666 1.81836 2.32422 10.1601 2.32422 20.4502C2.32422 30.7403 10.666 39.0821 20.9561 39.0821Z" fill="#C3DBDA" />
                                        <path d="M20.9564 37.942C30.6167 37.942 38.4479 30.1108 38.4479 20.4505C38.4479 10.7902 30.6167 2.95898 20.9564 2.95898C11.2961 2.95898 3.46484 10.7902 3.46484 20.4505C3.46484 30.1108 11.2961 37.942 20.9564 37.942Z" fill="#EBF2F2" />
                                        <path d="M29.8049 5.36541L5.2446 28.1345C4.10597 25.8143 3.46484 23.2054 3.46484 20.4503C3.46484 18.4068 3.81727 16.4457 4.46379 14.6215L16.7506 3.47071C18.098 3.13642 19.5082 2.95898 20.9576 2.95898C24.184 2.95898 27.2081 3.83637 29.8049 5.36541Z" fill="white" />
                                        <path d="M37.2254 14.0286L13.3231 36.1878C10.9154 35.0154 8.81583 33.3074 7.17969 31.2184L33.0041 7.78076C34.8307 9.51862 36.2828 11.6457 37.2254 14.0286Z" fill="white" />
                                    </svg>

                                </RankingNumber>
                                <RankingName>{popularCategories[1]}</RankingName>
                            </RankingItem>
                            <RankingItem id='3'>
                                <RankingNumber>3
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" viewBox="0 0 35 50" fill="none">
                                        <path d="M20.4943 49.7325L25.1384 42.3769C25.2693 42.1696 25.5174 42.0683 25.756 42.1249L34.2202 44.1323C34.6742 44.2399 35.0602 43.7893 34.8839 43.3572L27.699 25.7471L12.293 32.0327L19.4779 49.6428C19.6543 50.0752 20.2452 50.1273 20.4943 49.7325Z" fill="#F41943" />
                                        <path d="M23.0642 34.0835L18.0415 46.1254L13.1289 34.0835H23.0642Z" fill="#BA0F38" />
                                        <path d="M22.6341 32.0324L21.7974 34.0833L18.7037 41.6659L18.5758 41.9783L17.4634 44.7063L15.449 49.6426C15.2728 50.0745 14.6821 50.1266 14.4324 49.7324L9.78832 42.377C9.65823 42.1699 9.40968 42.0682 9.17052 42.125L0.706323 44.1322C0.253131 44.2398 -0.132662 43.7889 0.04359 43.3569L7.22848 25.7466L22.6341 32.0324Z" fill="#F41943" />
                                        <path d="M29.8057 30.9102C29.1336 31.509 24.3807 35.6075 17.4644 35.6075C16.1626 35.6075 14.8606 35.4723 13.5872 35.2015C10.4551 34.5359 7.51318 33.0395 5.12305 30.9102L7.2297 25.7466L9.64168 26.7312L9.86062 26.821L17.4646 29.9217L25.0686 26.821L25.2875 26.7312L27.6995 25.7466L29.8057 30.9102Z" fill="#BA0F38" />
                                        <path d="M17.4638 34.0839C26.8758 34.0839 34.5058 26.454 34.5058 17.042C34.5058 7.62994 26.8758 0 17.4638 0C8.05182 0 0.421875 7.62994 0.421875 17.042C0.421875 26.454 8.05182 34.0839 17.4638 34.0839Z" fill="#E37F22" />
                                        <path d="M17.464 32.5687C26.0391 32.5687 32.9906 25.6172 32.9906 17.0422C32.9906 8.4671 26.0391 1.51562 17.464 1.51562C8.88897 1.51562 1.9375 8.4671 1.9375 17.0422C1.9375 25.6172 8.88897 32.5687 17.464 32.5687Z" fill="#BA6017" />
                                        <path d="M17.463 31.6183C25.5132 31.6183 32.0392 25.0923 32.0392 17.0421C32.0392 8.99183 25.5132 2.46582 17.463 2.46582C9.41273 2.46582 2.88672 8.99183 2.88672 17.0421C2.88672 25.0923 9.41273 31.6183 17.463 31.6183Z" fill="#E37F22" />
                                        <path d="M24.8368 4.47118L4.36985 23.4454C3.42099 21.5119 2.88672 19.3379 2.88672 17.0419C2.88672 15.339 3.18041 13.7047 3.71917 12.1846L13.9582 2.89226C15.081 2.61368 16.2562 2.46582 17.464 2.46582C20.1525 2.46582 22.6725 3.19697 24.8368 4.47118Z" fill="#F79A4D" />
                                        <path d="M31.0224 11.6904L11.1039 30.1564C9.09749 29.1794 7.34783 27.7561 5.98438 26.0152L27.5047 6.48389C29.0269 7.9321 30.2367 9.70463 31.0224 11.6904Z" fill="#F79A4D" />
                                    </svg>
                                </RankingNumber>
                                <RankingName>{popularCategories[2]}</RankingName>
                            </RankingItem>
                            <RankingItem id='4'>
                                <RankingNumber>4</RankingNumber>
                                <RankingName id='4'>{popularCategories[3]}</RankingName>
                            </RankingItem>
                            <RankingItem id='5'>
                                <RankingNumber>5</RankingNumber>
                                <RankingName id='5'>{popularCategories[4]}</RankingName>
                            </RankingItem>
                        </Rankings>
                    </Ranking>
                    <Nearby>
                        <Title>오늘의 건강 꿀팁</Title>
                        <Description><img src={textlogo} width='70rem'/>이 선정한 건강 꿀팁, 읽기만 해도 건강 정보가 와르르!</Description>
                        <NearbyImage src={healthInfo} />
                    </Nearby>
                </RankingAndNearby>
            </Contents>
        </Wrapper>
    )
}

export default Main
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    /* border: 1px solid black; */
`;


const Banner = styled.div`
    //background-image: url('${bannerImage}');
    background-color: aliceblue;
    background-repeat: no-repeat; /* 배경 이미지 반복 안 함 */
    background-size: contain;
    background-position: center; /* 이미지를 중앙에 위치 */
    margin-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 25rem;

    & > * {
        margin-top: 25px; 
    }
`;

const MainSearch = styled.div`
    background-color: #fcff5e;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    height: 3rem;

    border: 1px solid #E4E4E7;
    border-radius: 50px;
    padding-left: 20px;
    padding-right: 20px;
`;
const MainSearchInput = styled.input`
    background-color: transparent;
    margin-left: 20px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    color: #52525B;

    &::placeholder {
        color: #454545;
    }
`;

const MainSearchIcon = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;


const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    & > * {
        margin-top: 80px; /* 모든 자식 요소에 left-margin 적용 */
    }
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    & > Title {
        font-size: 24px;
    }
    /* border: 1px solid black; */
`;
const CategoryTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 20px;
    font-weight: 550;
    margin-bottom: 10px;
`;

const CategoryContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Sports = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const SportsDescription = styled.div`
    margin-top: 10px;
    font-size: 15px;
`;
const Eclipse = styled.div`
    width: 60px;
    aspect-ratio: 1/1;
    border: 1px solid #E4E4E7;
    border-radius: 50%;
    background-color: #FEFCE8;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: #c6c6c6;
    }
    &:active {
        background-color: #4d4d4d;
    }
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
const PopularContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
    & > div:nth-child(-n+4) {
        margin-bottom: 40px; // 윗줄과 아랫줄 간격 설정
    }
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
    font-size: 12px;
`;
const PopularPriceWeek = styled.div`  
    display: flex;
    flex-direction: row;
    font-size: 12px;
`;
const Unit = styled.div`
    margin-right: 5px;
    font-weight: 400;
`;
const Price = styled.div`
`;

const RankingAndNearby = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;  // align-items 속성을 stretch로 설정
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 80px;
    /* border: 1px solid black; */
`;

const Ranking = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 35%;
    height: 100%;  // 높이를 100%로 설정
    margin-right: 40px;
    /* border: 1px solid black; */
`;
const Rankings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid #E4E4E7;
    margin-top: 10px;
`;
const RankingItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #E4E4E7;

    svg {
        margin-left: 20px;
    }

`;
const RankingNumber = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 20px;
    font-weight: bold;
`;
const RankingName = styled.div`
    font-size: 16px;
    font-weight: 400;
`;


const Nearby = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;  // 높이를 100%로 설정
`;
const NearbyImage = styled.img`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    cursor: pointer;
`;


// --
const Title = styled.div`
    text-align: left;
    width: 100%;
    font-size: 25px;
    font-weight: 550;
    margin-bottom: 10px;
`;
const Description = styled.div`
    text-align: left;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
`;