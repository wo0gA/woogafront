import styled from 'styled-components';
// import arrow from './images/right.png'
import mainBanner1 from '../../images/mainBanner1.png'
import mainBanner2 from '../../images/mainBanner2.png'
import mainBanner3 from '../../images/mainBanner3.png'
import mainBanner4 from '../../images/mainBanner4.png'

export const BodyContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    margin-bottom: 20px;
    /* height: 25rem; */
`

export const SliderContainer = styled.div`
    margin: 30px 0px;
    .slick-prev:before,
    .slick-next:before {
        display: none;	
    }
    .slick-list{ 
        width: 6000px;
    }   
`

export const SliderContent = styled.div`
    height: 500px;
    color: white;
    font-size: 100px;
    line-height : 200px;
    text-align : center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    width: 100vw;
    margin: auto;
`