import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
 
const KakaoRedirect = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ name: '', email: '' });


  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');

    axios.get(`/accounts/kakao/callback/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(() => {
      return axios.post(`/accounts/kakao/callback/`);
    })
    .then((r) => {
      console.log(r.data);
      // 토큰 받아서 localStorage에 저장
      localStorage.setItem('name', r.data.user_name);
      localStorage.setItem('email', r.data.user_email);
      // state에 저장
      setUserData({
      name: r.data.user_name,
      email: r.data.user_email
      });
      // 로그인 성공 페이지로 이동
      navigate('/loginSuccess');
      })
      .catch((error) => {
      console.error("에러 발생", error);
      });
    }, [navigate]);

return (
  <div>
    <p>로그인 중입니다.</p>
  </div>
);
}

export default KakaoRedirect;
