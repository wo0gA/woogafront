import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const MapComponent = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    test();
    const { naver } = window;
    if (!naver) return;

    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 13,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map
  });
  }, []);

  return (
    <div
      ref={mapElement}
      style={{
        width: '100%',
        height: '400px',
      }}
    ></div>
  );
};

//백 api 서버 테스트 함수
const baseURL = "https://wooga.o-r.kr/test/";
export const test = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default MapComponent;
