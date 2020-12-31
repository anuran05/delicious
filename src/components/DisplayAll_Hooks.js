import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayAll() {

  
  const [emplist, setEmpList] = useState([]);
  const [recipelist, setRecipeList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/emp')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:4500/emp/getrecipe')
      .then(response => {
        console.log(response.data)
        setRecipeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.username}</td>
          <td>{currentrow.useremail}</td>
          {/* <td>{currentrow.usermobile}</td> */}
          <td>{currentrow.usergender}</td>
          <td>{currentrow.usercountry}</td>
        </tr>
      );
    });
  }

  function viewRecipeList() {
    return recipelist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.title}</td>
          <td>{currentrow.author}</td>
          <td>{currentrow.prep_time}</td>
          <td>{currentrow.cook_time}</td>
          <td>{currentrow.serves}</td>
          <td>{currentrow.ingredients}</td>
          <td>{currentrow.directions}</td>
          
        </tr>
      );
    });
  }

  


  return (
    <div>
      <center>
      <br />
      <h3>ALL USER DETAILS</h3>
      <table border="2" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Mobile</th> */}
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {viewEmpList()}
        </tbody>
      </table>

      <br />
      <h3>ALL RECIPE DETAILS</h3>
      <table border="2" align="center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Prep_time</th>
            <th>Cook_time</th>
            <th>Serves</th>
            <th>Ingredients</th>
            <th>Directions</th>
            
          </tr>
        </thead>

        <tbody>
          {viewRecipeList()}
        </tbody>
      </table>
      </center>

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


export default DisplayAll