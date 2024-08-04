import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProfileSettingMain = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('access');

  let reader = new FileReader();

  const handleProfileImgChange = (e) => {
    const file = e.target.files[0];
    console.log(file); //잘 첨부됐는지 확인용
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfileImg(reader.result);
        const previewImgUrl = reader.result;
        console.log(previewImgUrl); //잘 첨부됐는지 확인용
      };
    };
  };



  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    console.log(nickname);//잘 입력되는지 확인용
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', nickname);
    formData.append('profile', new Blob([profileImg], { type: "multipart/form-data" }));

    try {
      const response = await axios.put('https://server.templ.es/accounts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDuplicateCheck = () => {
    setMessage('사용 가능한 닉네임입니다.');
  };

  const triggerFileInput = () => {
    document.getElementById('file-input').click();
  };

  return (
    <Wrapper>
      <Container>
        <Left>
          <Text>
            <span>프로필 등록</span>
            빌리고에서 사용할 정보를 입력해주세요.
            {message && <Message>{message}</Message>}
          </Text>
        </Left>
        <Right>
          <RightContainer>
            <ProfileImg>
              <ImgLeft>
                프로필 사진
              </ImgLeft>
              <ImgRight>
                <FileInputWrapper>
                  <FileInput type="file" id="file-input" accept="image/*" onChange={(e) => handleProfileImgChange(e)} />
                  <FileInputLabel onClick={triggerFileInput}>
                    {profileImg ? (
                      <ProfileImage src={profileImg} alt="Profile Preview" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 112 112" fill="none">
                        <g filter="url(#filter0_d_574_5895)">
                          <circle cx="56" cy="56" r="40" fill="#D9D9D9" />
                          <circle cx="55.9992" cy="45.5998" r="12.8" fill="#A1A1AA" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.5983 78.2601C30.3008 69.4471 42.0678 63.1997 55.8399 63.1997C69.9327 63.1997 81.926 69.7415 86.3984 78.88C79.4195 88.322 68.4982 94.3999 56.2229 94.3999C43.681 94.3999 32.5525 88.0551 25.5983 78.2601Z" fill="#A1A1AA" />
                        </g>
                        <defs>
                          <filter id="filter0_d_574_5895" x="0" y="0" width="112" height="112" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_574_5895" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_574_5895" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    )}
                  </FileInputLabel>
                </FileInputWrapper>
              </ImgRight>
            </ProfileImg>
            <Nickname>
              <NicknameLeft>
                닉네임
              </NicknameLeft>
              <NicknameRight>
                <Input type="text" placeholder="닉네임을 입력해주세요." value={nickname} onChange={handleNicknameChange} />
                <DuplicateCheckButton onClick={handleDuplicateCheck}>중복 확인</DuplicateCheckButton>
              </NicknameRight>
            </Nickname>
            <SignUpBtn onClick={handleSubmit}>
              회원가입 완료
            </SignUpBtn>
          </RightContainer>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default ProfileSettingMain;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 80vh;
  box-sizing: border-box;
  padding: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fffee4;
`;

const Left = styled.div`
  display: flex;
  background: linear-gradient(165deg, #FCFF56 -1.76%, #FEFFDD 104.3%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  height: 60%;
  color: #000000;
  font-size: 12px;
  text-align: left;

  span {
    text-align: left;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const Message = styled.div`
  color: green;
  font-size: 14px;
  margin-top: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 13px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 80%;
`;

const ProfileImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  cursor: pointer;
`;

const ImgLeft = styled.div`
  width: 30%;
  text-align: left;
`;

const ImgRight = styled.div`
  width: 70%;
`;

const Nickname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  margin-top: 20px;
`;

const NicknameLeft = styled.div`
  width: 30%;
  text-align: left;
  padding-right: 10px;
`;

const NicknameRight = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 2px;
  font-size: 10px;
  &:focus {
    outline: none;
  }
`;

const DuplicateCheckButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
  font-size: 10px;
  color: #fff;
  background-color: #717171;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #4f4f4f;
  }
`;

const SignUpBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12%;
  background-color: #ffff5a;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  &:hover {
    background-color: #e0e04b;
  }
  &:active {
    background-color: #b0b065;
  }
`;

const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;


const FileInputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;  
`;

