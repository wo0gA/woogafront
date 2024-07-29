import React, { useEffect } from 'react';
import GoogleLoginButton from '../components/Google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      console.log("< 인가 코드 >");
      console.log(code);

      // 백엔드로 인가 코드를 보내기
      axios.post("https://server.templ.es/accounts/google/callback/", { code })
        .then((response) => {
          console.log(response.data);
          navigate('/myPage');
        })
        .catch((error) => {
          console.error("인증 처리 중 오류 발생:", error);
        });
    }
  }, [code, navigate]);

  const CLIENT_ID = '564600149423-3k57skta0kr16fblavp23vp34k9tvkp0.apps.googleusercontent.com';
  const REDIRECT_URI = 'http://localhost:3000';

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile&access_type=offline`;
  };

  return (
    <>
      <GoogleLoginButton />
      <button type='button' onClick={handleLogin}>Google Login</button>
    </>
  );
};

export default TestPage;
