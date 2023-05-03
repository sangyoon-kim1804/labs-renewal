import React from 'react';
import Slider from "react-slick";

export const Slide = ({ ...props }: any) => {  
  const SliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ]
  }
  return (
    <Slider {...SliderSetting} className="mb-5">
    {props.data.map((item:any, index:number)=>(
      <div key={index} className="px-2 mb-3 pb-2">
        <img src={'/images/'+item.image} className="w-100" />
        <h3 className="text-g09 pt-3">{item.title}</h3>
        <h3 className="text-g06 pt-2">{item.desc}</h3>
      </div>
    ))}
    </Slider>
  )
}
