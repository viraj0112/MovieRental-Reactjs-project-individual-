import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-info">
          <h6>
            Questions? Contact :<a href="#">MovieRental@example.com</a> /
            +91-000-000-0000
          </h6>
          <div className="table1">
            <h6>FAQ</h6>
            <br />
            <h6>Investor Relations</h6>
            <br />
            <h6>MovieRental Originals</h6>
            <br />
            <h6>Corporation Information</h6>
            <div className="table2">
              <h6>Help Center</h6>
              <br />
              <h6>Jobs</h6>
              <br />
              <h6>Terms of Use</h6>
              <br />
              <h6>Contact Us</h6>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">Column</div>
              <div class="col">Column</div>
              <div class="col">Column</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
