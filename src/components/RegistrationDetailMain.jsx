import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import cam1 from '../images/camera button.png'
import cam2 from '../images/cams.png'
import bar1 from '../images/step bar2.png';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import categories from './data/categories';

const CategoryComponent = ({onItemSelect}) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleMainCategoryClick = (category) => {
    setSelectedMainCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleItemClick = (item) => {
    onItemSelect(item);
  };
  return( 
  <CategoryContainer>
  <MainCategories>
  <CatTitle>전체 카테고리</CatTitle>
    {Object.keys(categories).map((mainCategory) => (
      <CategoryItem
        key={mainCategory}
        onClick={() => handleMainCategoryClick(mainCategory)}
        selected={selectedMainCategory === mainCategory}
      >
        {mainCategory}
      </CategoryItem>
    ))}
  </MainCategories>
  {selectedMainCategory && (
    <SubCategories>
    <CatTitle>{selectedMainCategory}</CatTitle>
      {Object.keys(categories[selectedMainCategory]).map((subCategory) => (
        <SubCategoryItem
          key={subCategory}
          onClick={() => handleSubCategoryClick(subCategory)}
          selected={selectedSubCategory === subCategory}
        >
          {subCategory}
        </SubCategoryItem>
      ))}
    </SubCategories>
  )}
  {selectedMainCategory && selectedSubCategory && (
    <Items>
    <CatTitle>{selectedSubCategory}</CatTitle>
      {categories[selectedMainCategory][selectedSubCategory].map((item) => (
        <Item key={item} onClick={() => handleItemClick(item)}>
          {item}
        </Item>
      ))}
    </Items>
  )}
</CategoryContainer>
)}
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
  const [tags, setTags] = useState([]);

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
        formData.append("thumbnails", uploadedImage);
      }
      Object.keys(state).forEach(key => {
        if (state[key]) {
          formData.append(key, state[key]);
        }
      });  
      tags.forEach(tag => {
        formData.append('tags', JSON.stringify([{ hashtag: tag }]));
      });

      try {
        const response = await axios.post('https://server.templ.es/products/', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }});
        console.log(response.data);
        alert("등록이 완료되었습니다.");
        navigate('/register');
      } catch (error) {
        navigate('/register');
        console.error('There was an error!', error);
    }
  }};

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
  const handleTagChange = (e) => {
    const { value } = e.target;
    setTags(value.split(',').map(tag => tag.trim()));
  };

  return (
    <Wrapper>
      <Banner>물품 등록<ExplainationText2>상품 정보와<br/>대여 정보를<br/>입력해주세요</ExplainationText2></Banner>
      <Contents>
        <form onSubmit={handleSubmit}>
          <Detail>
            <W1>
              <Title>상품<br />이미지</Title>
              <PhotoBox>
                <PhotoArr>
                  <PreviewImg src={cam1} width='140px' />
                  <label htmlFor="imageInput">
                    <input
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      name="thumbnails"
                      style={{ cursor: 'pointer' }}
                      onChange={(e) => insertImg(e)}
                    />
                    </label>
                  <PhotoItem2><img src={cam2} height='140px' alt="Camera Icon" /></PhotoItem2>
                </PhotoArr>
                <ExplainationText>상품 이미지는 최대 6개까지 등록 가능합니다.<br />운동물품 정면, 후면, 측면 사진 업로드를 권장합니다.</ExplainationText>
              </PhotoBox>
            </W1>
            <W1>
              <Title>상품명</Title>
              <InputText
                  type="text" 
                  name="name"
                  value={state.name}
                  onChange={handleChange} 
                  placeholder="상품명을 입력해주세요."
                  style={{paddingLeft: '20px'}}
              />
            </W1>
            <W1>
              <Title>카테고리</Title><W3>
              <Text>선택한 카테고리 : {state.category}</Text>
              <CategoryComponent 
                key={item}
                name="category"
                value={state.category} 
                onItemSelect={handleCategoryChange} 
              /></W3>
              </W1>
            <W1>
              <Title>상품 상태</Title>
                <select 
                  name="state"
                  value={state.state} 
                  onChange={handleChange}
                >
                  <option value="" disabled>옵션 선택</option>
                  <option value="새 것과 비슷해요">새 것과 비슷해요</option>
                  <option value="깨끗해요">깨끗해요</option>
                  <option value="쓸 만해요">쓸 만해요</option>
                </select>
            </W1>
            <W1>
              <Title>모델명</Title><W3>
                <InputText 
                  type="text" 
                  name="model_name"
                  value={state.model_name} 
                  onChange={handleChange} 
                  placeholder="모델명을 입력해주세요."
                  style={{paddingLeft: '20px'}}
                />
              <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText></W3>
            </W1>
    <W1>
    <Title>대여 가격</Title><W3><W1>
                <Text>일</Text><InputText 
                  type="text"
                  name="rental_fee_for_a_day"
                  value={state.rental_fee_for_a_day} 
                  onChange={handleChange} 
                  placeholder="1일 대여 가격을 입력해주세요."
                  style={{paddingLeft: '20px'}}
                /><Text>원</Text></W1>
              <W1><Text>주</Text><InputText 
                  type="text"
                  name="rental_fee_for_a_week"
                  value={state.rental_fee_for_a_week} 
                  onChange={handleChange} 
                  placeholder="1주 대여 가격을 입력해주세요."
                  style={{paddingLeft: '20px'}}
                /><Text>원</Text>
              </W1></W3>
    </W1>
            <W1>
    <Title>상세 설명</Title>
    <InputText
      type="text"
      name="description"
      value={state.description} 
      onChange={handleChange} 
      placeholder="상세 설명을 입력해주세요."
      style={{paddingLeft: '20px'}}
    />
    </W1>
    <W1>
    <Title>태그</Title> 
    <InputText
                  type="text"
                  name="tags"
                  value={tags.join(', ')} 
                  onChange={handleTagChange}
                  style={{paddingLeft: '20px'}}
                  placeholder="콤마를 사용해서 태그를 입력해주세요."
                >
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
    <Title>직거래</Title> <W3>
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
              <InputText
                  type="text"
                  name="direct_dealing_place"
                  value={state.direct_dealing_place} 
                  onChange={handleChange} 
                  placeholder="직거래 선호 지역을 입력해주세요."
                  style={{paddingLeft: '20px'}}
                />
              </W3>
    </W1>
    <W1>
    </W1></Detail>
          <Buttons>
            <Button onClick={handleSubmit} type="submit">등록 완료</Button>
            </Buttons>
        </form>
      </Contents>
    </Wrapper>
  );  };

