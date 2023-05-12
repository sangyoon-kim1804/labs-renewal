import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Skeleton from '@mui/material/Skeleton';
import Typography, { TypographyProps } from '@mui/material/Typography';
import axios from 'axios';

const demoData = [1, 2];

export const Preview = ({ ...props }: any) => {
  const [collapse, setCollapse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  const fetchCard = async () => {
    const result = await axios(`https://api.barunsonlabs.io/v1/news?take=10&page=1`);
    console.log(result);
    setCardData(result.data.data);
  };  
  useEffect(() => {
    setTimeout(()=>{
      fetchCard();
    },200)
  }, [])
  return (
    <>
      {
        cardData && cardData.length > 0 ? (
          cardData.map((card:any, index) => (
            <Col lg='6' className="mb-4" key={index}>              
              <Card className="rounded-0">
                <Card.Body className="p-4">
                  {
                    loading ?
                      (
                        <>
                          <Typography component="div" variant={'h5'} className="w-100">
                            <Skeleton />
                          </Typography>
                          <Typography component="div" variant={'body1'} className="w-25">
                            <Skeleton />
                          </Typography>
                          <Typography component="div" variant={'body1'} className="w-100 mt-3">
                            <Skeleton />
                            <Skeleton />
                          </Typography>
                          <Typography component="div" variant={'body1'} className="w-25 mt-4">
                            <Skeleton />
                          </Typography>
                        </>
                      ) : (
                        <>
                          <h5 className="mb-1 " style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{card.title}</h5>
                          <p className="mb-4 " style={{ fontSize: "13px" }}>{card.news_date.substr(0, 10).replace(/-/gi, '.')}</p>
                          <p className={'p_contents ' + (collapse ? 'true' : 'false')} style={{ fontSize: "15px", wordBreak: "break-all" }} >
                            {card.content}
                          </p>
                          <Link href={`/news/detail/?id=${card.id}`} className="float-start d-block mt-2" style={{ textDecoration: "none", fontSize: "13px", cursor: "pointer" }}>
                            READ MORE..
                          </Link>
                          {/* <Button onClick={handleCollapse} variant="outline-primary" className="rounded-0 mt-2" style={{ textDecoration: "none", fontSize: "13px", cursor: "pointer" }}>
                  READ MORE..
                </Button> */}
                        </>
                      )
                  }
                </Card.Body>
              </Card>
            </Col>
          )
        )) : (
          demoData.map((item:any, index:number)=>(
            <Col lg='6' className="mb-4" key={index}>
              <Card className="rounded-0">
                <Card.Body className="p-4">
                  <Typography component="div" variant={'h5'} className="w-100">
                    <Skeleton />
                  </Typography>
                  <Typography component="div" variant={'body1'} className="w-25">
                    <Skeleton />
                  </Typography>
                  <Typography component="div" variant={'body1'} className="w-100 mt-3">
                    <Skeleton />
                    <Skeleton />
                  </Typography>
                  <Typography component="div" variant={'body1'} className="w-25 mt-4">
                    <Skeleton />
                  </Typography>
                </Card.Body>
              </Card>
            </Col>
          ))
        )
      }
    </>
  )
}