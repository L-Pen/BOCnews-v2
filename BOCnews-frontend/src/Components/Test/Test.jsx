import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './test.css'
// import image from "../../images/BOC_logo_text.png"

function Test(news) {
  return (
    <Row  xs={2} md={1} className="g-4">
      {Array.from({ length: news.news.length}).map((_, idx) => (
        <>
          <Col>
            <Card className='news'>
                <Card.Body>
                  <Card.Title className='title'>{news.news[idx].title}</Card.Title>
                  <Card.Text className='snippet'>
                    {news.news[idx].snippet}
                  </Card.Text>
                  <Card.Text>
                    {news.news[idx].date}
                  </Card.Text>
                  {/* <Button variant="flat" href={news.news[idx].link} target="_blank">Read Article</Button> */}
                  <div style={{ display: "flex", justifyContent: "start" }}>
                    <button id="article-button" className="btn" type="button">
                      <a className="article-link" href={news.news[idx].link} target="_blank"> Read Article</a>
                    </button>
                  </div>
                </Card.Body>
                <Card.Img src={news.news[idx].thumbnail}/>
            </Card>
          </Col>
            
        </>
        
      ))}
    </Row>
  );
}

export default Test;