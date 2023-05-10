import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '#/components/function/Icon';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { header_menus } from '#/demo/data';
import {useRouter} from 'next/router';
import { slideStatus, selectSlide } from '#/store/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const slide = useSelector(selectSlide);
  const [open, setOpen] = useState(false);
  const menuToggle = () => {
    dispatch(slideStatus(!slide));
    setOpen(!open);
    document.body.classList.remove('open');
    if (!open) {
      document.body.classList.add('open');      
    }
  }
  const handleResize = () => {
    if (window.innerWidth < 991) {
      dispatch(slideStatus(false));
      setOpen(false);
    } else {
      dispatch(slideStatus(true));
      setOpen(true);
    }
  }    
  const goHome = () => {
    router.push('/');
    slide?menuToggle():null;
  }
  useEffect(()=>{
    handleResize();
    return () => {
      window.addEventListener('resize', handleResize);
    }
  },[]);  
  return (
    <>
      <nav className="" style={{ zIndex: "2" }}>
        <div className='clickable' onClick={()=>goHome()} style={{ zIndex: "3" }}>
          <Image src={`/labs-renewal/images/logo-renual.svg`} className="logo" style={{ cursor: "pointer" }} layout="responsive" alt='logo' width={0} height={0} />
        </div>
        <ul style={{ zIndex: '2' }} className={"p-0 " + (slide?"open":"")}>
          {header_menus.map((item:any, index:number)=>(
          <li key={index}>
            <Link className={item.path.split('/')[1]==router.pathname.split('/')[1] && item.target=="_self"?'active':''} target={item.target} href={item.path} onClick={menuToggle}>
              {item.title}
            </Link>
          </li>
          ))}
        </ul>
        <Icon iconName={slide?"XLg":"List"} onClick={menuToggle} size="24" className="d-block d-lg-none position-relative" style={{ zIndex: "3", cursor: "pointer", top: "14px" }} />
      </nav>
    </>
  )
}
