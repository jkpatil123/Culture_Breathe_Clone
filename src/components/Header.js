import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="navbar">
    <div className="header">
      <div className="headertop">
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flogomaster.ai%2Fhs-fs%2Fhubfs%2Fgaming%2520logo%2520The%2520Power%2520of%2520a%2520Great%2520Logo.jpg%3Fwidth%3D1700%26height%3D1148%26name%3Dgaming%2520logo%2520The%2520Power%2520of%2520a%2520Great%2520Logo.jpg&tbnid=Af39upyzPPVdAM&vet=12ahUKEwja9ZKu8--CAxXWcmwGHSz-DToQMygDegQIARB6..i&imgrefurl=https%3A%2F%2Flogomaster.ai%2Flogo-ideas%2Fgaming-logo-maker&docid=ZUEL9YNcljR63M&w=1700&h=1148&q=logo%20maker&ved=2ahUKEwja9ZKu8--CAxXWcmwGHSz-DToQMygDegQIARB6" />
        <p className="header-top">Milton</p>
      </div>
      <div className="nav">
        <ul>
          <li>Features</li>
          <li>Testimonial</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Blog</li>
        </ul>

        
      </div>
      <div className="button" >
            <button className="btn1">Log in</button>
            <button className="btn2">Get started</button>
        </div>
    </div>
    </div>
  );
};

export default Header;
