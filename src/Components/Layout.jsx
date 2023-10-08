import React from "react";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout() {
  return (
    <div className="section layout bg-light">
      <div className="container">
        <div className="row head">
          <div className="col-md-3 colHeadLorem">
            <h3>LOREM IPSUM</h3>
          </div>
          <div className="col-md-9 colHeadLink">
            <a href="/" className="link">
              LINK1
            </a>
          </div>
        </div>

        <div className="row center">
          <div className="col-md-6 colCenter">
            <h3 className="centerHead">
              THIS IS SOME CONTENT ALIGNED IN THS CENTER
              <br /> VERTICALLY AND HORIZONTALLY
            </h3>
          </div>
          <div className="col-md-6 colCenter"></div>
        </div>

        <div className="row footer">
          <div className="col-md-12 colFooter">
            <h3>
              THIS IS THE FOOTER CONTENT WHICH IS ALIGNED
              <br />
              <span className="left">LEFT</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
