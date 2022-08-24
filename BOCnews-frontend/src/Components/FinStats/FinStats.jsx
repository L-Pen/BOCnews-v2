import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TweetCarousel from "../Tweets";
import './finstats.css'

const FinStats = ({ finStat: { interestRate, inflation, trim, median, common } }) => {
    return (
      <div className="finStats">
        
        <div class="hwrap">
          <div class="hmove">
            <div class="hitem"> <b>Interest Rate: {interestRate}</b></div>
            <div class="hitem"> <b>Total CPI Inflation: {inflation}</b></div>
            <div class="hitem"><b>CPI-Trim: {trim}</b></div>
            <div class="hitem"><b>CPI-Median: {median}</b></div>
            <div class="hitem"><b>CPI-Common: {common}</b></div>
          </div>
        </div>
      </div>
      );
}

export default FinStats