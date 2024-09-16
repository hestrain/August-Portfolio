import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Work from "./Work"

export default function OuterPortfolio() {
  return (
    <>
      <div style={{display:"flex", flexDirection:"column", width:"80%"}} className="window">
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
            <li role="tab"aria-selected="true">
              <a href="/portfolio" >Portfolio</a>
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
                <div className="field-row" style={{ justifyContent: "center" }}>
                  <Work />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}