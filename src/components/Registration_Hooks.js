import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './assets/register.css';

function Registration() {

    const [uname, setUserName] = useState("");
    const [uemail, setUserEmail] = useState("");
    const [umobile, setUsermobile] = useState("");
    const [upass, setUserPass] = useState("");
    const [ugender, setUserGender] = useState("");
    const [ucountry, setUserCountry] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangeUserEmail = (e) => setUserEmail(e.target.value);
    const onChangeUserMobile = (e) => setUsermobile(e.target.value);
    const onChangeUserPass = (e) => setUserPass(e.target.value);
    const onChangeUserGender = (e) => setUserGender(e.target.value);
    const onChangeUserCountry = (e) => setUserCountry(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${uname}`);
        console.log(`EMAIL: ${uemail}`);

        const userinfo = {
            username: uname,
            useremail: uemail,
            usermobile: umobile,
            userpass: upass,
            usergender: ugender,
            usercountry: ucountry
        }

        axios.post('http://localhost:4500/emp/register', userinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')
            });

        setUserName('')
        setUserEmail('')
        setUsermobile('')
        setUserPass('')
        setUserGender('')
        setUserCountry('')
       

    }

    return (
        <div>
          
            <br />
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
              <div class="container">
              <center> <h1>REGISTER</h1></center>
              <p>Please fill in this form to create an account.</p>
             <hr/>
            <label for="name"><b>Name</b></label>
            <input type="text" value={uname} onChange={onChangeUserName}placeholder="ENTER NAME" required />
            <label for="email"><b>EMAIL ID</b></label>
            <input  type="email" value={uemail} onChange={onChangeUserEmail} placeholder="ENTER EMAIL" required />
            <label for="userid"><b>USER ID</b></label>
            <input  type="text" placeholder="ENTER USER ID" required />
            <label for="pass"><b>Password</b></label>
            <input  type="password" value={upass} onChange={onChangeUserPass}placeholder="ENTER PASSWORD" required />
            <label for="conpass"><b>Confirm Password</b></label>
            <input  type="password" placeholder="ENTER PASSWORD" required />
            
            <input type="radio" name="gender" value="MALE"
                    checked={ugender === 'MALE'}
                    onChange={onChangeUserGender} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={ugender === 'FEMALE'}
                    onChange={onChangeUserGender} />
                <label>Female</label>
                <br /><br />

            <label for="place"><b>Select Country</b></label>
            <select value={ucountry} onChange={onChangeUserCountry}>
                <option value="UK">UK</option>
                <option value="INDIA">INDIA</option>
                <option value="USA">USA</option>
            </select>
            <br/>
            <hr/>
            <button type="submit" value="REGISTER" class="registerbtn">Register</button>
            </div>
            <div class="container signin">
            <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
          </div>
          <br/><br/>
          </form>
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


export default Registration
