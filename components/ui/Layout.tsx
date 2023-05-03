import React, { useState, useEffect, useRef, useCallback } from 'react'
import Header from './Header';
import Footer from './Footer';
export default function Layout({ children }:any) {
  const secBody = useRef<any>();
  const secFooter = useRef<any>();    
  useEffect(()=>{
    setTimeout(function(){
      secBody.current.style.minHeight = window.innerHeight-secFooter.current.clientHeight+'px';
    },100);    
  },[])
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