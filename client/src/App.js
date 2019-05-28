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
          <div id="outer-container">
            <Navbar />

            <main id="page-wrap">
              <Route exact path="/" component={Landingpage} />
              <Route path="/login" component={Login} />
              <Route path="/createaccount" component={Createaccount} />
              {/* <Landingpage /> */}
              {/* <Popularlocations /> */}
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
