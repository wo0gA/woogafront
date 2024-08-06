import React, { useState } from 'react'
import styled from 'styled-components';
import bar1 from '../images/step bar1.png'
import ban1 from '../images/banner1.png'
import SearchResultCard from './Card/SearchResultCard';
import { useNavigate } from 'react-router-dom';


const RegistrationMain = () => {
    const [resultCard, setResultCard] = useState();
    const navigate = useNavigate();

    const onClick = () => navigate('/registerdetail');

  return (
    <Wrapper>
    <Banner><img src={ban1}/></Banner>
    <RegistrationSection>
    <RecentText>8가지의 물품 종류를 등록할 수 있어요</RecentText>
    <CategorySection>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M20.6667 7.33333C22.1333 7.33333 23.3333 6.13333 23.3333 4.66667C23.3333 3.2 22.1333 2 20.6667 2C19.2 2 18 3.2 18 4.66667C18 6.13333 19.2 7.33333 20.6667 7.33333ZM6.66667 16C2.93333 16 0 18.9333 0 22.6667C0 26.4 2.93333 29.3333 6.66667 29.3333C10.4 29.3333 13.3333 26.4 13.3333 22.6667C13.3333 18.9333 10.4 16 6.66667 16ZM6.66667 27.3333C4.13333 27.3333 2 25.2 2 22.6667C2 20.1333 4.13333 18 6.66667 18C9.2 18 11.3333 20.1333 11.3333 22.6667C11.3333 25.2 9.2 27.3333 6.66667 27.3333ZM14.4 14L17.6 10.8L18.6667 11.8667C20.4 13.6 22.6667 14.6667 25.4667 14.6667V12C23.4667 12 21.8667 11.2 20.6667 10L18.1333 7.46667C17.4667 6.93333 16.8 6.66667 16 6.66667C15.2 6.66667 14.5333 6.93333 14.1333 7.46667L10.4 11.2C9.86667 11.7333 9.6 12.4 9.6 13.0667C9.6 13.8667 9.86667 14.5333 10.4 14.9333L14.6667 18.6667V25.3333H17.3333V17.0667L14.4 14ZM25.3333 16C21.6 16 18.6667 18.9333 18.6667 22.6667C18.6667 26.4 21.6 29.3333 25.3333 29.3333C29.0667 29.3333 32 26.4 32 22.6667C32 18.9333 29.0667 16 25.3333 16ZM25.3333 27.3333C22.8 27.3333 20.6667 25.2 20.6667 22.6667C20.6667 20.1333 22.8 18 25.3333 18C27.8667 18 30 20.1333 30 22.6667C30 25.2 27.8667 27.3333 25.3333 27.3333Z" fill="black"/>
        </svg>
            <CategoryText>생활체육</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M27.428 19.8134L29.3346 17.9067L27.428 16.0001L22.668 20.7601L11.2413 9.33342L16.0013 4.57341L14.0946 2.66675L12.188 4.57341L10.2813 2.66675L7.42797 5.52008L5.5213 3.61341L3.61464 5.52008L5.5213 7.42675L2.66797 10.2801L4.57464 12.1867L2.66797 14.0934L4.57464 16.0001L9.33464 11.2401L20.7613 22.6667L16.0013 27.4267L17.908 29.3334L19.8146 27.4267L21.7213 29.3334L24.5746 26.4801L26.4813 28.3867L28.388 26.4801L26.4813 24.5734L29.3346 21.7201L27.428 19.8134Z" fill="black"/>
        </svg>
            <CategoryText>피트니스</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M26.0265 3.32011C22.9065 0.200106 17.1998 0.826773 13.2931 4.73344C11.1598 6.86677 9.93313 9.89344 9.90646 12.0134C9.87979 14.1201 10.2531 17.2001 8.10646 19.3468L2.45312 25.0001L4.34646 26.8934L9.99979 21.2401C12.1465 19.0934 15.2265 19.4668 17.3331 19.4401C19.4398 19.4134 22.4798 18.1868 24.6131 16.0534C28.5065 12.1468 29.1465 6.44011 26.0265 3.32011ZM13.7598 15.5734C11.7198 13.5334 12.3598 9.42677 15.1731 6.61344C17.9865 3.80011 22.0798 3.16011 24.1331 5.20011C26.1731 7.24011 25.5331 11.3468 22.7198 14.1601C19.9065 16.9734 15.8131 17.6134 13.7598 15.5734ZM23.9998 22.6668C24.7065 22.6668 25.3865 22.9468 25.8798 23.4534C26.9198 24.4934 26.9198 26.1868 25.8798 27.2268C25.3865 27.7201 24.7065 28.0001 23.9998 28.0001C23.2931 28.0001 22.6131 27.7201 22.1198 27.2134C21.0798 26.1734 21.0798 24.4801 22.1198 23.4401C22.6131 22.9468 23.2931 22.6668 23.9998 22.6668ZM23.9998 20.0001C22.9438 19.998 21.9109 20.3096 21.0323 20.8953C20.1536 21.4811 19.4687 22.3147 19.0645 23.2902C18.6602 24.2658 18.5549 25.3395 18.7618 26.375C18.9686 27.4106 19.4784 28.3614 20.2265 29.1068C21.2665 30.1468 22.6398 30.6668 23.9998 30.6668C25.0558 30.6689 26.0887 30.3573 26.9673 29.7715C27.846 29.1858 28.5309 28.3522 28.9351 27.3766C29.3393 26.4011 29.4447 25.3274 29.2378 24.2918C29.0309 23.2563 28.5212 22.3055 27.7731 21.5601C27.2775 21.0649 26.6892 20.6722 26.0417 20.4045C25.3943 20.1368 24.7004 19.9994 23.9998 20.0001Z" fill="black"/>
        </svg>
            <CategoryText>구기스포츠</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10.668 11.3333C10.668 10.96 10.9613 10.6667 11.3346 10.6667H14.6946L14.668 9.33333H11.3346C10.9613 9.33333 10.668 9.04 10.668 8.66667C10.668 8.29333 10.9613 8 11.3346 8H14.668V4H4.0013V24H8.0013V26.6667H2.66797V29.3333H24.0013C27.6813 29.3333 30.668 26.3467 30.668 22.6667H28.0013C28.0013 24.88 26.2146 26.6667 24.0013 26.6667H21.3346V24H25.3346V20.16C25.3346 17.36 23.268 15.4533 21.2946 14.9867L17.6946 14.0933C16.5346 13.8 15.6013 13.0133 15.0946 12H11.3346C10.9613 12 10.668 11.7067 10.668 11.3333ZM18.668 26.6667H10.668V24H18.668V26.6667Z" fill="black"/>
        </svg>
            <CategoryText>전문스포츠</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M18.6654 8L13.6654 14.6667L17.4654 19.7333L15.332 21.3333C13.0787 18.3333 9.33203 13.3333 9.33203 13.3333L1.33203 24H30.6654L18.6654 8Z" fill="black"/>
        </svg>
            <CategoryText>아웃도어</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M19.3346 15.6666C20.2551 15.6666 21.0013 14.9204 21.0013 13.9999C21.0013 13.0794 20.2551 12.3333 19.3346 12.3333C18.4142 12.3333 17.668 13.0794 17.668 13.9999C17.668 14.9204 18.4142 15.6666 19.3346 15.6666Z" fill="black"/>
        <path d="M12.6667 15.6666C13.5871 15.6666 14.3333 14.9204 14.3333 13.9999C14.3333 13.0794 13.5871 12.3333 12.6667 12.3333C11.7462 12.3333 11 13.0794 11 13.9999C11 14.9204 11.7462 15.6666 12.6667 15.6666Z" fill="black"/>
        <path d="M30.5854 16.88C30.6387 16.6 30.6654 16.3067 30.6654 16C30.6654 15.6933 30.6387 15.4 30.5854 15.12C30.418 14.1359 29.9783 13.2183 29.3161 12.4712C28.6539 11.7242 27.7957 11.1776 26.8387 10.8933C26.1363 9.41672 25.1432 8.09704 23.9187 7.01333C21.812 5.13333 19.0387 4 15.9987 4C12.9587 4 10.1854 5.13333 8.0787 7.01333C6.85203 8.09333 5.85203 9.41333 5.1587 10.8933C4.20068 11.1756 3.34135 11.7216 2.67884 12.469C2.01634 13.2164 1.57736 14.135 1.41203 15.12C1.3587 15.4 1.33203 15.6933 1.33203 16C1.33203 16.3067 1.3587 16.6 1.41203 16.88C1.57943 17.8641 2.01914 18.7817 2.68134 19.5288C3.34354 20.2758 4.20174 20.8224 5.1587 21.1067C5.85195 22.574 6.83634 23.885 8.05203 24.96C10.1587 26.8533 12.9454 28 15.9987 28C19.052 28 21.8387 26.8533 23.9587 24.96C25.1587 23.8933 26.1587 22.5733 26.852 21.1067C27.8073 20.8217 28.6635 20.2746 29.3234 19.5274C29.9833 18.7803 30.4205 17.8631 30.5854 16.88ZM25.332 18.6667C25.1987 18.6667 25.0787 18.64 24.9454 18.6267C24.6787 19.52 24.292 20.3467 23.7987 21.1067C22.132 23.6533 19.2654 25.3333 15.9987 25.3333C12.732 25.3333 9.86536 23.6533 8.1987 21.1067C7.70536 20.3467 7.3187 19.52 7.05203 18.6267C6.9187 18.64 6.7987 18.6667 6.66536 18.6667C5.1987 18.6667 3.9987 17.4667 3.9987 16C3.9987 14.5333 5.1987 13.3333 6.66536 13.3333C6.7987 13.3333 6.9187 13.36 7.05203 13.3733C7.3187 12.48 7.70536 11.6533 8.1987 10.8933C9.86536 8.34667 12.732 6.66667 15.9987 6.66667C19.2654 6.66667 22.132 8.34667 23.7987 10.8933C24.292 11.6533 24.6787 12.48 24.9454 13.3733C25.0787 13.36 25.1987 13.3333 25.332 13.3333C26.7987 13.3333 27.9987 14.5333 27.9987 16C27.9987 17.4667 26.7987 18.6667 25.332 18.6667ZM9.9987 18.6667C11.012 21.0267 13.3187 22.6667 15.9987 22.6667C18.6787 22.6667 20.9854 21.0267 21.9987 18.6667H9.9987Z" fill="black"/>
        </svg>
            <CategoryText>아동용품</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M15.9987 2.66675C8.89203 8.73342 5.33203 13.9734 5.33203 18.4001C5.33203 25.0401 10.3987 29.3334 15.9987 29.3334C21.5987 29.3334 26.6654 25.0401 26.6654 18.4001C26.6654 13.9734 23.1054 8.73342 15.9987 2.66675ZM19.9987 24.0001H11.9987V21.3334H19.9987V24.0001ZM19.9987 17.3334H17.332V20.0001H14.6654V17.3334H11.9987V14.6667H14.6654V12.0001H17.332V14.6667H19.9987V17.3334Z" fill="black"/>
        </svg>
            <CategoryText>건강, 웰빙</CategoryText>
        </CategoryBox>
        <CategoryBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M7.9987 13.3333C6.53203 13.3333 5.33203 14.5333 5.33203 15.9999C5.33203 17.4666 6.53203 18.6666 7.9987 18.6666C9.46536 18.6666 10.6654 17.4666 10.6654 15.9999C10.6654 14.5333 9.46536 13.3333 7.9987 13.3333ZM23.9987 13.3333C22.532 13.3333 21.332 14.5333 21.332 15.9999C21.332 17.4666 22.532 18.6666 23.9987 18.6666C25.4654 18.6666 26.6654 17.4666 26.6654 15.9999C26.6654 14.5333 25.4654 13.3333 23.9987 13.3333ZM15.9987 13.3333C14.532 13.3333 13.332 14.5333 13.332 15.9999C13.332 17.4666 14.532 18.6666 15.9987 18.6666C17.4654 18.6666 18.6654 17.4666 18.6654 15.9999C18.6654 14.5333 17.4654 13.3333 15.9987 13.3333Z" fill="black"/>
        </svg>
            <CategoryText>기타</CategoryText>
        </CategoryBox>
    </CategorySection>
    <Button><button onClick={onClick}>등록하러 가기</button></Button>
    </RegistrationSection>
    <RecentRegistered>
        <RecentText2>최근 등록된 상품</RecentText2>
        <GoodsItems>
        <W1>
        <SearchResultBox>
         <SearchResultCard setResultCard={setResultCard} />
        </SearchResultBox>
        </W1>
        </GoodsItems>
    </RecentRegistered>
    </Wrapper>
  )
}

