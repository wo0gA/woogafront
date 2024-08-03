import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logox2.png';
import { logoClick } from '../utils/simple';
import { useNavigate } from 'react-router-dom'; 
import { searchProducts, logout } from '../test/test';

const Header = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState('/'); // 현재 활성화된 nav의 경로를 저장
    const [searchValue, setSearchValue] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const username = localStorage.getItem('username');
    const [username] = useState(localStorage.getItem('username'));

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearchClick = () => {
        console.log(`Search value: ${searchValue}`);
        searchProducts(searchValue); //나중에는 지울듯?(다음 페이지에서 찾게 해서)
        if (searchValue.trim()) { // 검색어가 비어있지 않다면
            navigate(`/rentalSearch?search=${encodeURIComponent(searchValue)}`); //검색어를 query로 넘겨주면서 rentalSearch 페이지로 이동
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const handleLogoClick = () => {
        logoClick(navigate);
    };

    const handleNavClick = (path) => () => {
        setActiveNav(path); // nav 클릭 시 활성화된 nav 경로를 업데이트
        navigate(path);
    };

    ////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        // 로그인 여부 확인
        if (username) {
        setIsLoggedIn(true);
        }
    }, [username]);

    return (
        <Wrapper>
            <FirstRow>
                <LeftHeader src={logo} alt="logo" onClick={handleLogoClick}></LeftHeader>
                <RightHeader>   
                        {isLoggedIn ? (
                        <ProfileButton onClick={handleNavClick('/mypage')}>
                                <ProfileIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5ZM9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0ZM5 12C3.67392 12 2.40215 12.5268 1.46447 13.4645C0.526784 14.4021 0 15.6739 0 17V19C0 19.5523 0.447715 20 1 20C1.55228 20 2 19.5523 2 19V17C2 16.2043 2.31607 15.4413 2.87868 14.8787C3.44129 14.3161 4.20435 14 5 14H13C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17V19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19V17C18 15.6739 17.4732 14.4021 16.5355 13.4645C15.5979 12.5268 14.3261 12 13 12H5Z" fill="black"/>
                                    </svg>
                                </ProfileIcon>
                                <ProfileText>
                                {username}님
                                </ProfileText>
                            </ProfileButton>
                        ) : (
                            <ProfileText>
                            로그인하세요
                            </ProfileText>
                        )}
                    {isLoggedIn ? (
                    <LogoutButton onClick={logout}>로그아웃</LogoutButton>
                    ) : (
                    <LoginButton onClick={handleNavClick('/login')}>로그인</LoginButton>
                    )}
                </RightHeader>
            </FirstRow>
            <SecondRow>
                <Navigation>
                    <Nav onClick={handleNavClick('/rentalSearch')} active={activeNav === '/rentalSearch'}>물품 대여</Nav>
                    <Nav onClick={handleNavClick('/register')} active={activeNav === '/register'}>물품 등록</Nav>
                    <Nav onClick={handleNavClick('/health')} active={activeNav === '/health'}>건강 AtoZ</Nav>
                    <Nav onClick={handleNavClick('/goodsDetail')} active={activeNav === '/nearby'}>어디GO</Nav>
                    <Nav onClick={handleNavClick('/chatting')} active={activeNav === '/chatting'}>채팅</Nav>
                </Navigation>
                <Search>
                    <SearchInput type="text" placeholder="찾는 운동용품 또는 운동종목이 있나요?" value={searchValue} onChange={handleSearchChange} onKeyPress={handleKeyPress}/>
                        <HeaderSearchIcon onClick={handleSearchClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black"/>
                            </svg>
                        </HeaderSearchIcon>
                </Search>
            </SecondRow>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    & > * {
        margin-top: 10px;
    }
`;

const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;      

const SecondRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
`;

const LeftHeader = styled.img`
    width: 160px;
    height: auto;
    cursor: pointer;
`;

const RightHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * {
        margin-left: 25px;
    }
`;

const ProfileButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ProfileIcon = styled.div`
`;

const ProfileText = styled.div`
    border-bottom: 1px solid black;
    margin-left: 5px;
`;

const LogoutButton = styled.div`
    cursor: pointer;
    &:hover {
        color: #8f8f8f;
    }
    &:active {
        color: #595959;
    }
`;

const LoginButton = styled.div`
    cursor: pointer;
    &:hover {
        color: #8f8f8f;
    }
    &:active {
        color: #595959;
    }
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    height: 100%;
    font-size: 20px;
    border-bottom: 1px solid black;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    &:hover {
        color: #8f8f8f;
    }
    &:active {
        color: #000000;
    }
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid black;
    border-radius: 40px;
`;
const SearchInput = styled.input`
    background-color: transparent;
    border: none;
    width: 90%;
    outline: none;
`;

const HeaderSearchIcon = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;