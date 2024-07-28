import React, { useEffect, useState } from 'react';

const KakaoLoginSuccess = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // 로컬 스토리지에서 이름과 이메일을 가져옴
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');

    // 상태 업데이트
    setName(storedName);
    setEmail(storedEmail);
  }, []);

  return (
    <div>
      <h1>로그인 성공</h1>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
    </div>
  );
}

export default KakaoLoginSuccess;