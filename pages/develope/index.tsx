import React from 'react';
import Container from 'react-bootstrap/Container';
import { NotionPage } from '#/components/function/Notion';
import notion from '#/demo/notion';
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async() => {
  const pageId = 'BRS-19ba8cdd942d45e49a1da126488f1110'
  const recordMap = await notion.getPage(pageId)  
  return {
    props: {
      recordMap
    },
    revalidate: 1
  }  
}

export default function Develope(props:any) {
  const { recordMap } = props;
  return (
    <>
      <NextSeo
        title="README 1ST"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "brs,barunson,barunsonlabs,blockchain,dlt,decentralize,p2p,ethereum,polygon,de-fi,nft,token,sdk,guide,document,api",
          }
        ]}
      />    
      <Container>
        <div className="mt-2 mt-lg-5 pt-5">
          <NotionPage recordMap={recordMap} rootPageId='' />
        </div>
      </Container>
    </>    
  )
}