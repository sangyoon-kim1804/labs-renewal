import React from 'react';
import Container from 'react-bootstrap/Container';
import { NotionPage } from '#/components/function/Notion';
import notion from '#/demo/notion';
import { GetStaticProps } from 'next'

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
    <Container>
      <div className="mt-2 mt-lg-5 pt-5">
        <NotionPage recordMap={recordMap} rootPageId='' />
      </div>
    </Container>
  )
}