import React, { useEffect, useReducer, useState } from 'react'
import CategoryComponent from './CategoryComponent'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getProductInfo } from '../apis/product'
import { mediaQueries, BREAKPOINT_PHONE } from '../mediaquery/mediaQuery';

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

const EditProductMain = ({ item }) => {
   const [uploadedImage, setUploadedImage] = useState(null);
   const [previewImg, setPreviewImg] = useState(null);
   const [tags, setTags] = useState([]);
   const { productID } = useParams();   

   const accessToken = localStorage.getItem("access");
   const [state, dispatch] = useReducer(reducer, initialState); 
   const navigate = useNavigate();
   const [deliveryRadioState, setDeliveryRadioState] = useState('');
   const [directDealingRadioState, setDirectDealingRadioState] = useState('');

   const handleSubmit = async (event) => {
      event.preventDefault();
      const userConfirmed = window.confirm("게시물을 수정하시겠습니까?");
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
         formData.append('tags', JSON.stringify({ hashtag: tag }));
         });

         try {
         const response = await axios.put('https://server.templ.es/products/', formData, {
         headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
         }});
         console.log(response.data);
         alert("등록이 완료되었습니다.");
         navigate('/register');
         } catch (error) {
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
         dispatch({ name: 'thumbnails', value: previewImgUrl });
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

   useEffect(() => {
      getProductInfo(productID).then((data) => {
         console.log(data);
         dispatch({ name: 'thumbnails', value: data.thumbnails && data.thumbnails[0] && data.thumbnails[0].thumbnail ? data.thumbnails[0].thumbnail : '' });
         dispatch({ name: 'name', value: data.name });
         dispatch({ name: 'category', value: data.category.parent.sort });
         dispatch({ name: 'state', value: data.state });
         dispatch({ name: 'model_name', value: data.model_name });
         dispatch({ name: 'rental_fee_for_a_day', value: data.rental_fee_for_a_day });
         dispatch({ name: 'rental_fee_for_a_week', value: data.rental_fee_for_a_week });
         dispatch({ name: 'description', value: data.description });
         setTags(data.tags.map(tag => tag.hashtag));
         dispatch({ name: 'delivery_fee_is_included', value: data.delivery_fee_is_included });
         dispatch({ name: 'direct_dealing_is_allowed', value: data.direct_dealing_is_allowed });
         dispatch({ name: 'direct_dealing_place', value: data.direct_dealing_place });
         setDeliveryRadioState(data.delivery_fee_is_included);
         setDirectDealingRadioState(data.direct_dealing_is_allowed);
         //확인
         console.log('초기 세팅: ', state);
      }
      );
   }, [productID]);   
   return (
      <Wrapper>
         <Banner>상품 정보<br />입력</Banner>
         <Contents>
         <form onSubmit={handleSubmit}>
            <Detail>
               <W1>
               <Title>상품<br />이미지</Title>
               <PhotoBox>
                  <PhotoArr>
                     {/* <PreviewImg src={state.thumbnails} width='140px' alt="preview" /> */}
                     <label htmlFor="imageInput">
                     <img src={state.thumbnails} width='140px' alt="Camera Icon" style={{ cursor: 'pointer' }} />
                     <input
                        type="file"
                        accept="image/*"
                        id="imageInput"
                        name="thumbnails"
                        onChange={(e) => insertImg(e)}
                     /></label>
                  </PhotoArr>
                  <ExplainationText>운동물품 정면, 후면, 측면 사진 업로드를 권장합니다.</ExplainationText>
               </PhotoBox>
               </W1>
               <W1>
               <Title>상품명</Title>
                  <input 
                     type="text" 
                     name="name"
                     value={state.name}
                     onChange={handleChange} 
                     placeholder="상품명을 입력해주세요."
                     style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
                  />
               </W1>
               <W1>
               <Title>카테고리</Title><W2>
               <ExplainationText>선택한 카테고리 : {state.category}</ExplainationText>
               <CategoryComponent 
                  key={item}
                  name="category"
                  value={state.category} 
                  onItemSelect={handleCategoryChange} 
               />
               </W2></W1>
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
                     <option value="쓸 만 해요">쓸 만 해요</option>
                  </select>
               </W1>
               <W1>
               <Title>모델명</Title><W2>
               <input 
                  type="text"
                  name="model_name"
                  value={state.model_name} 
                  onChange={handleChange} 
                  placeholder="모델명을 입력해주세요."
                  style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
                   />
               <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText>
               </W2></W1>
      <W1>
      <Title>대여 가격</Title>
      <W2>
         <input 
            type="text"
            name="rental_fee_for_a_day"
            value={state.rental_fee_for_a_day} 
            onChange={handleChange} 
            placeholder="1일 대여 가격을 입력해주세요."
            style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
         />
         <input 
            type="text"
            name="rental_fee_for_a_week"
            value={state.rental_fee_for_a_week} 
            onChange={handleChange} 
            placeholder="1주 대여 가격을 입력해주세요."
            style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
         />
      </W2></W1>
               <W1>
      <Title>상세 설명</Title>
         <input 
         type="text"
         name="description"
         value={state.description} 
         onChange={handleChange} 
         placeholder="상세 설명을 입력해주세요."
         style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
         />
      </W1>
      <W1>
      <Title>태그</Title> 
         <input 
         type="text"
         name="tags"
         value={tags.join(', ')} 
         onChange={handleTagChange} 
         placeholder="콤마를 사용해서 태그를 입력해주세요."
         style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
         />
      </W1>
      <W1><Title>배송비</Title><W2><W3>
  <RadioContainer>
    <RadioLabel selected={state.delivery_fee_is_included === '협의 필요'}>
      <input
        type="radio"
        name="delivery_fee_is_included"
        value="협의 필요"
        checked={state.delivery_fee_is_included === true}
        onChange={() => handleRadioChange('delivery_fee_is_included', '협의 필요')}
        whether={deliveryRadioState}
        style={{display:'none'}}
      />
      협의 필요
    </RadioLabel>
    <RadioLabel selected={state.delivery_fee_is_included === '없음'}>
      <input
        type="radio"
        name="delivery_fee_is_included"
        value="없음"
        checked={state.delivery_fee_is_included === false}
        onChange={() => handleRadioChange('delivery_fee_is_included', '없음')}
         whether={deliveryRadioState}
         style={{display:'none'}}
      />
      없음
    </RadioLabel>
  </RadioContainer></W3></W2>
</W1>
<W1><Title>직거래</Title><W2><W3>
  <RadioContainer>
    <RadioLabel selected={state.direct_dealing_is_allowed === '가능'}>
      <input
        type="radio"
        name="direct_dealing_is_allowed"
        value="가능"
        checked={state.direct_dealing_is_allowed === true}
        onChange={() => handleRadioChange('direct_dealing_is_allowed', '가능')}
        whether={directDealingRadioState}
        style={{display:'none'}}
      />
      가능
    </RadioLabel>
    <RadioLabel selected={state.direct_dealing_is_allowed === '불가능'}>
      <input
        type="radio"
        name="direct_dealing_is_allowed"
        value="불가능"
        checked={state.direct_dealing_is_allowed === false}
        onChange={() => handleRadioChange('direct_dealing_is_allowed', '불가능')}
         whether={directDealingRadioState}
         style={{display:'none'}}
      />
      불가능
    </RadioLabel>
  </RadioContainer></W3>
    <input 
      type="text"
      name="direct_dealing_place"
      value={state.direct_dealing_place} 
      onChange={handleChange} 
      placeholder="직거래 선호 지역을 입력해주세요."
      style={{border: '1px solid #E4E4E7', borderRadius: '5px', height:'2.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontSize: '13px', textAlign:'center'}}
      />
            <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText>
            </W2></W1>
</Detail>
            <Buttons>
               <LeftArrow />
               <Button onClick={handleSubmit} type="submit">다음 페이지</Button>
               </Buttons>
         </form>
         </Contents>
      </Wrapper>
   );  };

export default EditProductMain;


const LeftArrow = styled.div``;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width: 6rem;
  
  background-color: ${props => (props.selected ? '#ffd700' : 'transparent')};
  input {
    margin-right: 5px;
  }
`;

const W2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

const W3 = styled.div`
   display: flex;
   align-items: left;
`;

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

    ${mediaQueries(BREAKPOINT_PHONE)}{
   font-size: 15px;
   margin-left: 1rem;
   margin-right: 0.5rem;
}

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
  ${mediaQueries(BREAKPOINT_PHONE)}{
   width: 90%;
  }
`;
const W4 = styled.div`
   margin-left: 1rem;
   display: flex;
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 550;
  text-align: left;
  width: 8rem;
  margin-left: 1rem;
  ${mediaQueries(BREAKPOINT_PHONE)}{
   font-size: 10px;
   width: 4rem;
}
`;
const PhotoBox = styled.div`
    margin-left: 3rem;
`;

const PhotoArr = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
//  margin-right: 2rem;
`;
const ExplainationText = styled.div`
  font-size: 10px;
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
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;
