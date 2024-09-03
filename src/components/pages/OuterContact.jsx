import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Contact from "./Contact";


export default function OuterContact() {
  return (
    <>
      <div style={{}} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Home</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div class="window-body">
          <menu role="tablist">
            <li role="tab">
              <a href="/about">About</a>
            </li>
            <li role="tab">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li role="tab" aria-selected="true">
              <a href="/contact" >Contact</a>
            </li>
            <li role="tab">
              <a href="/resume">Resume</a>
            </li>
          </menu>
          <div class="window" role="tabpanel">
            <div class="window-body">
              <p>Contact Page</p>
              <div className="window-body">
                <div className="field-row" style={{ justifyContent: "center" }}>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
