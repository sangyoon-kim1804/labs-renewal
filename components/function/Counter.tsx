import React from 'react';
import { Icon } from '#/components/function/Icon';
import Col from 'react-bootstrap/Col';
//import CountUp from 'react-countup';
import { CountUp } from 'use-count-up'

export const Counter = ({ ...props }: any) => {  
  return (
    <> 
    { props.data.map((item:any, index:number)=>(
    <Col lg={props.size} key={index} className="mb-5 d-flex align-items-center fd-col">
      <span className="count w-100 d-flex align-items-center justify-content-lg-start jusfify-content-md-center">
        <Icon iconName={item.icon} className="me-3" size="20" /> 
        <CountUp isCounting end={parseInt(item.amount)} duration={1} formatter={(value:any) => parseInt(value).toLocaleString('ko-KR')} />        
      </span>
      <small className="w-100 d-flex justify-content-lg-start jusfify-content-md-center"><b>{item.caption}</b></small>
    </Col>
    )) }
    </>
  )
}
