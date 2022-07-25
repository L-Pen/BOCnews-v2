import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NewsCard = ({ news: { date, date_utc, domain, link, position, snippet, source, thumbnail, title } }) => {

    return (
        <div className="news">
            <div>
                <a href={link}>{title}</a>
            </div> 

            <div>
                <img src={thumbnail !== "N/A" ? thumbnail : "BOC logo.jpg"} alt={title} />
            </div> 

            <div>
                <span>{snippet}</span>
                <h3>{date}</h3>
            </div> 
      </div>
    )
}

export default NewsCard;

