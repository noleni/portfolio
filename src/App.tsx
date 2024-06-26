import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBarLinks from "./components/SideBarLinks";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";
import Error from "./components/pages/Error";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <SideBarLinks />
      <Footer />
    </Router>
  );
}

export default App;
