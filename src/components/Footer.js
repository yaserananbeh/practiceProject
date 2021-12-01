import React, { Component } from "react";
import '../style/Footer.css'

class Footer extends Component{
    render(){
        return(
            <>
          <div className="Footer">
              <div>
            
              <ul>
                <li className="headerList">INFO</li>
                <li>Our Story</li>
                <li>Exchange and Return</li>
                <li>Contact Us</li> 
              </ul>
              </div>

              <div>
           
              <ul>
              <li  className="headerList">OUR POLICIES</li>
                <li>Privacy Policy</li>
                <li>Delivery/Shipment Policy</li>
                <li>Cookie Policy</li> 
                <li>Terms and Conditions</li>
              </ul>
              </div>


              <div>
         
            <ul >
            <li  className="headerList">FOLLOW US</li>
            <div className="social">
            <li><i className="fab fa-facebook"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
                <li><i className="fab fa-instagram-square"></i></li> 
                </div>
                </ul>
              </div>

             

          </div>
           <div className="copyrigth">
            <p>© 2021 <span>RB Fashion</span>. All rights reserved - This website is owned and managed by RB Fashion company.    </p>      
           </div>
           </>
        )
    }
}

export default Footer;