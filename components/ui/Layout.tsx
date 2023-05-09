import { Provider } from "react-redux"
import { store, persistor } from '#/store/'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }:any) {
  const secBody = useRef<any>();
  const secFooter = useRef<any>();
  const handleResize = () => {
    let calc_margin:any = 0;
    let win_width:any = window.innerWidth;
    switch (win_width) {
      case window.innerWidth < 991:
        calc_margin = 20;
        break;      
      case win_width < 1024 :
        calc_margin = 50;
        break;
      default:
        calc_margin = 1;
    }
    secBody.current.style.minHeight = window.innerHeight-secFooter.current.clientHeight-calc_margin+'px';
  }  
  useEffect(()=>{
    handleResize();
    return () => {
      window.addEventListener('resize', handleResize);
    }       
  },[]);
  return (
    <Provider store={store}>
      <Header />
      <main ref={secBody}>
        {React.cloneElement(children)}
      </main>
      <div ref={secFooter} className="position-relative bg-black" >
        <Footer />
      </div>
    </Provider>
  )
}