import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel';
import Images47 from '../Images/47.jpg';
import Images48 from '../Images/48.jpg';
import Images6 from '../Images/06.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Images7 from '../Images/07.jpg';
import Images22 from '../Images/22.jpg';
import Images8 from  '../Images/08.jpg';
import Images9 from '../Images/09.jpg';
import Images19 from '../Images/19.jpg';
import Images20 from  '../Images/20.jpg';
import Images21 from '../Images/21.jpg';
import{Link} from 'react-router-dom';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Index() {
  return (
    <div >
    <Carousel>
      <Carousel.Item>
        <img src={Images47} width="1500" height="500"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Images48} width="1500" height="500"/>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={Images6} width="1700"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <div>
    
    <Container>
        <Row>
          <Col>
    
          <img src={Images22} width="300" height="400" className='hover'/>
          </Col>
          <Col>
          <img src={Images7} width="200 " height="400" className='hover'/>
          </Col>
          <Col>
          <img src={Images8} width="200" height="400" className='hover'/>
          </Col>
          <Col>
          <img src={Images9} width="200" height="400" className='hover'/>
          </Col>
          </Row>
          </Container>
         
          
          
      
      
    </div><br/>
    <div>
    <center>
      <h1>Top Selling</h1>
      </center>
      <CardGroup>
      <Card style={{paddingRight:10}}>
        <Card.Img variant="top" src={Images19} className='hover' width={300}/ >
        <Card.Body>
          <Card.Title>Mobile Phones</Card.Title>
         <Button variant="default"> <Link to='about'>view more </Link></Button>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={Images20} className='hover' />
        <Card.Body>
          <Card.Title>Smart watches</Card.Title>
          <Button variant="default"><Link to='Service'>view more </Link></Button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Images21} className='hover'/>
        <Card.Body>
          <Card.Title>Smart Tv</Card.Title>
          <Button variant="default"><Link to='contact'>view more</Link></Button>
        </Card.Body>
        
      </Card>
      
    </CardGroup>
</div>
    
      </div>
  );
}

export default Index;