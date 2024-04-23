import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images44 from '../Images/44.jpg';
import './Login.css';


function Login() {
  return (
    <div className="form">
        
            <Row>
                <Col style={{marginLeft:100, borderRadius:60}} >
                <img src={Images44}  width="650" height="700"/>
                </Col>
                <Col style={{backgroundColor:'lightpink',borderRadius:20,marginRight:100}}><br/><br/><br/>
                <br/><br/>
                <br/>
                    <center>
                        <h1 style={{paddingTop:50}}>LOGIN OR SIGNUP</h1><br/>
                        <input type="text" className='login' placeholder='ENTER MOBILE NUMBER'/><br/><br/> 
                        <input type="text" className='login' placeholder='PASSWORD'/><br/><br/>
                        <button className='sub'>CLICK HERE</button>
                        
                    </center>
                </Col>
            </Row>  
        




    </div>
  )
}

export default Login