import React from 'react'

import bg6 from './img/bg-img/bg6.jpg';
import bg4 from './img/bg-img/bg4.jpg';
import bg7 from './img/bg-img/bg7.jpg';
import bg1 from './img/bg-img/bg1.jpg';



function Home() {
  return (
    <div className="row ">
         <img src="img/bg-img/bg1.jpg" alt=""/>
	<div className="medium-12 columns">

    {/* <!-- Search Wrapper --> */}
    <div class="search-wrapper">
        {/* <!-- Close Btn --> */}
        <div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>

        {/* <div class="container">
            <div class="row">
                <div class="col-12">
                    <form action="#" method="post">
                        <input type="search" name="search" placeholder="Type any keywords..."/>
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div> */}
    </div>

    
    {/* <!-- ##### Hero Area Start ##### -->  */}
    
   {/*  <!-- ##### Hero Area End ##### -->

    <!-- ##### Top Catagory Area Start ##### --> */}
    <section class="top-catagory-area section-padding-80-0">
        <div class="container">
            <div class="row">
                {/* <!-- Top Catagory Area --> */}
                <div class="col-12 col-lg-6">
                    <div class="single-top-catagory">
                        <img src="img/bg-img/bg2.jpg" alt=""/>
                        {/* <!-- Content --> */}
                        <div class="top-cta-content">
                            <h3>Strawberry Cake</h3>
                            <h6>Simple &amp; Delicios</h6>
                            <a href="receipe-post.html" class="btn delicious-btn">See Full Receipe</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Top Catagory Area --> */}
                <div class="col-12 col-lg-6">
                    <div class="single-top-catagory">
                        <img src="img/bg-img/bg3.jpg" alt=""/>
                        {/* <!-- Content --> */}
                        <div class="top-cta-content">
                            <h3>Chinesse Noodles</h3>
                            <h6>Simple &amp; Delicios</h6>
                            <a href="receipe-post.html" class="btn delicious-btn">See Full Receipe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/*  <!-- ##### Top Catagory Area End ##### -->

    <!-- ##### Best Receipe Area Start ##### --> */}
    <section class="best-receipe-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h3>The best Receipies</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                {/* <!-- Single Best Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/r1.jpg" alt=""/>
                        <div class="receipe-content">
                            <a href="receipe-post.html">
                                <h5>Sushi Easy Receipy</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Best Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/r2.jpg" alt=""/>
                        <div class="receipe-content">
                            <a href="receipe-post.html">
                                <h5>Homemade Burger</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Best Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/r3.jpg" alt=""/>
                        <div class="receipe-content">
                            <a href="receipe-post.html">
                                <h5>Vegan Smoothie</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Best Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/r4.jpg" alt=""/>
                        <div class="receipe-content">
                            <a href="receipe-post.html">
                                <h5>Calabasa soup</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Best Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/r5.jpg" alt=""/>
                        <div class="receipe-content">
                            <a href="receipe-post.html">
                                <h5>Homemade Breakfast</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Best Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/r6.jpg" alt=""/>
                        <div class="receipe-content">
                            <a href="receipe-post.html">
                                <h5>Healthy Fruit Desert</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

{/*     <!-- ##### Small Receipe Area Start ##### --> */}
    <section class="small-receipe-area section-padding-80-0">
        <div class="container">
            <div class="row">

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                        {/* <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr1.jpg" alt=""/>
                        </div>
                       {/*  <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Homemade italian pasta</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                      {/*   <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr2.jpg" alt=""/>
                        </div>
                       {/*  <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Baked Bread</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                        {/* <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr3.jpg" alt=""/>
                        </div>
                       {/*  <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Scalops on salt</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                      {/*   <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr4.jpg" alt=""/>
                        </div>
                        {/* <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Fruits on plate</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                        {/* <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr5.jpg" alt=""/>
                        </div>
                        {/* <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Macaroons</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                       {/*  <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr6.jpg" alt=""/>
                        </div>
                        {/* <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Chocolate tart</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                        {/* <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr7.jpg" alt=""/>
                        </div>
                        {/* <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Berry Desert</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                       {/*  <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr8.jpg" alt=""/>
                        </div>
                       {/*  <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Zucchini Grilled on peper</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Small Receipe Area --> */}
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-small-receipe-area d-flex">
                       {/*  <!-- Receipe Thumb --> */}
                        <div class="receipe-thumb">
                            <img src="img/bg-img/sr9.jpg" alt=""/>
                        </div>
                        {/* <!-- Receipe Content --> */}
                        <div class="receipe-content">
                            <span>January 04, 2018</span>
                            <a href="receipe-post.html">
                                <h5>Chicken Salad</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>2 Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Small Receipe Area End ##### -->

    
    {/* <!-- ##### Quote Subscribe Area End ##### -->

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
    



    </div>
    </div>  




    
  )
}

export default Home
