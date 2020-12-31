import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function UpdateProfile(props) {
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [epass, setEmpPass] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            emppass: epass,
            empaddress: eaddress
        }

        axios.put('http://localhost:4500/emp/update', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('PROFILE UPDATED')
            })
            .catch(err => console.log(err))

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpPass('')
        setEmpAddress('')

    }

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        let empemailid = sessionStorage.getItem('useremail')
        if (empemailid == null)
            empemailid = props.email
        axios.get('http://localhost:4500/emp/search/' + empemailid)
            .then(response => {
                console.log(response.data)
                const { empname, empemail, empmobile, emppass, empaddress } = response.data[0]
                setEmpName(empname)
                setEmpEmail(empemail)
                setEmpmobile(empmobile)
                setEmpPass(emppass)
                setEmpAddress(empaddress)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            
            <br />
            <h3>PROFILE UPDATE</h3>
            <b style={{ color: "red" }}> {msg}</b>
            <form onSubmit={handleSubmit}>
                <label>NAME: </label> <br />
                <input type="text" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    readOnly />
                <br /><br />

                <label>EMAIL: </label> <br />
                <input type="email" value={eemail}
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    readOnly />
                <br /><br />

                <label>MOBILE: </label> <br />
                <input type="number" value={emobile}
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <label>PASSWORD: </label> <br />
                <input type="password" value={epass}
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={eaddress}
                    onChange={onChangeEmpAddress} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" value="UPDATE PROFILE" className="btn btn-success" />

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

export default UpdateProfile