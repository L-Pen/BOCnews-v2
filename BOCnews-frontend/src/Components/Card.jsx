import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from '../images/BOC_logo.jpg'
import Button from 'react-bootstrap/Button';

const NewsCard = ({ news: { date, date_utc, domain, link, position, snippet, source, thumbnail, title } }) => {
    return (
      <>
        <style type="text/css">
        {`
          .btn-flat {
            background-color: blue;
            color: white;
          }
        `}
        </style>

        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={thumbnail.length === 0 ? image : thumbnail} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {snippet}
                </Card.Text>
                <div className="container">
                  <Button variant="flat" href={link} target="_blank">Read Article</Button> 
                  <div className="text">
                    <Card.Text>{date}</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>

    )
}

export default NewsCard;

