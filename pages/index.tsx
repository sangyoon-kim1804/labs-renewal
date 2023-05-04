import React, { useContext } from 'react';
import Link from 'next/link';
import { Slide } from '#/components/function/Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { header_stats, center_stats, brew, partners } from '#/demo/data';
import { Counter } from '#/components/function/Counter';

export default function Home() {
  return (
    <Container>
      <div className="keyvisual mt-5 pt-5">
        <h3 className="text-second">New method of participation in the transparent content economy</h3>        
        <h1 className="text-first mt-2">CONTENT X FINANCE</h1>          
        <div className="position-relative mb-5">
          <img className="w-100 d-block m-auto" style={{ maxWidth: "450px" }} src={`/images/keyvisual12.png`} alt="keyvisual1" />
          <h3 className="position-absolute text-second" style={{ right: "0px", bottom: "30%" }}>SEE WHAT WE MAKE</h3>
        </div>
      </div>
      <div className="header_stats mt-5 pt-5 ">
        <Row>
          <Counter data={header_stats} size={6} />
        </Row>
      </div>
      <div className="caption mt-5 pt-5">
        <h1>
          We newly<br/>
          <span className="text-first">reorganize</span><br/>
          the method of <span className="text-second">enjoying culture</span>            
        </h1>
        <p className="mt-3">
          Cultural creators only involved to create, and cultural consumers only involved to consume. 
          Also, limited users can access the results because of the complicated cultural content distribution process.
          However, transparent and safe blockchain technology will change the fragmentary one-sided flow of the cultural content market.
          In the BRS ecosystem, the cultural consumer participates from creative phase. 
          Cultural creator also participates until distribution and consumption phases. 
          The BRS ecosytem is making new flow in blockchain environment.
        </p>
      </div>
      <div className="brewing mt-5 pt-5">
        <h3 className="text-first mb-3">See what we’ve got brewing</h3>
        <div style={{ margin: "0 -5px 5rem" }}>
          <Slide data={brew} />
        </div>
      </div>
      <div className="center_stats mt-5 pt-5">
        <Row>                  
          <Counter data={center_stats} size={4} />
        </Row>
      </div>
      <div className="rofler">
        <img src={`/images/keyvisual22.png`} className="w-75 m-auto d-block my-5 pt-5" alt="keyvisual2" style={{ maxWidth: "425px" }} />
        <h2 className="text-center text-first">
          Even now, cultural content is <span className="text-second">expanding</span> with your pariticipation.
        </h2>
      </div>
      <div className="partners mt-5 pt-5">
        <h3 className="text-first mb-3">We are partners</h3>
        <Row className="mt-3">
          {partners.map((item:any, index:number)=>(
            <Col sm={4} xs={6} className={"px-0 py-4 py-sm-4 py-md-5 px-sm-4 py-lg-5 px-lg-5 " + (index==8?'offset-3 offset-sm-0':'')} key={index}>
              <Link href={item.path} target="_blank">
                <img src={`/images/${item.image}`} alt={item.title} className="w-100" />
                {/* <Image src={`/images/${item.image}`} className="w-100" alt={item.title} width={100} height={100} /> */}
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}
