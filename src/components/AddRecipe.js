import React, { useState } from 'react';
import axios from 'axios';

function AddRecipe() {

    let rname = sessionStorage.getItem('username')
    console.log(rname)

    const [rtitle, setTitle] = useState("");
    /* const [rauthor, setAuthor] = useState(""); */
    const [rprep_time, setPrep_time] = useState("");
    const [rcook_time, setCook_time] = useState("");
    const [rserves, setServes] = useState("");
    const [ringredients, setIngredients] = useState("");
    const [rdirections, setDirections] = useState("");
    const [rstatus, setStatus] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeTitle = (e) => setTitle(e.target.value);
    /* const onChangeAuthor = (e) => setAuthor(e.target.value); */
    const onChangePrep_time = (e) => setPrep_time(e.target.value);
    const onChangeCook_time = (e) => setCook_time(e.target.value);
    const onChangeServes = (e) => setServes(e.target.value);
    const onChangeIngredients = (e) => setIngredients(e.target.value);
    const onChangeDirections = (e) => setDirections(e.target.value);
    /* const onChangeStatus = (e) => setStatus(e.target.value); */



    



    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Recipe submitted:`);
        console.log(`NAME: ${rtitle}`);
        console.log(`EMAIL: ${rname}`);

        const recipeinfo = {

          title: rtitle,
          author: rname,
          prep_time: rprep_time,
          cook_time: rcook_time,
          serves: rserves,
          ingredients: ringredients,
          directions: rdirections,
          status: rstatus
        }

        axios.post('http://localhost:4500/emp/addrecipe', recipeinfo)
            .then(res => {
                console.log(res.data)
                setMessage('RECIPE ADDED')
            });

        setTitle('')
        /* setAuthor('') */
        setPrep_time('')
        setCook_time('')
        setServes('')
        setIngredients('')
        setDirections('')
        setStatus('Pending')
       

    }







    return (
      <div>
        <div class="container">
            <h3><center/>Upload Your Recipe <center/></h3>
            <h4 style={{ color: "brown" }}>{msg}</h4>
            <form onSubmit={handleSubmit} action="/action_page.php">
            <label for="title">Title</label>
            <input type="text" id="title" value={rtitle} onChange={onChangeTitle} name="title" placeholder="Your recipe name.."/>
            
            <label for="author">Author</label>
            <input type="text" id="author" value={rname}  name="author" />
            <label for="prep">Prep Time</label>
            <input type="number" id="prep"  value={rprep_time} onChange={onChangePrep_time} name="prep" placeholder="Prep Time.."/>
            <label for="cook">Cook Time</label>
            <input type="number" id="cook" value={rcook_time} onChange={onChangeCook_time} name="cook" placeholder="Cook Time.."/>
            <center><label for="serve">Serves</label>
            <input type="number" id="serve" value={rserves} onChange={onChangeServes} name="serve" placeholder="Total people.."/><center/><br/>
            
            <label for="status">Status</label>
            <select id="status"  name="status">
            <option value="Pending" >Pending</option>
            </select>
            <br></br>
            <label for="ingredients">Ingredients</label>
            <textarea id="ingredients" name="ingredients" value={ringredients} onChange={onChangeIngredients} placeholder="Mention ingredients.." style={{height:200}}></textarea>
            <label for="direction">Directions</label>
            <textarea id="direction" value={rdirections} onChange={onChangeDirections} name="direction" placeholder="Write recipe directions.." style={{height:200}}></textarea>
            <center/>
            <input type="submit" value="Submit"/></center>
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

      </div>
    )
  
}

export default AddRecipe
