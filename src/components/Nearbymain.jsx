import React, { useEffect } from 'react';
import styled from 'styled-components';

const Nearbymain = () => {

    let map = null;  // 전역 변수로 map을 선언
    let curLat = 0;
    let curLon = 0;

    // 지도에 마커와 인포윈도우를 표시하는 함수
    function displayMarker(locPosition, message) {
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({  
            map: map, 
            position: locPosition
        }); 
        
        const iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, marker);
        
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);      
    }  

    // 지정된 위치에 마커를 표시하는 함수
    function addMarkers() {
        const positions = [
            { title: '페어리하우스', latlng: new window.kakao.maps.LatLng(37.5052112, 126.9666879) }
        ];

        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

        for (let i = 0; i < positions.length; i++) {
            const imageSize = new window.kakao.maps.Size(24, 35); 
            const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
            new window.kakao.maps.Marker({
                map: map, 
                position: positions[i].latlng,
                title: positions[i].title, 
                image: markerImage 
            });
        }
    }

    useEffect(() => {
        console.log("[[ curLat: ", curLat, "curLon: ", curLon);

        //지도를 초기화
        const initializeMap = () => {
            // 현 위치의 위도와 경도
            let lat;
            let lon;

            // HTML5의 geolocation으로 사용할 수 있으면 
            if (navigator.geolocation) {
                console.log("!!!geolocation을 사용할수 있어요!!!");

                // GeoLocation로 현 위치 얻어오기!!
                navigator.geolocation.getCurrentPosition(function(position) {
                    
                    lat = position.coords.latitude; // 위도
                    lon = position.coords.longitude; // 경도
                    console.log("< lat: ", lat, "lon: >", lon);
                    
                    const locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
                        message = '<div style="padding:5px;">현 위치</div>'; // 인포윈도우에 표시될 내용
                    
                    // 마커와 인포윈도우를 표시합니다
                    displayMarker(locPosition, message);
                        
                });
            // geolocation을사사용할 수 없으면 -> 그냥 기본 위치만 보여주기
            } else { 
                console.log("geolocation을 사용할수 없어요..");
                const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
                    message = 'geolocation을 사용할수 없어요..'
                    
                displayMarker(locPosition, message);
            }
            
            const container = document.getElementById('map');
            const options = {
                //기본 위치로 현 위치를 지정
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),  
                level: 3,
            };
            map = new window.kakao.maps.Map(container, options);  // map을 전역 변수에 할당

            // 지정된 위치에 마커 추가
            addMarkers();
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
        <Wrapper>
            <Banner><BannerTitle>주변 운동공간</BannerTitle></Banner>
            <NotBanner>
                <MapContainer>
                    <Map id="map"/>
                </MapContainer>
                <PlaceDetailContainer>
                    <Title>상세 설명</Title>
                    <PlaceDetail>
                        <PlaceDetailImage>
                            PlaceDetailImage
                        </PlaceDetailImage>
                        <PlaceDetailText>
                            PlaceDetailText
                        </PlaceDetailText>
                    </PlaceDetail>
                </PlaceDetailContainer>
                <PlaceRecommendContainer>
                    <Title>비슷한 장소를 추천해요</Title>
                    <PlaceRecommend>
                        <PlaceCard>
                            <PlaceImage>PlaceImage</PlaceImage>
                            <PlaceText>PlaceText</PlaceText>
                        </PlaceCard>
                        <PlaceCard>
                            <PlaceImage>PlaceImage</PlaceImage>
                            <PlaceText>PlaceText</PlaceText>
                        </PlaceCard>
                    </PlaceRecommend>
                </PlaceRecommendContainer>
            </NotBanner>
        </Wrapper>
    )
}

export default Nearbymain

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Banner = styled.div`
    height: 6rem;
    width: 100%;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 1.7rem;
`;

const BannerTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 25px;
    font-weight: 470;
    margin-left: 4rem;
`;

const NotBanner = styled.div`
    width: 85%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    & > * {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`;

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Map = styled.div`
    width: 100%;
    aspect-ratio: 5 / 3;
`;

const Title = styled.div`
    text-align: left;
    width: 100%;
    font-size: 22px;
    font-weight: 550;
    margin-bottom: 10px;
`;

const PlaceDetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const PlaceDetail = styled.div`
    width: 100%;
    height: 100%;
    display: flex;  
    flex-direction: row;

    border: 1px solid black;
`;
const PlaceDetailImage = styled.div`
    width: 20%;
    aspect-ratio: 4 / 3;
    border: 1px solid black;
`;
const PlaceDetailText = styled.div`
    width: 80%;
    height: 90%;

`;

const PlaceRecommendContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const PlaceRecommend = styled.div`
    width: 100%;
    height: 100%;
    display: flex;  
    flex-direction: row;
    border: 1px solid black;
`;
const PlaceCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    aspect-ratio: 3 / 1;
    border: 1px solid black;
`;
const PlaceImage = styled.div`
    height: 100%;
    width: 50%;
    border: 1px solid black;
`;
const PlaceText = styled.div`
    height: 100%;
    width: 50%;
    border: 1px solid black;
`;
