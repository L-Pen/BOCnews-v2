import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './FinStats700.css'

const FinStats = ({ finStat: { interestRate, inflation, trim, median, common } }) => {
    return (
      <div className="finStats">
        <Card border="dark" className="finCard mt-2" >
            <ListGroup variant="flush">
                <ListGroup.Item className=" p-5">Policy Interest Rate: <b>{interestRate}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">Total CPI Inflation: <b>{inflation}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">CPI-trim: <b>{trim}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">CPI-median: <b>{median}</b></ListGroup.Item>
                <ListGroup.Item className=" p-5">CPI-common: <b>{common}</b></ListGroup.Item>
            </ListGroup>
        </Card>
      </div>
      );
}

export default FinStats