import React, { useReducer, useState } from 'react'
import CategoryComponent from './CategoryComponent'
import styled from 'styled-components'
import cam1 from '../images/camera button.png'
import cam2 from '../images/cams.png'
import bar1 from '../images/step bar2.png';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialState = {
  thumbnails: '',
  name: '',
  category: '',
  state: '',
  model_name: '',
  rental_fee_for_a_day: '',
  rental_fee_for_a_week:'',
  description: '',
  tags: '',
  delivery_fee_is_included: '',
  direct_dealing_is_allowed: '',
  direct_dealing_place: ''
};
const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  };
};

const RegistrationDetailMain = ({ item }) => {
  const [uploadedImage, setUploadedImage] = useState('null');
  const [previewImg, setPreviewImg] = useState('null');

  const onItemSelect ={
        category : {item}};

  const accessToken = localStorage.getItem("access");
  const [state, dispatch] = useReducer(reducer, initialState); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userConfirmed = window.confirm("게시물을 업로드 하시겠습니까?");
    if (userConfirmed) {
      const formData = new FormData();
      if (uploadedImage != null) {
        formData.append("image", uploadedImage);
      }
      Object.keys(state).forEach(key => {
        if (state[key]) {
          formData.append(key, state[key]);
        }
      });  
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      try {
        const response = await axios.post('https://server.templ.es/products/', formData, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }});
        console.log(response.data);
        alert("등록이 완료되었습니다.");
      } catch (error) {
        console.error('There was an error!', error);
      }
      navigate('/register');
      console.log(formData);
    }
  };

  const insertImg = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];
    setUploadedImage(file);
    console.log(e.target.files[0]);

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPreviewImg("../images/camera button.png"); // 파일 선택 취소 시 프리뷰 이미지 삭제
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      console.log(previewImgUrl);

      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };

  }


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      dispatch({ name, value: files[0] });
    } else {
      dispatch({ name, value });
    }
  };

  const handleRadioChange = (name, value) => {
    dispatch({ name, value });
  };
  const handleCategoryChange = (value) => {
    dispatch({ name: 'category', value });
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
                  <PreviewImg src={cam1} width='140px' alt="Camera Icon" />
                  <label htmlFor="imageInput">
                    <img src={previewImg || cam1} width='140px' alt="Camera Icon" style={{ cursor: 'pointer' }} />
                    <input
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      name="thumbnails"
                      onChange={(e) => insertImg(e)}
                    /></label>
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
                  name="name"
                  value={state.name}
                  onChange={handleChange} 
                  placeholder="상품명을 입력해주세요."
                />
              </InputText>
            </W1>
            <W1>
              <Title>카테고리</Title>
              <CategoryComponent 
                key={item}
                name="category"
                value={state.category} 
                onItemSelect={handleCategoryChange} 
              />
              <ExplainationText>선택한 카테고리 : {state.category}</ExplainationText>
              </W1>
            <W1>
              <Title>상품 상태</Title>
              <InputText>
                <select 
                  name="state"
                  value={state.state} 
                  onChange={handleChange}
                >
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
                  name="model_name"
                  value={state.model_name} 
                  onChange={handleChange} 
                  placeholder="모델명을 입력해주세요."
                />
              </InputText>
              <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText>
            </W1>
    <W1>
    <Title>대여 가격</Title>
    <InputText>
                일<input 
                  type="text"
                  name="rental_fee_for_a_day"
                  value={state.rental_fee_for_a_day} 
                  onChange={handleChange} 
                  placeholder="1일 대여 가격을 입력해주세요."
                />원
              </InputText>
              <InputText>
                주<input 
                  type="text"
                  name="rental_fee_for_a_week"
                  value={state.rental_fee_for_a_week} 
                  onChange={handleChange} 
                  placeholder="1주 대여 가격을 입력해주세요."
                />원
              </InputText>
    </W1>
            <W1>
    <Title>상세 설명</Title>
    <InputText>
                <input 
                  type="text"
                  name="description"
                  value={state.description} 
                  onChange={handleChange} 
                  placeholder="상세 설명을 입력해주세요."
                />
              </InputText>
    </W1>
    <W1>
    <Title>태그</Title> 
    <InputText>
                <input 
                  type="text"
                  name="tags"
                  value={state.tags} 
                  onChange={handleChange} 
                  placeholder="태그를 입력해주세요."
                />
              </InputText>
    </W1>
    <W1><Title>배송비</Title>
    <div>
                <label>
                  <input
                    type="radio"
                    name="delivery_fee_is_included"
                    value="협의 필요"
                    checked={state.delivery_fee_is_included === 'true'}
                    onChange={() => handleRadioChange('delivery_fee_is_included', 'true')}
                  />
                  협의 필요
                </label>
                <label>
                  <input
                    type="radio"
                    name="delivery_fee_is_included"
                    value="없음"
                    checked={state.delivery_fee_is_included === 'false'}
                    onChange={() => handleRadioChange('delivery_fee_is_included', 'false')}
                  />
                  없음
                </label>
              </div>
    </W1>
    <W1>
    <Title>직거래</Title> 
    <div>
                <label>
                  <input
                    type="radio"
                    name="direct_dealing_is_allowed"
                    value="가능"
                    checked={state.direct_dealing_is_allowed === 'true'}
                    onChange={() => handleRadioChange('direct_dealing_is_allowed', 'true')}
                  />
                  가능
                </label>
                <label>
                  <input
                    type="radio"
                    name="direct_dealing_is_allowed"
                    value="불가능"
                    checked={state.direct_dealing_is_allowed === 'false'}
                    onChange={() => handleRadioChange('direct_dealing_is_allowed', 'false')}
                  />
                  불가능
                </label>
              </div>
              <InputText>
                <input 
                  type="text"
                  name="direct_dealing_place"
                  value={state.direct_dealing_place} 
                  onChange={handleChange} 
                  placeholder="직거래 선호 지역을 입력해주세요."
                />
              </InputText>
    </W1>
    <W1>
    <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText>
    </W1></Detail>
          <Buttons>
            <LeftArrow />
            <Button onClick={handleSubmit} type="submit">다음 페이지</Button>
            </Buttons>
        </form>
      </Contents>
    </Wrapper>
  );  };

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
    width: 100%;
    height: 40rem;
    font-size: 18px;
    font-weight: 500;
    padding-top: 1rem;
    text-align: left;
    padding-left: 1.5rem;
    margin-left: 2rem;
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


const PreviewImg = styled.div`
    margin-right: 1.5rem;
    cursor: pointer;
    background-color: aqua;
    width: 5rem;
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
  flex-direction: column;
  margin-bottom: 2rem;
`;