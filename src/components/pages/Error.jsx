import React from "react";

export default function Error() {
  return (
    <>
      <div style={{width:"80%", textAlign:"center",}} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Home</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
          <menu role="tablist">
            <li role="tab">
              <a href="/about">About</a>
            </li>
            <li role="tab">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li role="tab">
              <a href="/contact">Contact</a>
            </li>
            <li role="tab">
              <a href="/resume">Resume</a>
            </li>
          </menu>
          <div className="window" role="tabpanel">
            <div className="window-body">
              <div className="window-body">
                <div
                  className="field-row"
                  style={{ justifyContent: "center", flexDirection: "column" }}
                >
                  <p>
                    <h1>404 ERROR: </h1>
                  </p>
                  <br></br>
                  <p>
                    <h3>Page Not Found</h3>
                  </p>
                  <p style={{fontSize:"medium", fontFamily:"Arial, Helvetica, sans-serif"}}>Choose a tab above to go back to safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
