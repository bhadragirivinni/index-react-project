import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Images21 from '../Images/21.jpg';
import Images39 from '../Images/39.jpg';
import Images40 from '../Images/40.jpg';
import Images45 from '../Images/45.jpg';
import Images46 from '../Images/46.jpg';


function Contact() {
  return (
    <div>
    <div> <br/><br/><br/>
      <center><h1>Smart Tv</h1></center>
    </div>
    <div>
      <br/>
      <Container>
        <Row>
          <Col>
          <center>
          <img src={Images21} width="300" height="300"/>
          
          <h4>samsung</h4>
          <p2>₹26000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>

          <Col>
          <center>
            <img src={Images39} width="300" heght="300"/>
            <h4>Redmi</h4>
            <p2>₹38000</p2><br/>
            <Button variant="primary">Add to cart</Button>
          </center>
          </Col>
       
      
      <Col>
          <center>
          <img src={Images40} width="300" height="300"/>
          
          <h4>Sansui</h4>
          <p2>₹23,000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col><br/><br/>

          <Col>
          <center>
          <img src={Images45} width="300" height="200"/>
          
          <h4>sony</h4>
          <p2>₹18,000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col><br/><br/> 
          <Col>
          <center>
          <img src={Images46} width="300" height="200"/>
          
          <h4>samsung</h4>
          <p2>₹20,000</p2><br/>
          <Button variant="primary">Add to cart</Button>
          </center>
          </Col>
          </Row>
          </Container>

          
      

      </div>
      </div>
  );
}

export default Contact;