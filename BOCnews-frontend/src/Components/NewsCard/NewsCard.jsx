import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './card.css'
import image from "../../images/BOC_logo_text.png"

const NewsCard = ({ news: { date, date_utc, domain, link, position, snippet, source, thumbnail, title } }) => {
    return (
      <>
      <div className="p-2">
          {/* Title */}
          <div className=" p-2 border border-secondary rounded">
            <div className=" pt-2 font-weight-bold">
              <h2>{title}</h2>

              <div className=" text-right">
                <img src={thumbnail}></img>
              </div>

            </div>
            {/* snippet */}
            <div className="text-left">
              <h5>{snippet}</h5>
            </div>

            {/* date */}
            <div className=" pt-3">
              <h6><u> {date} </u></h6>
            </div>
            {/* Button */}
            <div className=" pt-3 sm:flex justify-start">
              <button id="article-button" className="btn" type="button">
                <a className="article-link" href={link} target="_blank"> Read Article</a>
              </button>
            </div>

            
          </div>
          
      </div>
        {/* style={{ display: "flex", justifyContent: "start" }} */}
      </>

    )
}

export default NewsCard;

