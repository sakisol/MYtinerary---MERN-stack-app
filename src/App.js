import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';



class App extends Component {
  render() {
    return (
      <div className="App"> 
       <Navbar />
      <Landingpage />
      </div>

    );
  }
}

export default App;


