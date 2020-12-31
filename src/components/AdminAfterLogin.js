import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div>
        
        <br />
        <h3>WELCOME ADMIN</h3>
        <h3>THIS IS ADMIN DASH BOARD</h3>

        <div class="follow-us-instagram">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5>Follow Us Instragram</h5>
                </div>
            </div>
        </div>
        {/* <!-- Instagram Feeds --> */}
        <div class="insta-feeds d-flex flex-wrap">
            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta1.jpg" alt=""/>
                {/* <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta2.jpg" alt=""/>
                {/* <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta3.jpg" alt=""/>
                {/* <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta4.jpg" alt=""/>
               {/*  <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

           {/*  <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta5.jpg" alt=""/>
               {/*  <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta6.jpg" alt=""/>
                {/* <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta7.jpg" alt=""/>
                {/* <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer-area">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                    {/* <!-- Footer Social Info --> */}
                    <div class="footer-social-info text-right">
                        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    {/* <!-- Footer Logo --> */}
                    <div class="footer-logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""/></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
      </div>
    )
  }
}

export default AdminAfterLogin
