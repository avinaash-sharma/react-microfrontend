import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SafeComponent from "./SafeComponent";
const Footer = React.lazy(() => import("home/Footer"));
const Header = React.lazy(() => import("home/Header"));
import PDPContent from "./PDPContent";

import "./index.css";

const App = () => {
  return (
    <Router>
    <div className="container">
      <Suspense fallback={<div>Loading..</div>}>
        <SafeComponent>
          <Header app={{name: 'Product Application'}} />
        </SafeComponent>
      </Suspense>
      <Routes>
            <Route path="product/:id" element={<PDPContent />} />
            </Routes>
      
      <Suspense fallback={<div>Loading..</div>}>
        <Footer />
      </Suspense>
    </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
