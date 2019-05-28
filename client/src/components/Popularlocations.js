import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; //path to node_modules
import "slick-carousel/slick/slick-theme.css"; //path to node_modules
import barcelona from "./images/barcelona.jpg";
import amsterdam from "./images/amsterdam.jpg";
import newyork from "./images/newyork.jpg";
import paris from "./images/paris.jpg";
import kyoto from "./images/kyoto.jpg";
import capetown from "./images/capetown.jpg";
import srilanka from "./images/srilanka.jpg";
import morocco from "./images/morocco.jpg";
import india from "./images/india.jpg";
import singapore from "./images/singapore.jpg";
import vietnam from "./images/vietnam.jpg";
import sydney from "./images/sydney.jpg";

class Popularlocations extends Component {
  render() {
    const settings = {
      rows: 2,
      slidesToShow: 2, //shows 2 across at a time
      slidesToScroll: 2, //scrolls 2 rows of 2 (4 images at a time)
      slidesPerRow: 1, //shows block of show + scroll
      dots: true //show dot pagination
    };
    return (
      <div className="container">
        <h5>Popular MYtineraries</h5>
        <Slider {...settings}>
          <div>
            <img className="landingslickIMG" src={barcelona} alt="bcnimg" />
          </div>
          <div>
            <img className="landingslickIMG" src={amsterdam} alt="damimg" />
          </div>
          <div>
            <img className="landingslickIMG" src={newyork} alt="nycimg" />
          </div>
          <div>
            <img className="landingslickIMG" src={paris} alt="parisimg" />
          </div>
          {/* 2nd set */}
          <div>
            <img className="landingslickIMG" src={srilanka} alt="srilankaimg" />
          </div>
          <div>
            <img className="landingslickIMG" src={capetown} alt="ctownimg" />
          </div>
          <div>
            <img className="landingslickIMG2" src={kyoto} alt="kyotoimg" />
          </div>
          <div>
            <img className="landingslickIMG2" src={morocco} alt="moroccoimg" />
          </div>
          {/* 3rd set */}
          <div>
            <img className="landingslickIMG" src={india} alt="indiaimg" />
          </div>
          <div>
            <img className="landingslickIMG" src={sydney} alt="sydneyimg" />
          </div>
          <div>
            <img
              className="landingslickIMG"
              src={singapore}
              alt="singaporeimg"
            />
          </div>
          <div>
            <img className="landingslickIMG" src={vietnam} alt="vietnamimg" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Popularlocations;
