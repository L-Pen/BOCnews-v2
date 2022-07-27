// import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import NewsCard from './Components/NewsCard';
// import Loader from './Components/Loader'
// import Card from './Components/Card'
// import NavigationBar from './Components/Header/header';

// const news1 = {
//     "position": 1,
//     "title": "Bank of Canada interest rate hike is a ‘hammer to housing’ market: BMO economist",
//     "link": "https://globalnews.ca/news/8998329/bank-of-canada-interest-rate-housing-market/",
//     "domain": "globalnews.ca",
//     "source": "Global News",
//     "date": "1 day ago",
//     "date_utc": "2022-07-18T18:39:39.368Z",
//     "snippet": "Rising interest rates are dealing a heavy blow to Canada's previously hot housing market, according to an economist with BMO Capital...",
//     "thumbnail": "data:image/jpeg;base64,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"
// }



// function App() {
//   const axios = require('axios');

//   const params = {
//     api_key: "E4B68012E149457B9E307FC7D882001E",
//     url: "https://www.google.com/search?rlz=1C1CHBF_enCA912CA912&sxsrf=ALiCzsatb2fH6rVnw-xjcjpFox30wJAQnA:1658249382538&q=bank+of+canada+news&tbm=nws&source=univ&tbo=u&sa=X&ved=2ahUKEwjdmZSrtIX5AhX_ZTABHftyAa0Qt8YBegQIAxAF&biw=1162&bih=1170&dpr=1.1",
//     location: "Canada",
//   }
  
//   const [newsPosts,setNews] = useState([])

//   useEffect(() => {
//     searchNews();
//   },[])

//   const searchNews = async () => {
//     const response = await axios.get('https://api.scaleserp.com/search', { params });
//     console.log("Response",response);
//     const news_data = await response.data.news_results;
//     console.log("News Data",news_data);

//     setNews(news_data)
//   }

//   return (
//     <div className="App">
//       <NavigationBar />
//       {newsPosts?.length > 0 ? (
//         <div className="NewsPost">
//           {newsPosts.map((news) => (
//             <Card news={news} />
//           ))}
//         </div>
//       ) : (
//         <div className="Loader">
//           {/*INSERT LOADER HERE */}
//           <Loader/>
//         </div>
//       )}

//       <Card/>

//     </div>

//   );
// }

// export default App;

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader'
import Card from './Components/Card'
import NavigationBar from './Components/Header/header';
import FinStats from './Components/FinStats';

const news1 = {
    "position": 1,
    "title": "Bank of Canada interest rate hike is a ‘hammer to housing’ market: BMO economist",
    "link": "https://globalnews.ca/news/8998329/bank-of-canada-interest-rate-housing-market/",
    "domain": "globalnews.ca",
    "source": "Global News",
    "date": "1 day ago",
    "date_utc": "2022-07-18T18:39:39.368Z",
    "snippet": "Rising interest rates are dealing a heavy blow to Canada's previously hot housing market, according to an economist with BMO Capital...",
    "thumbnail": "data:image/jpeg;base64,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"
}

const news2 = {
  "position": 1,
  "title": "Bank of Canada",
  "link": "https://globalnews.ca/news/8998329/bank-of-canada-interest-rate-housing-market/",
  "domain": "news.ca",
  "source": "News",
  "date": "2 days ago",
  "date_utc": "2022-07-18T18:39:39.368Z",
  "snippet": "Test second block",
  "thumbnail":'BOC_logo.jpg',
}



function App() {
  const axios = require('axios');

  const params = {
    api_key: "E4B68012E149457B9E307FC7D882001E",
    url: "https://www.google.com/search?rlz=1C1CHBF_enCA912CA912&sxsrf=ALiCzsatb2fH6rVnw-xjcjpFox30wJAQnA:1658249382538&q=bank+of+canada+news&tbm=nws&source=univ&tbo=u&sa=X&ved=2ahUKEwjdmZSrtIX5AhX_ZTABHftyAa0Qt8YBegQIAxAF&biw=1162&bih=1170&dpr=1.1",
    location: "Canada",
  }
  
  const [newsPosts,setNews] = useState([])
  const [finData,setFinData] = useState({})

  useEffect(() => {
    deleteModel();
    createmodel();
    searchNews();
    searchModel();
  },[])

  const searchNews = async () => {
    const response = await axios.get('https://api.scaleserp.com/search', { params });
    console.log("Response",response);
    const news_data = await response.data.news_results;
    console.log("News Data",news_data);

    setNews(news_data)
  }

  const searchModel = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/stat-list");
    const news_data = response.data[0];

    setFinData(news_data);
  }

  const getNumObjectModel = async () => {
    const url = 'http://127.0.0.1:8000/api/stat-list';
    const response = await fetch(url);
    const data = await response.json();
    const id_start = data[0].id
    const numObj = data.length
    // console.log("in",numObj)
    let returnArray = [id_start,parseInt(numObj)]
    return returnArray
  }

  const deleteModel = async () => {
    let ls = await getNumObjectModel();
    if(ls[1] === 0){
      return;
    }
    let low = ls[0];
    let limit = low + ls[1];
    while(low < limit){
      fetch(`http://127.0.0.1:8000/api/stat-delete/${low}`, {
        method:'DELETE',
      });
      low++;
    }
  }

  const createmodel = () => {
    const url = 'http://127.0.0.1:8000/api/stat-create';
    fetch(url,{
      method: 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(finData),
    })
  }

  const fetchNews = async () => {
    const url = 'https://www.google.com/search?q=%22bank+of+canada%22+news&rlz=1C1CHBF_enCA912CA912&biw=1162&bih=1170&tbm=nws&sxsrf=ALiCzsZmQlqUOYKGUkBB_WnBxbGirmDqLw%3A1658858198564&ei=1irgYqOLIorJptQP3MuDoA8&ved=0ahUKEwijzqGtkJf5AhWKpIkEHdzlAPQQ4dUDCA4&uact=5&oq=%22bank+of+canada%22+news&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQAzIHCAAQsQMQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgQIABBDOgoIABCxAxCDARBDOggIABCABBCxA1AAWOYWYLsXaABwAHgAgAGAAYgB7wySAQQxOS4ymAEAoAEBwAEB&sclient=gws-wiz-news'
    const response = await fetch(url);
    console.log(response);
  }

  fetchNews();

  return (
    <div className="App">
      <NavigationBar />
      <Card news={news1}/>
      <Card news={news2}/>
      <FinStats finStat={finData}/>
    </div>
  );
}

export default App;
