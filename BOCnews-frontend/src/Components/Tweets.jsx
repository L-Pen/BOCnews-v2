import { TwitterTweetEmbed } from "react-twitter-embed";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Component} from "react";

class TweetCarousel extends Component {
  constructor() {
    super();
    this.state = {
      tweets: ["", "", "", "", "", "", "", "", "", ""],
    };
  }

  async componentDidMount() {
    const endpointUrl = "http://localhost:8000/api/tweets";
    const res = await axios.get(endpointUrl);

    if (res) {
      var tweetIDS = [];
      for (var i = 0; i < 10; i++) {
        tweetIDS.push(res.data.data[i].id);
      }
      this.setState({ tweets: tweetIDS });
    } else {
      throw new Error("Unsuccessful request unfortunately");
    }
  }
  render() {
    const loading = (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
    const settings = {
      cards: "hidden",
      width: "50vw",
      maxWidth: "40vw",
      hideThread: true,
      align: "center",
    };
    if (this.state.tweets[0] === "") {
    return <>Is Loading</>
      }
    return (
      <>
        <Carousel
          style={{ height: "45vh", width: "30vw", textAlign: "center" }}
          interval={null}
          variant="dark"
        >
          {this.state.tweets.map((id) => {
            return (
              <Carousel.Item key={id} style={{ textAlign: "center" }}>
                <div>
                  <TwitterTweetEmbed
                    tweetId={id}
                    placeholder={loading}
                    options={settings}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}
export default TweetCarousel;

