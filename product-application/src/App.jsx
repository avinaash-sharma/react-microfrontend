import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const Footer = React.lazy(() => import("home/Footer"));
const Header = React.lazy(() => import("home/Header"));

import "./index.css";

const App = () => {
  return(
  <div className="container">
    <Suspense fallback={<div>Loading..</div>}>
      <Header />
    </Suspense>
    <div>Product Application</div>
    <Suspense fallback={<div>Loading..</div>}>
      <Footer />
    </Suspense>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
