import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '#/components/function/Icon';
import 'bootstrap/dist/css/bootstrap.min.css';
import { header_menus } from '#/demo/data';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <nav className="" style={{ zIndex: "2" }}>
        <img src="/images/logo-renual.svg" alt="logo" className="logo" style={{ zIndex: "3" }} />
        <ul className={open?"open":""}>
          {header_menus.map((item:any, index:number)=>(
          <li key={index}>
            <Link className={item.path==router.pathname?'active':''} target={item.target} href={item.path} onClick={()=>setOpen(false)}>
              {item.title}
            </Link>
          </li>
          ))}
        </ul>
        <Icon iconName={open?"XLg":"List"} onClick={menuOpen} size="24" className="d-block d-lg-none position-relative" style={{ zIndex: "3", cursor: "pointer", top: "14px" }} />
      </nav>
    </>
  )
}
