import React, { useState } from 'react'
import CategoryComponent from './CategoryComponent'
import styled from 'styled-components'
import cam1 from '../images/camera button.png'
import cam2 from '../images/cams.png'
import bar2 from '../images/step bar3.png';
import { useNavigate } from 'react-router-dom'

const RegistrationDetailMain2 = ( { onSearch } ) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   const userConfirmed = window.confirm("게시물을 업로드 하시겠습니까?");
/*      const uploadedImage = new UploadedImage();
    if(userConfirmed) {
      const formData = new FormData();
      if(uploadedImage != null){
      formData.append("photos", uploadedImage);
      }
      formData.append("name", );
      formData.append("category", {selectedItem})
      formData.append("goodscondition") //수정
      formData.append("modelname") //수정
      formData.append("")
*/
      //00000수정api(formData);
      alert("등록 완료");
    }
  

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSearchClick = () => {
      onSearch(inputValue);
    };
  return (
    <Wrapper>
    <Banner>대여 가격</Banner>
    <Contents>
        <ProcessBar><img src={bar2}/></ProcessBar>
    <Detail>
    <W1>
    <Title>상세 설명</Title>
    <InputText><input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="모델명을 입력해주세요."
          />
    </InputText>
    <PhotoBox>
    <PhotoItem1 htmlFor="imageInput" ><img src={cam1} width='150px'/></PhotoItem1>
    <PhotoArr>
    <PhotoItem2><img src={cam2} height='140px' alt="Camera Icon" /></PhotoItem2>
    </PhotoArr>
    <ExplainationText>상품 이미지는 최대 6개까지 등록 가능합니다.<br/>운동물품 정면, 후면, 측면 사진 업로드를 권장합니다.</ExplainationText>
    </PhotoBox>
    </W1>
    <W1>
    <Title>태그</Title> <InputText><input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="상품명을 입력해주세요."
          /></InputText>
    </W1>
    <W1><Title>배송비</Title>
    </W1>
    <W1>
    <Title>직거래</Title> 
    </W1>
    <W1>
    <ExplainationText>모델명 항목은 선택 입력사항입니다.</ExplainationText>
    </W1>
    </Detail>
    <Buttons><LeftArrow/><Button><button type='submit'>등록하러 가기</button></Button>
    </Buttons>
    </Contents>
    </Wrapper>
  )

}
export default RegistrationDetailMain2

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
    width: 80%;
    height: 2rem;
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
const PhotoItem1 = styled.div``;
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