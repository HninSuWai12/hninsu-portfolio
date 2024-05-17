import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Hnin Su Wai</h1>
            <ul className="footer-list">
            <li>
                <a href="#about" className="footer-link">About</a>
            </li>
            <li>
                <a href="#projects" className="footer-link">Projects</a>
            </li>
            <li>
                <a href="#portfolio" className="footer-link">Portfolio</a>
            </li>
            </ul>

            <div className="footer-social">
            <a href="https://www.instagram.com/su40860?igsh=ZzZtb2dweGpkMHcz" target='blank' className="home-social-icon" >
        <i className="uil uil-instagram footer-social-link"></i>
        </a>

        {/* <a href="https://dribbble.com/HNIN123" target='blank' className="home-social-icon" >
        <i className="uil uil-dribble"></i>
        </a> */}
        <a
        href="https://www.linkedin.com/in/hnin-su-wai-a7629a268/"
        target='blank'
        className="home-social-icon "
      >
        <i className="uil uil-linkedin-alt footer-social-link"></i>
      </a>
        
        <a href="https://github.com/HninSuWai12" target='blank' className="home-social-icon" >
        <i className="uil uil-github-alt footer-social-link"></i>
   
        </a>
            </div>
        <span className="footer-copy">
            &#169; Hnin Su Wai. All rights reserved
        </span>
        </div>
    </footer>
  )
}

export default Footer
