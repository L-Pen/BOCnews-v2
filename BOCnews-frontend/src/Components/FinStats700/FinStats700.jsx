import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";
import ListGroup from 'react-bootstrap/ListGroup';
import TweetCarousel from "../Tweets";
import './FinStats700.css'

const FinStats = ({ finStat: { interestRate, inflation, trim, median, common } }) => {
    return (
      <div className="finStats">
        <Card >
          <CardHeader className="card-header finCard">Stats and Social Media</CardHeader>
          </Card>
          <Card border="dark" className="finCard mt-2" >
            <ListGroup variant="flush">
                <ListGroup.Item className=" p-5">Policy Interest Rate: <b>{interestRate}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">Total CPI Inflation: <b>{inflation}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">CPI-trim: <b>{trim}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">CPI-median: <b>{median}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">CPI-common: <b>{common}</b></ListGroup.Item>
                <ListGroupItem><TweetCarousel></TweetCarousel></ListGroupItem>
            </ListGroup>
        </Card>
      </div>
      );
}

export default FinStats