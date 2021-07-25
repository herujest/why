import React, { Component } from 'react';
import { Button, Col, Jumbotron as Jumbo, Row } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo fluid="true" className="jumbotron jumbotron-fluid ">
          <div className="jumbo-content">
            <Row>
              <Col sm="2" ></Col>
              <Col sm="7">
                <h1>Wehelpyou | Mobile Documentation</h1>
                <br></br>
                <p>It's contain all WHY mobile developer needs. Including how to use its available components and API integration. Build using Reaact Native and love.</p>
                <Row>
                  <Col>
                    <div className="jumbo-buttons">
                      <Button sm="3" variant="outline-light">Getting Started</Button>
                      <Button sm="3" variant="outline-light margin-left">Components</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <p className="overlay">Current App version : 1.6.3</p>
                </Row>
              </Col>
            <Col sm="2" ></Col>
            </Row>
          </div>
        </Jumbo>
      </div>
    );
  }
}
