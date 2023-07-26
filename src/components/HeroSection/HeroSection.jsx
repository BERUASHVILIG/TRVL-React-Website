import React from "react";
import "../../App.css";
import "./HeroSection.css";
import { Button } from "../sub-component/Button/Button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>ADVANTURE AWAITS</h1>
      <p>what are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
