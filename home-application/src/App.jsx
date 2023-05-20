import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";

import "./index.css";

const App = () => (
  <div className="container">
    <Header app={{name: 'Home'}}/>
    <div>
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
