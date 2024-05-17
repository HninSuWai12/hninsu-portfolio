import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
    const [toggleState , SetToggleState] = useState(1);
    const toggleTab = (index) => {
        SetToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personal journey</span>
        <div className="qualification-container container">
            <div className="qualification-tabs">
                <div className={ toggleState === 1 ? "qualification-button qualification-active button-flex" : "qualification-button  button-flex"} onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification-icon"></i>
                    Education
                </div>

                <div className={ toggleState === 2 ? "qualification-button qualification-active button-flex" : "qualification-button  button-flex"} onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification-icon"></i>
                    Experience
                </div>
            </div>
            <div className="qualification-sections">
                <div className={toggleState ===1 ? "qualification-content qualification-content-active" : "qualification-content "}>
                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Computer Science </h3>
                                <span className="qualification-subtitle">
                                University of Computer Studies Mandalay
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt "></i> 2016 Dec - 2019 April
                                </div>
                           
                        </div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>
                    <div className="qualification-data">
                        <div></div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                        <div>
                            <h3 className="qualification-title">Full stack Web Development</h3>
                                <span className="qualification-subtitle">
                                Code Lab
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt "> </i>2020 Dec - 2021 june
                                </div>
                           
                        </div>
                       
                    </div>
                    <div className="qualification-data">
                        
                        
                        <div>
                            <h3 className="qualification-title">Web Design and Development</h3>
                                <span className="qualification-subtitle">
                                Fairway Technology
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt "> </i>2022 Dec - 2023 March
                                </div>
                           
                        </div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                       
                    </div>
                </div>

              
                <div
            className={toggleState ===2 ? "qualification-content qualification-content-active" : "qualification-content "}
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Junior Backend Developer
                </h3>
                <span className="qualification-subtitle">ILBC, Edtech</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 Jun - 2023 Sep
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">
                  Laravel Developer (Freelance)
                </h3>
                <span className="qualification-subtitle">
                  Collborate with Create Team
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 Dec
                </div>
                
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Junior UI/UX Designer
                </h3>
                <span className="qualification-subtitle">
                  Digital Copilot
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 Feb - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>

              


            </div>
        </div>
    </section>
  )
}

export default Qualification
