import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '#/components/function/Icon';
import Col from 'react-bootstrap/Col';
import { CountUp } from 'use-count-up';
import { useCountUp } from "use-count-up";

export const Counter = ({ ...props }: any) => {  
  const counter = useRef<any>();
  const [count, setCount] = useState(0);
  const handleScroll = () => {
    let wy = window.pageYOffset; // 스크롤 포지션
    let wh = window.innerHeight; // 윈도우 높이
    let cy = counter.current.offsetTop;
    let ch = counter.current.offsetHeight;
    setCount(0);
    if(wy+wh > cy && wy < cy+ch) {
      setCount(parseInt(props.amount));
    }
  }   
  const MyComponent = () => <CountUp isCounting start={0} end={count} easing="linear" duration={1} formatter={(value:any) => parseInt(value).toLocaleString('ko-KR')} />
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTimeout(function(){
      handleScroll();
    },100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);    
  return (
    <> 
      <Col lg={props.size} className="mb-5 d-flex align-items-center fd-col">
        <span className="count w-100 d-flex align-items-center justify-content-lg-start jusfify-content-md-center" ref={counter} >
          <Icon iconName={props.icon} className="me-3" size="20" />
          <MyComponent />
        </span>
        <small className="w-100 d-flex justify-content-lg-start jusfify-content-md-center"><b>{props.caption}</b></small>
      </Col>
    </>
  )
}
