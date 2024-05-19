import React from 'react'
import travellingImg from "../../assets/travel.jpg"
import yogaImg from "../../assets/yoga.png";
import adminImg from "../../assets/admin.png";
import storeImg from "../../assets/store.png";

const Frontendproject = () => {
  return (
    <div className="projects-content">
        <div className="project-card">
    <img src={travellingImg} className='project-img' alt="" />
    <h3 className="project-title">
    Travelling Template
</h3>
<span className="project-detail">
    Travelling Template that is to solve problem at travel.
</span>
<div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                    Source Code{" "}
                    <i className="uil uil-github-alt project-card-icon"></i>
                </a>


<a href="https://travel-design.vercel.app/" className="project-button">
                    Go website{" "}
                    <i className="bx bx-right-arrow-alt  project-card-icon"></i>
                </a>

                
</div>
    </div>

    <div className="project-card">
    <img src={yogaImg} className='project-img' alt="" />
    <h3 className="project-title">
    Yoga Website
</h3>
<span className="project-detail">
    Yoga Website template.
</span>
<div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                    Source Code{" "}
                    <i className="uil uil-github-alt project-card-icon"></i>
                </a>


<a href="https://subtle-pithivier-1723a0.netlify.app/" className="project-button">
                    Go website{" "}
                    <i className="bx bx-right-arrow-alt  project-card-icon"></i>
                </a>

                
</div>
    </div>

    <div className="project-card">
    <img src={adminImg} className='project-img' alt="" />
    <h3 className="project-title">
    Admin Dashboard(React)
</h3>
<span className="project-detail">
    Dashboard for admin.
</span>
<div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                    Source Code{" "}
                    <i className="uil uil-github-alt project-card-icon"></i>
                </a>


<a href="https://ant-design-ashy.vercel.app/" className="project-button">
                    Go website{" "}
                    <i className="bx bx-right-arrow-alt  project-card-icon"></i>
                </a>

                
</div>
    </div>
    <div className="project-card">
    <img src={storeImg} className='project-img' alt="" />
    <h3 className="project-title">
    Fake store(React)
</h3>
<span className="project-detail">
    Website for store shop.
</span>
<div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                    Source Code{" "}
                    <i className="uil uil-github-alt project-card-icon"></i>
                </a>


<a href="https://fake-store-five-swart.vercel.app/" className="project-button">
                    Go Website{" "}
                    <i className="bx bx-right-arrow-alt  project-card-icon"></i>
                </a>

                
</div>
    </div>

    </div>
  )
}

export default Frontendproject
