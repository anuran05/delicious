import React from 'react'
import breadcumb1 from './img/bg-img/breadcumb1.jpg';

function AboutUs() {
  return (
    <div className="row ">
	    <div className="medium-12 columns">
     

    
    {/* <!-- ##### Header Area Start ##### --> */}
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
                                    <li><a href="#">Hello World!</a></li>
                                    <li><a href="#">Welcome to Colorlib Family.</a></li>
                                    <li><a href="#">Hello Delicious!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    </header>
   {/*  <!-- ##### Header Area End ##### -->
    
    <!-- ##### Breadcumb Area Start ##### --> */}
    <div class="breadcumb-area bg-img bg-overlay" style= {{backgroundImage: `url(${breadcumb1})`}}> 
        
    </div>
   {/*  <!-- ##### Breadcumb Area End ##### -->

    <!-- ##### About Area Start ##### --> */}
    <section class="about-area section-padding-80">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h3>Who we are and what we do?</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h6 class="sub-heading pb-5">Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</h6>

                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
            </div>

            <div class="row align-items-center mt-70">
               {/*  <!-- Single Cool Fact --> */}
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="single-cool-fact">
                        <img src="img/core-img/salad.png" alt=""/>
                        <h3><span class="counter">1287</span></h3>
                        <h6>Amazing receipies</h6>
                    </div>
                </div>

                {/* <!-- Single Cool Fact --> */}
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="single-cool-fact">
                        <img src="img/core-img/hamburger.png" alt=""/>
                        <h3><span class="counter">25</span></h3>
                        <h6>Burger receipies</h6>
                    </div>
                </div>

                {/* <!-- Single Cool Fact --> */}
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="single-cool-fact">
                        <img src="img/core-img/rib.png" alt=""/>
                        <h3><span class="counter">471</span></h3>
                        <h6>Meat receipies</h6>
                    </div>
                </div>

                {/* <!-- Single Cool Fact --> */}
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="single-cool-fact">
                        <img src="img/core-img/pancake.png" alt=""/>
                        <h3><span class="counter">326</span></h3>
                        <h6>Desert receipies</h6>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <img class="mb-70" src="img/bg-img/about.png" alt=""/>
                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
            </div>
        </div>
    </section>
 {/*    <!-- ##### About Area End ##### -->

    
    <!-- ##### Follow Us Instagram Area Start ##### --> */}
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

           {/*  <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta4.jpg" alt=""/>
               {/*  <!-- Icon --> */}
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            {/* <!-- Single Insta Feeds --> */}
            <div class="single-insta-feeds">
                <img src="img/bg-img/insta5.jpg" alt=""/>
                {/* <!-- Icon --> */}
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
   {/*  <!-- ##### Follow Us Instagram Area End ##### -->

    <!-- ##### Footer Area Start ##### --> */}
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
    </div> 
  )
}

export default AboutUs
