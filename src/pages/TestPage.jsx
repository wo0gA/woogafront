import React, { useEffect } from 'react';
import GoogleLoginButton from '../apis/GoogleLoginButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLoginButton from '../apis/KakaoLoginButton';

const TestPage = () => {
  useEffect(() => {
    const initializeMap = () => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new window.kakao.maps.Map(container, options);
    };

    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f9bc2694b79adc41830c94462233a59b&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(initializeMap);
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <GoogleLoginButton />
      <KakaoLoginButton />
      <Map id="map" />
    </>
  );
};

export default TestPage;

const Map = styled.div`
  width: 500px; 
  height: 400px;
`;
