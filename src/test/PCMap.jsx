import styled from "styled-components";
import MypageMap from "./MypageMap";
import banner from '../images/banner.png';

const Mypage = () => {
  return (
    <>
      <Header></Header>
      <Main imgUrl={banner}>
        <div className="kakaoMap middle2">
          <div className="topic common">내 주변 PC방 찾기</div>
          <div className="common">
            <MypageMap />
          </div>
        </div>
      </Main>
    </>
  );
};

const Header = styled.div`
  height: 50px;
`;
const Main = styled.div`
  background-size: 100%;
  background-image:
   ${(props) => `url(${props.imgUrl})`};
  min-height: 100vh;
  padding: 15% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .middle2 {
    width: 80%;
    margin-bottom: 80px;
    text-align: basis;
    // width: 80%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 8px 32px #6869d0;
    backdrop-filter: blur(2.5px);
    border-radius: 10px;

    text-transform: uppercase;
    letter-spacing: 0.4rem;
    padding: 20px;
  }
`;

export default Mypage;