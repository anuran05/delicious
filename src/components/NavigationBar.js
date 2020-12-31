import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img1 from './images/delicious.jpg'; 

function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (

      <header class="header-area">

      {/* <!-- Top Header Area --> */}
      <div class="top-header-area">
          <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-between">
                  {/* <!-- Breaking News --> */}
                  <div class="col-12 col-sm-6">
                      <div class="breaking-news">
                          <div id="breakingNewsTicker" class="ticker">
                              <ul>
                                  
                              </ul>
                          </div>
                      </div>
                  </div>

                  {/* <!-- Top Social Info --> */}
                  <div class="col-12 col-sm-6">
                      <div class="top-social-info text-right">
                          <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* <!-- Navbar Area --> */}
      <div class="delicious-main-menu">
          <div class="classy-nav-container breakpoint-off">
              <div class="container">
                  {/* <!-- Menu --> */}
                  <nav class="classy-navbar justify-content-between" id="deliciousNav">

                      {/* <!-- Logo --> */}
                      <a class="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>

                      {/* <!-- Navbar Toggler --> */}
                      <div class="classy-navbar-toggler">
                          <span class="navbarToggler"><span></span><span></span><span></span></span>
                      </div>

                      {/* <!-- Menu --> */}
                      <div class="classy-menu">

                         {/*  <!-- close btn --> */}
                          <div class="classycloseIcon">
                              <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                          </div>

                         {/*  <!-- Nav Start --> */}
                          <div class="classynav">
                              <ul>
                                  <li><Link to="/adminafterlogin">ADMIN HOME </Link></li>
                                  <li><Link to="/displayall">DISPLAY ALL </Link></li>
                                  <li><Link to="/delete">DELETE </Link></li>
                                  <li><Link to="/logout">LOGOUT </Link></li>
                              </ul>

                              {/* <!-- Newsletter Form --> */}
                              <div class="search-btn">
                                  <i class="fa fa-search" aria-hidden="true"></i>
                              </div>

                          </div>
                          {/* <!-- Nav End --> */}
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  </header>
      
    )

  }
  else if (authuser === 'USER') {
    return (
      <header class="header-area">

      {/* <!-- Top Header Area --> */}
      <div class="top-header-area">
          <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-between">
                  {/* <!-- Breaking News --> */}
                  <div class="col-12 col-sm-6">
                      <div class="breaking-news">
                          <div id="breakingNewsTicker" class="ticker">
                              <ul>
                                  
                              </ul>
                          </div>
                      </div>
                  </div>

                  {/* <!-- Top Social Info --> */}
                  <div class="col-12 col-sm-6">
                      <div class="top-social-info text-right">
                          <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* <!-- Navbar Area --> */}
      <div class="delicious-main-menu">
          <div class="classy-nav-container breakpoint-off">
              <div class="container">
                  {/* <!-- Menu --> */}
                  <nav class="classy-navbar justify-content-between" id="deliciousNav">

                      {/* <!-- Logo --> */}
                      <a class="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>

                      {/* <!-- Navbar Toggler --> */}
                      <div class="classy-navbar-toggler">
                          <span class="navbarToggler"><span></span><span></span><span></span></span>
                      </div>

                      {/* <!-- Menu --> */}
                      <div class="classy-menu">

                         {/*  <!-- close btn --> */}
                          <div class="classycloseIcon">
                              <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                          </div>

                         {/*  <!-- Nav Start --> */}
                          <div class="classynav">
                              <ul>
                                  <li /* class="active" */><Link to="/userafterlogin">Home</Link></li>
                                  <li><Link to="/about">About Us</Link></li>
                                  <li><Link to="/blog">Blog</Link></li>
                                  <li><Link to="/userblog">User Blog</Link></li>
                                  <li><Link to="/addrecipe">ADD RECIPE</Link></li>
                                  {/* <li><Link to="/updateprofile">Update Profile</Link></li> */}
                                  <li><Link to="/search_receipe">Search Receipe</Link></li>
                                  <li><Link to="/logout">Logout</Link></li>
                              </ul>

                              

                          </div>
                          {/* <!-- Nav End --> */}
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  </header>
    )
  }
  else {
    return (
      <header class="header-area">

      {/* <!-- Top Header Area --> */}
      <div class="top-header-area">
          <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-between">
                  {/* <!-- Breaking News --> */}
                  <div class="col-12 col-sm-6">
                      <div class="breaking-news">
                          <div id="breakingNewsTicker" class="ticker">
                              <ul>
                                  <li><a href="#">Hello!!!!</a></li>
                                  <li><a href="#">Welcome to !!</a></li>
                                  <li><a href="#">Hello Delicious!!!</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  {/* <!-- Top Social Info --> */}
                  <div class="col-12 col-sm-6">
                      <div class="top-social-info text-right">
                          <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* <!-- Navbar Area --> */}
      <div class="delicious-main-menu">
          <div class="classy-nav-container breakpoint-off">
              <div class="container">
                  {/* <!-- Menu --> */}
                  <nav class="classy-navbar justify-content-between" id="deliciousNav">

                      {/* <!-- Logo --> */}
                      <a class="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>

                      {/* <!-- Navbar Toggler --> */}
                      <div class="classy-navbar-toggler">
                          <span class="navbarToggler"><span></span><span></span><span></span></span>
                      </div>

                      {/* <!-- Menu --> */}
                      <div class="classy-menu">

                         {/*  <!-- close btn --> */}
                          <div class="classycloseIcon">
                              <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                          </div>

                         {/*  <!-- Nav Start --> */}
                          <div class="classynav">
                              <ul>
                                  <li /* class="active" */><Link to="/home">Home</Link></li>
                                  <li><Link to="/about">About Us</Link></li>
                                  <li><Link to="/contact_us">Contact Us</Link></li>
                                  <li><Link to="/reg">Registration</Link></li>
                                  <li><Link to="/login">Login</Link></li>
                                  <li><Link to="/blog">Blog</Link></li>
                                  <li><Link to="/search_receipe">Search Receipe</Link></li>
                                  <li><Link to="/adminlogin">Admin Login</Link></li>
                              </ul>

                              

                          </div>
                          {/* <!-- Nav End --> */}
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  </header>
    )
  }
}

export default NavigationBar