export default RegistrationDetailMain;

const Button = styled.div`
display: flex;
width: 8rem;
height: 2rem;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
font-weight: 500;
background-color: #FCFF5D;
margin-bottom: 6rem;
align-items: center;
cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
//    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100vw;
`;

const Banner = styled.div`
    background-color: #FCFF5D;
    width: 7rem;
    height: 40rem;
    font-size: 18px;
    font-weight: 500;
    padding-top: 2rem;
    text-align: center;
    margin-left: 2rem;
    margin-right: 1rem;
    margin-top: 2rem;
    top: 0px;
`;

const ExplainationText2 = styled.div`
  margin-top: 1rem;
  font-size: 12px;
  text-align: center;
`;
const Contents = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
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
    //margin-right: 1.5rem;
    cursor: pointer;
    width: 5rem;
`;
const PhotoArr = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
//  margin-right: 2rem;
`;
const PhotoItem2 = styled.div`
`;
const ExplainationText = styled.div`
  font-size: 10px;
`;
const Text = styled.div`
  font-size: 14px;
  text-align: left;
`;

const InputText = styled.input`
  border: 1px solid #E4E4E7;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  font-size: 13px;
`;
const Buttons = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const W1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

const W3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
    width: 100%;
//    background-color: rgb(244,244,245);
    border: 1px solid var(--zinc-300, #D4D4D8);
`;

const MainCategories = styled.div`
  width: 20%;
  margin-right: 1rem;
  text-align: left;
  border-right: 1px solid var(--zinc-300, #D4D4D8);
`;

const SubCategories = styled.div`
  width: 40%;
  margin-right: 1rem;
  text-align: left;
  border-right: 1px solid var(--zinc-300, #D4D4D8);
`;

const CategoryItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#F5FA25' : 'transparent')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

const SubCategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'normal')};
  color: ${(props) => (props.selected ? '#FFD56A' : 'black')};
  width: 45%;
`;
const SubSubCategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'normal')};
  color: ${(props) => (props.selected ? '#FFD56A' : 'black')};
  width: 45%;
`;
const Items = styled.div`
  text-align: left;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'normal')};
  color: ${(props) => (props.selected ? '#FFD56A' : 'black')};
//  border: 1px solid var(--zinc-300, #D4D4D8);
  flex-grow: 1;
`;

const Item = styled.div`
  padding: 0.5rem 0;
  margin-left: 10px;
`;

const CatTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 14px;
    font-weight: 550;
    margin: 10px 10px 10px 10px;
    color: #000;
`;