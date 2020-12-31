import React from 'react'
export default function Footer()
{
    return(
  <div>
  <div className="follow-us-instagram">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h5>Follow Us Instragram</h5>
        </div>
      </div>
    </div>
    {/* Instagram Feeds */}
    <div className="insta-feeds d-flex flex-wrap">
      {/* Single Insta Feeds */}
      <div className="single-insta-feeds">
        <img src="img/bg-img/insta1.jpg" width="190" height="160" alt />
        <img src="img/bg-img/insta2.jpg" width="190" height="160"  alt />
        <img src="img/bg-img/insta3.jpg" width="190" height="160" alt />
        <img src="img/bg-img/insta4.jpg" width="190" height="160" alt />
        <img src="img/bg-img/insta5.jpg" width="190" height="160" alt />
        <img src="img/bg-img/insta6.jpg"  width="190" height="160"alt />
        <img src="img/bg-img/insta7.jpg" width="190" height="160" alt />
      </div>
    </div>
  </div>
</div>


    )
}
