import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainBanner1 from '../../images/mainBanner1.png'
import mainBanner2 from '../../images/mainBanner2.png'
import mainBanner3 from '../../images/mainBanner3.png'
import mainBanner4 from '../../images/mainBanner4.png'

import {
  SliderContainer,
  BodyContainer,
  SliderContent,
} from './style'

export default function SimpleSlider() {
  const list = [
    {
      content: '',
      color: '#FF5757',
      image: mainBanner1
    },
    {
      content: '',
      color: '#FFBC57',
      image: mainBanner2
    },
    {
      content: '',
      color: '#FFEE57',
      image: mainBanner3
    },
    {
      content: '',
      color: '#57FF86',
      image: mainBanner4
    },
  ]

  var settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <BodyContainer>
      <SliderContainer>
        <Slider {...settings}>
          {list.map((value, index) => (
            <div key={index}>
              <SliderContent
                $color={value.color}
                image={value.image}>
                {value.content}
              </SliderContent>
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </BodyContainer>
  );
}