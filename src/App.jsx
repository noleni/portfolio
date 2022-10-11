import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import SideBarLinks from "./components/SideBarLinks";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <AllRoutes />
      <SideBarLinks />
      <Footer />
    </Router>
  );
}

export default App;
