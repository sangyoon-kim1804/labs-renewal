import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { footer_menus } from '#/demo/data';
import { Icon } from '#/components/function/Icon';
import Cookie from './Cookie';

export default function Footer() {
  return (
    <>
      <footer>
        <Row className="justify-content-between">
          {footer_menus.map((item:any, index:number)=>(
          <Col className="mb-4 mb-xl-0 " lg={'auto'} sm={'6'} key={index} style={{ color: "var(--g04)", textTransform: "uppercase" }}>
            {item.title}
            <ul>
              {item.tree.map((tree:any, i:number) => (
              <li key={i}>
                <Link target={tree.target=='_blank'?'_blank':'_self'} href={tree.path}>
                  {tree.title} {tree.target=='_blank'?<Icon iconName={"ArrowUpRight"} className="ms-1 position-relative" size="14" style={{ top: "-1px" }} />:null}
                </Link>
              </li>
              ))}
            </ul>
          </Col>
          ))}
        </Row>
        <Row className="mt-3">
          <Col>
            <Link href='/cookie' className="me-3">Cookie notice</Link>
            <Link href='/disclaimer'>Disclaimer</Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <span className="text-tertiary">© 2023 BARUNSONLABS GLOBAL PTE. LTD.</span>
          </Col>
        </Row>

        <Cookie />        
      </footer>
    </>
  )
}
