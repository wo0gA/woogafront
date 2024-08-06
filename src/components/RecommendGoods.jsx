import React, { useEffect } from 'react'
import styled from 'styled-components'
import footsalImage from '../images/footsal.png'
import { getFourRecommendProducts } from '../apis/product';
import { useNavigate } from 'react-router-dom';

const RecommendGoods = () => {
  const [recommendGoods, setRecommendGoods] = React.useState([]);

  const navigate = useNavigate();
  const handleItemClick = (productID) => {
    // //새로고침되면서 열리도록 href 사용
    window.location.href = `/goodsDetail/${productID}`;
};

  useEffect(() => {
    getFourRecommendProducts().then((data) => {
      setRecommendGoods(data);
    });
  }, []);

  return (
    <Wrapper>
        <RecommendGoodsTitle>
            다른 운동물품들은 어때요?
        </RecommendGoodsTitle>
        {/* RecommendGoodsList */}
        <RecommendGoodsList>
            {recommendGoods.map((item) => (
              <RecommendGoodsCard key={item.id} onClick={() => handleItemClick(item.id)}>
                <RecommendGoodsImage src={item.thumbnails && item.thumbnails.length > 0 && item.thumbnails[0].thumbnail ? item.thumbnails[0].thumbnail : "#"} alt={item.name}></RecommendGoodsImage> {/* @@@이미지 */}
                <RecommendGoodsName>{item.name}</RecommendGoodsName>
              </RecommendGoodsCard>
            ))}
        </RecommendGoodsList>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: 20px;

  box-sizing: border-box;
`;

const RecommendGoodsTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const RecommendGoodsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    box-sizing: border-box;
`;

const RecommendGoodsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    width: 20%;
    cursor: pointer;
    box-sizing: border-box;
`;
const RecommendGoodsImage = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover; //비율 구기지 않고 그냥 프레임에 맞게 자르게!!

`;
const RecommendGoodsName = styled.div`
    width: 100%;
    text-align: left;
    font-size: 14px;
    margin-top: 5px;
`;

export default RecommendGoods