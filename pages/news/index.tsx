import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Link from "next/link";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import Slider from "react-slick";
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import GridItem from '#/components/function/Preview';

export default function News() {
  const [cardData, setCardData] = useState([]);
  const NewsSetting = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  }  
  const Grid = () => (
    <>
      {cardData.map((card:any, index) => (
        <GridItem key={index} {...card} />
      ))}
    </>
  )
  useEffect(() => {
    const fetchCard = async () => {
      const result = await axios(`https://api.barunsonlabs.io/v1/news?take=10&page=1`);
      console.log(result);
      setCardData(result.data.data);
    };
    fetchCard();
  },[]);
  return (
    <>
      <NextSeo
        title="What’s new?"
      />
      <Container>
        <div className="mt-2 mt-lg-5 pt-5">
          <Col>
            <Row>
              <Slider {...NewsSetting}>
                {cardData.map((card: any, index) => (
                  card.mark == true && card.featured == true ?
                  <Col key={index}>
                    <div className="text-center p-4 pb-2" style={{ backgroundColor: card.color }} >
                      <Badge bg="black" style={{ color: card.color }} >FEAUTRED</Badge>
                      <h2 className="mt-3 mb-5" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{card.title}</h2>
                      <div style={{ width: "100px", height: "100px", margin: "0 auto" }} >
                        {card.file_manage === null ? '' : card.file_manage.file_content.map((file: any, index: number) => (
                          file.content_name === 'main_file' ?
                          <Image width={0} height={0} layout="responsive" alt="news" key={index} className="w-100" src={file.file_path} />
                          : ''
                        ))}
                      </div>
                      <h5 className="mt-4">{card.news_date.substr(0, 10)}</h5>
                      <Link href={`news/detail/?id=${card.id}`} >
                        <p className="d-block" style={{ textDecoration: "none", cursor: "pointer" }}>READ MORE</p>
                      </Link>
                    </div>
                  </Col>
                  : ''
                ))}
              </Slider>
            </Row>
            <Masonry columns={1} spacing={0} className="row mt-4" style={{ marginLeft: "-12px", marginRight: "-12px", width: "calc(100% + 24px)" }}>
              <Grid />
            </Masonry>
          </Col>
        </div>
      </Container>
    </>
  )
}