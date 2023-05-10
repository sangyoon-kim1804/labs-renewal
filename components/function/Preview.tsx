import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function GridItem ({ id, title, content, news_date }:any) {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  }
  return (
    <>
    <Col lg='6' className="mb-4">
      <Card className="rounded-0">
        <Card.Body className="p-4">
          <h5 className="mb-1 " style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</h5>
          <p className="mb-4 " style={{ fontSize: "13px" }}>{news_date.substr(0, 10).replace(/-/gi,'.')}</p>
          <p className={'p_contents ' + (collapse ?'true':'false')} style={{ fontSize: "15px", wordBreak: "break-all" }} >
            {content}
          </p>
          {/* <Link href={`/news/detail/?id=${id}`} className="float-start d-block mt-2" style={{ textDecoration: "none", fontSize: "13px", cursor: "pointer" }}>
            READ MORE..
          </Link> */}
          <Button onClick={handleCollapse} variant="outline-primary" className="rounded-0 mt-2" style={{ textDecoration: "none", fontSize: "13px", cursor: "pointer" }}>
            READ MORE..
          </Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}