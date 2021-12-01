import React, { Component } from 'react'
import '../style/style.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="container">
            <nav className="nav-top">

                <div className="right-nav">
              <img src='https://secureservercdn.net/160.153.137.99/epq.490.myftpupload.com/wp-content/uploads/2021/03/RB-Fashion-Logo.png' alt="logo"/>
             
              <ul className="menu-ul">
                  <li><a href="">Home</a></li> 
                  <li><a href="">Shop Modest</a></li> 
                  <li><a href="">Our Story</a></li> 
                  <li><a href="">Contact Us</a></li> 
              </ul>
               </div>
           <div className="icons-part">

                  <li><a href=""><i class="fas fa-search"></i></a></li> 
                  <li><a href=""><i class="far fa-user"></i></a></li> 
                  <li><a href=""><i class="far fa-heart"></i></a></li> 
                  <li><a href=""><i class="fas fa-shopping-cart"></i></a></li> 
           </div>

          </nav>
          </div>
        )
    }
}

export default Navbar
