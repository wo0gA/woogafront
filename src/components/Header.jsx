import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
        <LeftHeader>
            logo
        </LeftHeader>
        <RightHeader>   
            <ProfileButton>
                <ProfileIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5ZM9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0ZM5 12C3.67392 12 2.40215 12.5268 1.46447 13.4645C0.526784 14.4021 0 15.6739 0 17V19C0 19.5523 0.447715 20 1 20C1.55228 20 2 19.5523 2 19V17C2 16.2043 2.31607 15.4413 2.87868 14.8787C3.44129 14.3161 4.20435 14 5 14H13C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17V19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19V17C18 15.6739 17.4732 14.4021 16.5355 13.4645C15.5979 12.5268 14.3261 12 13 12H5Z" fill="black"/>
                    </svg>
                </ProfileIcon>
                <ProfileText>
                    채령님
                </ProfileText>
            </ProfileButton>
            <MypageButton>
                마이페이지
            </MypageButton>
            <LogoutButton>
                로그아웃
            </LogoutButton>
            {/* <LoginButton>
                로그인
            </LoginButton> */}
        </RightHeader>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 60px;

    /* border: 1px solid black; */
`;

const LeftHeader = styled.div`
    
`;
const RightHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * {
        margin-left: 25px; /* 모든 자식 요소에 left-margin 적용 */
    }
`;

const ProfileButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const ProfileIcon = styled.div`

`;
const ProfileText = styled.div`
    border-bottom: 1px solid black;
    margin-left: 5px;
`;
const MypageButton = styled.div`
        
`;
const LogoutButton = styled.div`
        
`;
// const LoginButton = styled.div`
        
// `;
