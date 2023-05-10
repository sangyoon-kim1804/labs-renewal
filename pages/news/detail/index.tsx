import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Link from "next/link";
import { NextSeo } from 'next-seo';

export default function Detail() {
  const [newsData, setNewsData] = useState<any>([]);
  const [newsDate, setNewsDate] = useState('');
  const router = useRouter();
  const { id } = router.query;
  console.log(JSON.stringify(router.query) + ':' + router.pathname);
  var news_date = '';
  const fetchNews = async () => {
    const result = await axios(`https://api.barunsonlabs.io/v1/news/detail/${id}`);
    setNewsData(result.data.data);
    setNewsDate(result.data.data.news_date.substr(0, 10).replace(/-/gi, '.'));
  };
  useEffect(() => {
    if (id) {
      fetchNews();
    }
  }, [id]);
  return (
    <>
      <NextSeo
        title="Content-Fi"
      />
      <Container>
        <div className="mt-2 mt-lg-5 pt-5">
          <Link href="/news">Back to list</Link>
          <h2 className="barlow fw-600 text-center pt-3 mt-5">
            {newsData.title}
          </h2>
          <h5 className="barlow fw-400 text-center mt-3">
            {newsDate}
          </h5>
          <p className="mt-5" style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {newsData.content}
          </p>
        </div>
      </Container>
    </>
  )
}