import React from 'react';
import travellingImg from "../../assets/travel1.png";
import chatImg from "../../assets/pos.png";
import chatcharImg from "../../assets/chat.png";
import comImg from "../../assets/community.png";
const UIuiproject = () => {
  return (
    <div className="projects-content">
    {/* <div className="project-card">
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


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div>
</div> */}

<div className="project-card">
<img src={chatImg} className='project-img' alt="" />
<h3 className="project-title">
Point of Sale
</h3>
<span className="project-detail">
A POS app is a crucial tool for modern businesses, enhancing efficiency, improving customer service, and providing valuable business insights through integrated features that streamline the entire sales process.

</span>
{/* <div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                Source Code{" "}
                <i className="uil uil-github-alt project-card-icon"></i>
            </a>


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div> */}
</div>

<div className="project-card">
<img src={chatcharImg} className='project-img' alt="" />
<h3 className="project-title">
Chatchar
</h3>
<span className="project-detail">
This app provides a unique and engaging way for fans to connect with beloved fictional characters, enhancing their fandom experience through realistic and personalized interactions.
  </span>
{/* <div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                Source Code{" "}
                <i className="uil uil-github-alt project-card-icon"></i>
            </a>


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div> */}
</div>

<div className="project-card">
<img src={comImg} className='project-img' alt="" />
<h3 className="project-title">
Hobbyhub
</h3>
<span className="project-detail">
A hobby-matching app connects individuals with similar interests, fostering community, collaboration, and the discovery of new hobbies. By leveraging advanced matching algorithms, social features, and activity tracking, the app enhances the hobby experience, making it easier for users to find and connect with like-minded people.
</span>
{/* <div className="project-icon">

<a href="hninsuwai180@gmail.com" className="project-button">
                Source Code{" "}
                <i className="uil uil-github-alt project-card-icon"></i>
            </a>


<a href="https://github.com/HninSuWai12" className="project-button">
                See More{" "}
                <i className="bx bx-right-arrow-alt  project-card-icon"></i>
            </a>

            
</div> */}
</div>

</div>
  )
}

export default UIuiproject
