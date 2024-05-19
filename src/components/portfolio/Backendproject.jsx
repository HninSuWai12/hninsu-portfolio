import React from 'react'
import travellingImg from "../../assets/images.png";
import estateImg from "../../assets/real.png";
import posImg from "../../assets/pos1.jpg";
const Backendproject = () => {
  return (
    <div className="projects-content">
    <div className="project-card">
<img src={estateImg} className='project-img' alt="" />
<h3 className="project-title">
Real Estate
</h3>
<span className="project-detail">
  Real estate project for selling and rencing estate.
</span>
<div className="project-icon">

<a href="https://github.com/CreateTeam1234/RealEstate" className="project-button">
                Source Code{" "}
                <i className="uil uil-github-alt project-card-icon"></i>
            </a>


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div>
</div>

<div className="project-card">
<img src={travellingImg} className='project-img' alt="" />
<h3 className="project-title">
Blog System
</h3>
<span className="project-detail">
Blog System like Medium Platform.
</span>
<div className="project-icon">

<a href="https://github.com/HninSuWai12/BlogSystem" className="project-button">
                Source Code{" "}
                <i className="uil uil-github-alt project-card-icon"></i>
            </a>


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div>
</div>

<div className="project-card">
<img src={posImg} className='project-img' alt="" />
<h3 className="project-title">
POS System
</h3>
<span className="project-detail">
That is Point of Sale System.
</span>
<div className="project-icon">

<a href="https://github.com/HninSuWai12/Pos-System" className="project-button">
                Source Code{" "}
                <i className="uil uil-github-alt project-card-icon"></i>
            </a>


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div>
</div>

</div>
  )
}

export default Backendproject
