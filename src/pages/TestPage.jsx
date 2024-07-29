import React, { useEffect } from 'react'
import GoogleLoginButton from '../components/Google'
import KakaoLogin from '../apis/KakaoLogin'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TestPage = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(code);

    axios.post(`https://wooga.o-r.kr/accounts/kakao/callback/kakao?code=${code}`).then((response) => {
      console.log(response.data); // 토큰과 함께 오는 정보들을 출력해보자
      navigate('/myPage'); 
    });
  }
  , []);

  return (
    <>
    <GoogleLoginButton />
    <KakaoLogin />
    </>
  )
}

export default TestPage