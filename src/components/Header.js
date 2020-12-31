import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/delicious.jpg'; // Tell webpack this JS file uses this image
         
    

function Header() {
  // Import result is the URL of your image
  return <img src={img} alt="Logo" />;
}

     
    

export default Header;