import React, { useState } from 'react'
import CategoryComponent from './CategoryComponent'
import styled from 'styled-components'
import cam1 from '../images/camera button.png'
import cam2 from '../images/cams.png'
import bar1 from '../images/step bar2.png';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const RegistrationDetailMain = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [modelValue, setModelValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [goodsCondition, setGoodsCondition] = useState('');

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userConfirmed = window.confirm("다음 페이지로 넘어가시겠어?");
    if (userConfirmed) {
      const formData = new FormData();
      formData.append("name", inputValue);
      formData.append("category", categoryValue);
      formData.append("goodscondition", goodsCondition);
      formData.append("modelname", modelValue);
      navigate('/registrationdetail2');
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleModelChange = (e) => {
    setModelValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  const handleConditionChange = (e) => {
    setGoodsCondition(e.target.value);
  };

  return (
    <Wrapper>
      <Banner>상품 정보<br />입력</Banner>
      <Contents>
        <ProcessBar><img src={bar1} alt="Process Bar" /></ProcessBar>
        <form onSubmit={handleSubmit}>
          <Detail>
            <W1>
              <Title>상품<br />이미지</Title>
              <PhotoBox>
                <PhotoArr>
                <PhotoItem1 htmlFor="imageInput"><img src={cam1} width='140px' alt="Camera Icon" /></PhotoItem1>
                  <PhotoItem2><img src={cam2} height='140px' alt="Camera Icon" /></PhotoItem2>
                </PhotoArr>
                <ExplainationText>상품 이미지는 최대 6개까지 등록 가능합니다.<br />운동물품 정면, 후면, 측면 사진 업로드를 권장합니다.</ExplainationText>
              </PhotoBox>
            </W1>
            <W1>
              <Title>상품명</Title>
              <InputText>
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={handleInputChange} 
                  placeholder="상품명을 입력해주세요."
                />
              </InputText>
            </W1>
            <W1>
              <Title>카테고리</Title>
              <h1>님이 고른 카테고리: {selectedCategory}</h1>
              <CategoryComponent value={categoryValue} onChange={setCategoryValue} />
            </W1>
            <W1>
              <Title>상품 상태</Title>
              <InputText>
                <select value={goodsCondition} onChange={handleConditionChange}>
                  <option value="" disabled>옵션 선택</option>
                  <option value="새 것과 비슷해요">새 것과 비슷해요</option>
                  <option value="깨끗해요">깨끗해요</option>
                  <option value="쓸 만 해요">쓸 만 해요</option>
                </select>
              </InputText>
            </W1>
            <W1>
              <Title>모델명</Title>
              <InputText>
                <input 
                  type="text" 
                  value={modelValue} 
                  onChange={handleModelChange} 
                  placeholder="모델명을 입력해주세요."
                />
              </InputText>
              <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText>
            </W1>
          </Detail>
          <Buttons>
            <LeftArrow />
            <Button><button type='submit'>다음 페이지</button></Button>
            </Buttons>
        </form>
      </Contents>
    </Wrapper>
  );
}
export default RegistrationDetailMain;

const Button = styled.div`
display: flex;
width: 8rem;
height: 1rem;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
font-weight: 500;
background-color: #FCFF5D;`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100vw;
`;

const Banner = styled.div`
    background-color: yellow;
    width: 6rem;
    height: 20rem;
    font-size: 18px;
    font-weight: 500;
    padding-top: 2rem;
    text-align: left;
    padding-left: 1.5rem;
`;
const Contents = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;
const ProcessBar = styled.div`
    width: 50%;
    height: 2rem;
    margin-bottom: 5rem;
    margin-top: 1rem;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 550;
  text-align: left;
  width: 6rem;
  margin-left: 1rem;
`;
const PhotoBox = styled.div`
    
`;
const PhotoItem1 = styled.div`
  margin-right: 1.5rem;
 `;
const PhotoArr = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
`;
const PhotoItem2 = styled.div``;
const ExplainationText = styled.div`
  font-size: 10px;
`;
const InputText = styled.div``;
const Buttons = styled.div``;
const LeftArrow = styled.div``;
const NextPage = styled.div``;

/*const CategoryComponent = styled.div`
    width: 60%;
`;*/

const W1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;