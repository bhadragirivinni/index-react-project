import React from 'react'
import  Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images31 from '../Images/31.jpg';
import Images33 from '../Images/33.jpg';
import Images38 from '../Images/38.jpg';
import Images34 from '../Images/34.jpg';



function Service() {
  return (
<div>
    <div><br/><br/><br/>
      <center><h1>Smart watches</h1></center>
    </div>
    <div>
      <br/>
      <Container>
        <Row>
          <Col>
          <center>
          <img src={Images31} width="300" height="300"/>
          
          <h4>Fire boult</h4>
          <p2>₹1600</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>

          <Col>
          <center>
            <img src={Images33} width="250" heght="350"/>
            <h4>boat</h4>
            <p2>₹2000</p2><br/>
            <Button variant="primary">Add to cart</Button>
          </center>
          </Col>
        </Row>
      </Container>
      <br/>
      <Container>
        <Row>
          <Col>
          <center>
          <img src={Images38} width="300" height="300"/>
          
          <h4>fast track</h4>
          <p2>₹1000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>

          <Col>
          <center>
            <img src={Images34} width="300" heght="350"/>
            <h4>apple</h4>
            <p2>₹8,000</p2><br/>
            <Button variant="primary">Add to cart</Button>
          </center>
          </Col>
        </Row>
      </Container>
      <br/>
      

      </div>
      </div>
  );
  
  }
export default Service