export default RegistrationMain

const Button = styled.div`
    display: flex;
    width: 8rem;
    height: 2rem;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 550;
    background-color: #FCFF5D;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100vw;
`;

const Banner = styled.div`
    align-items: center;
    display: flex;
    width: 85%;
    height: 15rem;
    flex-shrink: 0;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
`;

const RegistrationSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 7rem;
`;

const RecentText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    margin-bottom: 2rem;
`;

const RecentText2 = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    margin-bottom: 1rem;
`;

const CategorySection = styled.div`
    display: inline-flex;
    padding: 10px;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 3rem;
`;

const CategoryBox = styled.div`
    display: flex;
    width: 5rem;
    height: auto;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border: 1px solid var(--zinc-200, #E4E4E7);
    background: var(--yellow-50, #FEFCE8);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    margin-right: 1rem;
`;

const CategoryText = styled.div`
    font-size: 10px;
`;

const RecentRegistered = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 85%;
    text-align: left;
`;

const GoodsItems = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-x: auto;
  height: 11rem;
  align-self: stretch;
`;

const ProcessBar = styled.div`
    width: 85%;
    height: 4rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const SearchResultBox = styled.div`
    display: flex;
    overflow: hidden;
    margin-top: 5px;
    justify-content: space-between;
    `;

const W1 = styled.div`
    width: 150%;
`;


const CategoryBoxStyled = styled.div`
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &.selected {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
`;

const AppContainer = styled.div`
  display: flex;
  gap: 10px;
`;