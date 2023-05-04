import { Provider } from "react-redux"
import { store, persistor } from '#/store/'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Header from './Header';
import Footer from './Footer';
import Cookie from './Cookie';

export default function Layout({ children }:any) {
  const secBody = useRef<any>();
  const secFooter = useRef<any>();
  const handleResize = () => {
    secBody.current.style.minHeight = window.innerHeight-secFooter.current.clientHeight-1+'px';
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
        <Cookie />        
      </div>
    </Provider>
  )
}