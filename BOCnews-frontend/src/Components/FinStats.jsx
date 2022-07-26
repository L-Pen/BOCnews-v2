import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FinStats = ({ finStat: { interestRate, inflation, trim, median, common } }) => {
    return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Policy Interest Rate: {interestRate}</ListGroup.Item>
            <ListGroup.Item>Total CPI Inflation: {inflation}</ListGroup.Item>
            <ListGroup.Item>CPI-trim: {trim}</ListGroup.Item>
            <ListGroup.Item>CPI-median: {median}</ListGroup.Item>
            <ListGroup.Item>CPI-common: {common}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
}

export default FinStats