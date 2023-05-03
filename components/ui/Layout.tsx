import React, { useState, useEffect, useRef, useCallback } from 'react'
import Header from './Header';
import Footer from './Footer';
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
    <>
      <Header />
      <main ref={secBody}>
        {React.cloneElement(children)}
      </main>
      <div ref={secFooter} >
      <Footer />
      </div>
    </>
  )
}