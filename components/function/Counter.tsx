import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '#/components/function/Icon';
import Col from 'react-bootstrap/Col';
import { CountUp } from 'use-count-up';
import Skeleton from '@mui/material/Skeleton';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { scroll } from '#/components/function/scroll';


export const Counter = ({ ...props }: any) => {  
  const counter = useRef<any>();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleScroll = () => {
    let wy = window.pageYOffset; // 스크롤 포지션
    let wh = window.innerHeight; // 윈도우 높이
    let cy = counter.current.offsetTop;
    let ch = counter.current.offsetHeight;
    //setCount(0);
    //setLoading(true);
    if(wy+wh > cy && wy < cy+ch) {
      setTimeout(() => {
        setCount(parseInt(props.amount));      
        setLoading(false);          
      },500);
    }
  }
  const MyComponent = () => <CountUp isCounting start={0} end={count} easing="linear" duration={1} formatter={(value:any) => parseInt(value).toLocaleString('ko-KR')} />
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    /*const scrollStatus = scroll(counter.current.offsetTop);
    console.log(scrollStatus);
    console.log(scrollStatus);
    if (scrollStatus) {
      //console.log('휘칫')
    };*/
  }, []);    
  return (
    <> 
      <Col lg={props.size} className="mb-5 d-flex align-items-center fd-col" ref={counter} >
        {
          loading ? (
            <>
            <div className="w-100">
              <Typography component="div" variant={'h1'} className="w-50">
                <Skeleton  />
              </Typography>
              <Typography component="div" >
                <Skeleton  />
              </Typography>
            </div>
            </>
          ) : (
            <>
            <span className="count w-100 d-flex align-items-center justify-content-lg-start jusfify-content-md-center" >
              <Icon iconName={props.icon} className="me-3" size="20" />
              <MyComponent />
            </span>
            <small className="w-100 d-flex justify-content-lg-start jusfify-content-md-center"><b>{props.caption}</b></small>
            </>
          )
        }        
      </Col>
    </>
  )
}
