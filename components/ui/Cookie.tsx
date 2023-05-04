import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import Cookies from 'universal-cookie';

export default function Cookie() {
  const cookies = new Cookies();
  const [display, setDisplay] = useState("d-flex");
  const setCookies = () => {
    var now = new Date();
    var oneMonthLater = new Date(now.setMonth(now.getMonth()+3));
    cookies.set('myView', 'd-none', { path: '/', expires: oneMonthLater }); // 쿠키는 3달!
    setDisplay('d-none');
  }  
  useEffect(() => {
    setDisplay(cookies.get('myView')||'d-flex');
    //alert(cookies.get('myView'));
    return () => {
      setDisplay(cookies.get('myView'));
    };
  },[cookies]);  
  return (
    <>      
      <div className={"cookies rounded-0 bg-black border text-white " + display} style={{ justifyContent: "space-between" }}>
        <p className="pe-3 m-0 align-items-center text-start" style={{ verticalAlign: "center" }}>
        This website uses cookies to ensure you get the best experience on our website.
          <Link href="/cookie" className="ms-3 me-2 mt-0 text-end d-inline float-end text-white border-bottom">
            Learn More
          </Link>
        </p>
        <Button variant="primary" className="rounded-0" onClick={setCookies} style={{ border: "none !important", width: "150px", background: "var(--primary) !important", height: "auto" }}>
          Got It!
        </Button>
      </div>
    </>
  )
}