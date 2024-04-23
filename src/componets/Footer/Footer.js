import React from 'react';
import './footer.css';
import Container from'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";



function Footer() {
  return (
    <div className='myfooter' >
        
        <Container>
        <Row>
            <Col>
            <ul>
                <h4>Quick Link</h4>
                <li className='footer'>about us</li>
                <li className='footer'>Term & conditions</li>
                <li className='footer'>Privacy</li>
                <li className='footer'>Refund</li>
                <li className='footer'>shipping policy</li>
                <li className='footer'>contact</li>
            </ul>
            </Col>
            <Col>
            <ul>
                <h1>Brand</h1>
                <li className='brand'>Samsung</li>
                <li className='brand'>Nokia</li>
                <li className='brand'>oppo</li>
                <li className='brand'>vivo</li>
            </ul>
            </Col>
            <Col>
            <ul>
                <h1>Contact</h1>
                <li className='footer'>vizag,Andhra pradesh</li>
                <li className='footer'>098765432</li>
                <li className='footer'>info@gmail.com</li>
                </ul>
            </Col>
            <Col >
            <ul>
                 <h1>Keep in touch</h1> 
                <input type='text' className='footersearch' placeholder='Enter your email'/><br/>
                <FaFacebookSquare />
                <HiOutlineMail />
                <TiSocialLinkedin />
            </ul>
            </Col>
        </Row>
        </Container>
        </div>
  );
}

export default Footer ;
