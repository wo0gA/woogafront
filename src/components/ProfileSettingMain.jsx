import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProfileSettingMain = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [nickname, setNickname] = useState('');
  const token = localStorage.getItem('access');

  const handleProfileImgChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSignUp = async () => {
    const formData = new FormData();
    formData.append('username', nickname);
    formData.append('profile', profileImg);

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

  return (
    <Wrapper>
        <Container>
            <Left>
                <h2>프로필 등록</h2>
                빌리고에서 사용할 정보를 입력해주세요.
            </Left>
            <Right>
                <RightContainer>
                    <ProfileImg>
                        <ImgLeft>
                            프로필 사진
                        </ImgLeft>
                        <ImgRight>
                            <Input type="file" onChange={handleProfileImgChange} />
                        </ImgRight>
                    </ProfileImg>
                    <Nickname>
                        <NicknameLeft>
                            닉네임
                        </NicknameLeft>
                        <NicknameRight>
                            <Input type="text" placeholder="닉네임을 입력해주세요." value={nickname} onChange={handleNicknameChange} />
                        </NicknameRight>
                    </Nickname>
                    <SignUpBtn onClick={handleSignUp}>
                        회원가입 완료
                    </SignUpBtn>
                </RightContainer>
            </Right>
        </Container>
    </Wrapper>
  )
}

export default ProfileSettingMain

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    aspect-ratio: 7 / 4;
    box-sizing: border-box;
    background-color: #fffee4;
    margin-top: 3rem;
`;

const Left = styled.div`
    display: flex;
    background-color: #cbcbcb;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`;
const ImgLeft = styled.div`
`;
const ImgRight = styled.div`
`;

const Nickname = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
`;
const NicknameLeft = styled.div`
`;
const NicknameRight = styled.div`
`;

const SignUpBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: #ffff5a;
    cursor: pointer;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    font-size: 1rem;
    &:focus {
        outline: none;
    }
`;
