import Carousel from 'react-bootstrap/Carousel';
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Component} from "react";
import './NewsCarousel.css'
import NewsCard from "../NewsCard/NewsCard";

function NewsCarousel({news}) {
    const img_path = "../images/L.png"
    return (
        <> 
            
            <Carousel
                    style={{ padding:"200px",height: "45vh", width: "30vw", textAlign: "center", justifyContent: "center", }}
                    interval={null}
                    variant="dark"
                >
                {news.map((NewsPost) => {
                    return (
                        <Carousel.Item>
                            <img
                            className="w-100"
                            src={img_path}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla aretra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    );
                })}
            </Carousel>

            
        </>
    );
}

export default NewsCarousel;


// <div className="p-2">
// {/* Title */}
// <div className=" p-2 border border-secondary rounded">
//     <div className=" pt-2 font-weight-bold">
//     <h2>{title}</h2>

//     <div className=" text-right container">
//         <img src={thumbnail}></img>
//     </div>

//     </div>
//     {/* snippet */}
//     <div className="text-left">
//     <h5>{snippet}</h5>
//     </div>

//     {/* date */}
//     <div className=" pt-3">
//     <h6><u> {date} </u></h6>
//     </div>
//     {/* Button */}
//     <div className=" pt-3 sm:flex justify-start">
//     <button id="article-button" className="btn" type="button">
//         <a className="article-link" href={link} target="_blank"> Read Article</a>
//     </button>
//     </div>

    
// </div>

// </div>


{/* <Carousel.Item key={NewsPost.position} style={{ textAlign: "center" }}>
<img src='../images/L.png' alt='HELLO'/>
<NewsCard news={NewsPost} />
</Carousel.Item> */}