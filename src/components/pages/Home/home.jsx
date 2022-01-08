import React from 'react';
import { Button, Col, Jumbotron as Jumbo, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const  Home = () => {
  const navigator = useNavigate();

  function navigate(params) {
    navigator("/getting-started")
  }

  return (
    <div id="home">
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
                    <Button onKeyPress={() => navigate("/getting-started")} sm="3" variant="outline-light">Getting Started</Button>
                    <Button sm="3" variant="outline-light margin-left">Components</Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <p className="overlay">Current App version : 1.12.0</p>
              </Row>
            </Col>
          <Col sm="2" ></Col>
          </Row>
        </div>
      </Jumbo>
      <div className="home-content">
        <Row>
          <Col sm="4">
            <h4>
              Our Libraries
            </h4>
            <p className="paragraf">
              Libraries collectively include all the UI and visual components used across all Wehelpyou products. The designer can simply link any of the libraries to the Figma page he/she is working on, and instantly access all the components within the library directly from Sketch. The libraries are constantly updated to feature the latest UI components across all platforms, so as to provide a centralised repository which features all the latest design elements.
            </p>
          </Col>
          <Col sm="4">
            <h4>
              The founding pillars
            </h4>
            <p className="paragraf">
              Fundamental design rules to help you create amazing user experiences, including guidelines to use Colors pallete, typhography, motion and others UI view.
            </p>
          </Col>
          <Col sm="4">
            <h4>
              API request
            </h4>
            <p className="paragraf">
              Describe how we used Wehelpyou API by giving API request and see its responses. And we can provide what endpoint that currently in use for mobile client
            </p>
          </Col>
        </Row>
      </div>

    </div>
  );
}


export default Home