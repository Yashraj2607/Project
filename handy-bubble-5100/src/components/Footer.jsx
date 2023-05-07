import React from "react";
// import "../../components/footer/footer.css";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="upperDiv">
        <div className="linksContainer">
          <div className="linksDiv linksDiv1">
            <p>Udemy for Business</p>
            <p>Teach on Udemy</p>
            <p>Get the app</p>
            <p>About us</p>
            <p>Contact us</p>
            <img style={{width:"70px"}} src="https://www.davidsbridal.com/media/footer/download-app-store.png" alt="" />
          </div>
          <div className="linksDiv linksDiv2">
            <p>Careers</p>
            <p>Blog</p>
            <p>Help and Support</p>
            <p>Affliate</p>
            <p>YASH ACADEMY</p>
            <img style={{width:"70px"}} src="https://www.davidsbridal.com/media/footer/download-google-play.png" alt="" />
          </div>
          <div className="linksDiv linksDiv3">
            <p>Terms</p>
            <p>Privacy policy and cookie policy</p>
            <p>Sitemap</p>
            <p>Featured courses</p>
            <p>Find Your Course</p>
            <img style={{width:"70px"}} src="https://www.davidsbridal.com/media/footer/download-google-play.png" alt="" />
          </div>
        </div>
        <div className="linksDiv linksDiv4"></div>
      </div>
      <div className="lowerDiv">
        <img src="data:image/png;base64,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" className="udemyLogo" alt="logo"></img>
        <div className="copyrightDiv">
          <p>© 2020 Udemy, Inc.</p>
        </div>
      </div>
      
    </div>

    
  );
}

export default Footer;