import React, { Component } from 'react';
import Newcomponent from './Newcomponent';
import MYtineraryLogo from './MYtineraryLogo.png';
import circledright from './circledright.png';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (

      <div className="App"> 
       <Navbar />
      <div className="mainlogo"> 
      <img src={MYtineraryLogo}  alt="mainlogo" /> 
      </div>

      <Newcomponent />
      
      <div className="circleR"> 
       <img  src={circledright} alt="circleR" />
      </div>
    
      </div>

    );
  }
}

export default App;


