import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import Typography, { TypographyProps } from '@mui/material/Typography';

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
};

export const Slide = ({ ...props }: any) => { 
  const [loading, setLoading] = useState(false);
  const slider = useRef<any>();
  const handleScroll = () => {
    let wy = window.pageYOffset; // 스크롤 포지션
    let wh = window.innerHeight; // 윈도우 높이
    let cy = slider.current.offsetTop;
    //let ch = slider.current.offsetHeight;
    if(wy+wh > cy) {
      setTimeout(()=>{
        setLoading(true);
      },1000);
    }
  }   
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);   
  return (
    <Slider {...SliderSetting} className="mb-5">
    {props.data.map((item:any, index:number)=>(
      <div key={index} className="px-2 mb-3 pb-2" ref={slider}>
        {
          loading ? (
            <>
              <Image src={`/labs-renewal/images/${item.image}`} className="w-100" width={0} height={0} alt="slide" layout="responsive" quality={100}/>
              <h3 className="text-g09 pt-3">{item.title}</h3>
              <h3 className="text-g06 pt-2">{item.desc}</h3>
            </>
            )  : (
            <>
              <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '140%' }} />
              </Skeleton>
              <Typography component="div" variant={'h4'} className="w-50 mt-2">
                <Skeleton  />
              </Typography>
              <Typography component="div" variant={'h4'} className="w-100">
                <Skeleton  />
              </Typography>
            </>
            ) 
          }
      </div>
    ))}
    </Slider>
  )
}
