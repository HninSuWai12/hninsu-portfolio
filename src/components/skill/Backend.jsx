import React from "react";

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend </h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">PHP</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          {/* <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Java</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div> */}

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Laravel</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Database</h3>
              <span className="skills-level">intermediate</span>
            </div>
          </div>

          {/* <div className="skills-data">
                <i className="bx bx-badge-check"></i>
                <div >
                    <h3 className="skills-name">AWS</h3>
                    <span className="skills-level">Basic</span>
                </div>
                </div> */}

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Git</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
