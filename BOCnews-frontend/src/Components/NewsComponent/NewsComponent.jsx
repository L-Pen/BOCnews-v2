import './NewsComponent.css'
// import image from "../../images/BOC_logo_text.png"
import NewsCard from '../NewsCard/NewsCard'

function NewsComponent({news}) {
    console.log(news)
    return (
        <>
            <div className=' px-5 my-10 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 flex-wrap justify-center'>
                {news.map((newsPost) => (
                    <NewsCard news={newsPost}/>
                ))}
            </div>
        </>
        
    );
}

export default NewsComponent;