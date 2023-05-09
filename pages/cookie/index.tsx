import React from 'react';
import Container from 'react-bootstrap/Container';
import { NextSeo } from 'next-seo';

export default function Cookie() {
  return (
    <>
      <NextSeo
        title="Cookie Notice"
      />
      <Container>
        <div className="mt-2 mt-lg-5 pt-5">
          Cookie
        </div>
      </Container>
    </>
  )
}