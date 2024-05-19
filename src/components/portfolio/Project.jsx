import React, { useState } from 'react';
import "./project.css";
import Frontendproject from './Frontendproject';
import Backendproject from './Backendproject';
import UIuiproject from './UIuiproject';
const Project = () => {
  const [toggleState , SetToggleState] = useState(1);
  const ToggleTab = (index) => {
    SetToggleState(index);
  }
  return (
    <div className="projects section" id="portfolio">
    <h2 className="section-title">Projects</h2>
    <span className="section-subtitle">
      My Project Experience
    </span>
    <div className="project-container container grid">
      <div className="project-tabs">
        <div className={
          toggleState === 1? "project-tab-title project-tab-title-active button-flex" : "project-tab-title button-flex"
        } onClick={()=>ToggleTab(1)}>
        Backend
        </div>
        <div className={
          toggleState === 2? "project-tab-title project-tab-title-active button-flex" : "project-tab-title button-flex" } onClick={()=>ToggleTab(2)}>
          Frontend
        </div>
        <div className={
          toggleState === 3? "project-tab-title project-tab-title-active button-flex" : "project-tab-title button-flex" } onClick={()=>ToggleTab(3)}>
          UI/UX
        </div>
      </div>
      <div className="project-sections">
        <div className={
          toggleState === 1? "project-main-content project-main-content-active " : "project-main-content " }>
          <div className="project-data">
          <Backendproject/>
          </div>
          
        </div>
        <div className={
          toggleState === 2? "project-main-content project-main-content-active " : "project-main-content " }>
          <div className="project-data">
          <Frontendproject/>
          </div>
          
        </div>
        <div className={
          toggleState === 3? "project-main-content project-main-content-active " : "project-main-content " }>
          <div className="project-data">
          <UIuiproject/>
          </div>
          
        </div>
      </div>
   
   
    

    </div>
   </div>

    
  )
}

export default Project
