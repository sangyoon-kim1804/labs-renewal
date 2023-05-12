import React, { useState, useEffect } from 'react';

export const scroll = (position: number) => {  
  const handleScroll = () => {    
    console.log('함수실행');
    let wy = window.pageYOffset; // 스크롤 포지션
    let wh = window.innerHeight; // 윈도우 높이
    if(wy+wh > position) {
      //console.log('시작');
      return 'play';
    } else {
      //console.log('멈춰');
      return 'stop';      
    }
  }   
  window.addEventListener('scroll', handleScroll);
}