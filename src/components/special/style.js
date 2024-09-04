import styled from 'styled-components';
import { mediaQueries, BREAKPOINT_PHONE } from '../../mediaquery/mediaQuery';

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

    // 미디어쿼리
    ${mediaQueries(BREAKPOINT_PHONE)} {
        
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
    background-position: center;

    ${mediaQueries(BREAKPOINT_PHONE)} {
        font-size: 20px;
        line-height : 20px;
        background-size: cover;
        height: 200px;
    }
`