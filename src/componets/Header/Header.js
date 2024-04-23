import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';





function Header() {
  return (
    <>
    
    <div className="header">
    

  <div>
      <ul className='menu'>
          <h1>E-cart</h1>
          <li className='list'><Link to='/' className="link">Home</Link></li>
          <li className='list'><Link to='about' className='link'>Mobiles</Link></li>
          <li className='list'><Link to='service' className='link'>Smart watches</Link></li>
          <li className='list'><Link to='contact' className='link'>Smart Tv</Link></li>
          <li className='list'><Link to='login' className='link'>LOGIN</Link></li>
      </ul>
  </div>
  

</div>
<div className='help'>
    <h1>E-CART</h1><br/>
    <div className='search'>
   <center> <input  type='text' placeholder="serach here for more products"  style={{marginRight:350, width:400}}/></center>
    <h4 >Need help? 09876500</h4>

    </div>
    
  </div>
</>
  );
}

export default Header ;