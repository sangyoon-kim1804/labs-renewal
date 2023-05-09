import React from 'react';
import Container from 'react-bootstrap/Container';
import { NextSeo } from 'next-seo';

export default function News() {
  return (
    <>
      <NextSeo
        title="What’s new?"
      />
      <Container>
        <div className="mt-2 mt-lg-5 pt-5">
          News
        </div>
      </Container>
    </>
  )
}