import { Provider } from "react-redux"
import { store, persistor } from '#/store/'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }:any) {
  const secBody = useRef<any>();
  const secFooter = useRef<any>();
  const [margin, setMargin] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const handleResize = () => {    
    if (window.innerWidth < 991) {
      setMargin(3);
    } else if (window.innerWidth > 990 && window.innerWidth < 1024) {
      setMargin(1);
    } else {
      setMargin(5);
    }
    setMinHeight(window.innerHeight-secFooter.current.clientHeight-margin);
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
      <main style={{ minHeight: minHeight }}>        
        {React.cloneElement(children)}
      </main>
      <div ref={secFooter} className="position-relative bg-black" >
        <Footer />
      </div>
    </Provider>
  )
}