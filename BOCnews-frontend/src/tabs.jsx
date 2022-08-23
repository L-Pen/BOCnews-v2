import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TweetCarousel from './Components/Tweets';



function ControlledTabsExample(props) {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 tab"
    >
      <Tab eventKey="home" title="News">
          {props.news}
      </Tab>
      <Tab eventKey="profile" title="Twitter">
        <TweetCarousel className="tweets"/>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;