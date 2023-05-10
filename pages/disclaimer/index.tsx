
import React from 'react';
import Container from 'react-bootstrap/Container';
import { NextSeo } from 'next-seo';

export default function Disclaimer() {
  return (
    <>
      <NextSeo        
        title="Disclaimer"
      />
      <Container>
        <div className="mt-2 mt-lg-5 pt-5">
          News
        </div>
      </Container>
    </>
  )
}