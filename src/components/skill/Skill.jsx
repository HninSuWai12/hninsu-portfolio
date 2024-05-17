import React from 'react';
import "./skill.css";
import Frontend from './Frontend';
import Backend from './Backend';
// import UIux from './UIux';
const Skill = () => {
  return (
    <div className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">
            My technical level
        </span>
        <div className="skills-container container grid">
        <Frontend/>
        <Backend/>
        {/* <UIux/> */}
        </div>
    </div>
  )
}

export default Skill
