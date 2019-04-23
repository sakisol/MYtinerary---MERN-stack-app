import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Popularlocations from './components/Popularlocations';



class App extends Component {
  render() {
    return (
      <div className="App"> 
       <Navbar />
      <Landingpage />
      <Popularlocations />
      </div>

    );
  }
}

export default App;


