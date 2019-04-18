import React, { Component } from 'react';
import MYtineraryLogo from '../MYtineraryLogo.png';
import circledright from '../circledright.png';


class Landingpage extends Component {
    render (){
        return (

     <div className="landing" > 
        <div className="logo"> 
        <img  className="mainlogo" src={MYtineraryLogo}  alt="mainlogo" /> 
        </div>

        <div>
        <p className="maintext">Find your perfect trip, designed by insiders 
      who know and love their cities.
        </p>
        </div>

        <div className="circle" > 
        <img className="circleR" src={circledright} alt="circleR" />
        </div>

    </div>
        )
    }
}
export default Landingpage