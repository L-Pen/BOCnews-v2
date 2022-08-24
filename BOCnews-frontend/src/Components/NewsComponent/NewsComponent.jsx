import './NewsComponent.css'
// import image from "../../images/BOC_logo_text.png"
import NewsCard from '../NewsCard/NewsCard'
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ControlledTabsExample from '../../tabs';

function NewsComponent({news}) {
    console.log(news)
    return (
        <>
            <div className=' px-5 my-10 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 flex-wrap justify-center'>
                <Card>
                    <CardHeader className="mobile-header"><ControlledTabsExample className="tabs" news={news.map((newsPost) => (
                    <NewsCard news={newsPost}/>
                ))}></ControlledTabsExample></CardHeader>
                <CardHeader className="header">News</CardHeader>
                </Card>
                <div className="news-posts">
                {news.map((newsPost) => (
                    <NewsCard news={newsPost}/>
                ))}
                </div>
                
            </div>
        </>
        
    );
}

export default NewsComponent;