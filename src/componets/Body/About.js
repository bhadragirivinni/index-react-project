import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Images22 from '../Images/22.jpg';
import Images23 from '../Images/23.jpg';
import Images24 from '../Images/24.jpg';
import Images25 from '../Images/25.jpg';
import Images27 from '../Images/27.jpg';
import Images28 from '../Images/28.jpg';
function About() {
  return (
    
    <div><br/><br/><br/>
    <div>
    <center><h1>Top Mobiles</h1></center> 
    </div>
    <div>
      <br/>
      <Container>
        <Row>
          <Col>
          <center>
          <img src={Images22} width="300" height="300"/>
          
          <h4>VIVO Y56</h4>
          <p2>₹16000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>

          <Col>
          <center>
            <img src={Images23} width="200" heght="100"/>
            <h4>OPPO</h4>
            <p2>₹20000</p2><br/>
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
          <img src={Images25} width="300" height="300"/>
          
          <h4>VIVO</h4>
          <p2>₹10,000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>

          <Col>
          <center>
            <img src={Images24} width="300" heght="350"/>
            <h4>VIVO Y16</h4>
            <p2>₹18,000</p2><br/>
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
          <img src={Images27} width="300" height="300"/>
          
          <h4>REALME</h4>
          <p2>₹12,000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>

          <Col>
          <center>
            <img src={Images28} width="300" heght="350"/>
            <h4>Samsung</h4>
            <p2>₹15,000</p2><br/>
            <Button variant="primary">Add to cart</Button>
          </center>
          </Col>
        </Row>
      </Container>
      

      </div>
      </div>
  );
}

export default About


      
      