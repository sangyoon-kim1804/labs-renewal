import React, { useEffect, useRef, useState } from 'react';
import { partners } from '#/demo/data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';

export const Partner = ({ ...props }: any) => {
  const partner = useRef<any>();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleScroll = () => {
    let wy = window.pageYOffset; // 스크롤 포지션
    let wh = window.innerHeight; // 윈도우 높이
    let cy = partner.current.offsetTop;
    let ch = partner.current.offsetHeight;
    //setLoading(true);
    if (wy + wh > cy) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Row className="mt-3" ref={partner} >
      {
        partners && partners.length > 0 ? (
          partners.map((item: any, index: number) => (
          <Col sm={4} xs={6} className={"px-0 py-4 py-sm-4 py-md-5 px-sm-4 py-lg-5 px-lg-5 " + (index == 8 ? 'offset-3 offset-sm-0' : '')} key={index}>
            <Link href={item.path} target="_blank">
              {
                loading ? (
                  <>
                    <Skeleton variant="rectangular" width="100%">
                      <div style={{ height: "40px" }}></div>
                    </Skeleton>
                  </>
                ) : (
                  <Image src={`/labs-renewal/images/${item.image}`} className="w-100" layout="responsive" alt={item.title} width={0} height={0} />
                )
              }
            </Link>
          </Col>
        ))
        )
        :
        (
          <>
            <Col sm={4} xs={6} className={"px-0 py-4 py-sm-4 py-md-5 px-sm-4 py-lg-5 px-lg-5"}>
              <Skeleton variant="rectangular" width="100%">
                <div style={{ height: "36px" }}></div>
              </Skeleton>
            </Col>
          </>
        )
      }
      </Row>
    </>
  )
}
