import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
// import Popularlocations from "./components/Popularlocations";

import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import Createaccount from "./components/Createaccount";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landingpage} />
          <Route path="/login" component={Login} />
          <Route path="/createaccount" component={Createaccount} />
          {/* <Landingpage /> */}
          {/* <Popularlocations /> */}
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
