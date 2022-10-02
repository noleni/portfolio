import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import SideBarLinks from "./components/SideBarLinks";

import "./App.scss";




function App() {
  return (
    <Router>
      <Header />
      <AllRoutes />
      <SideBarLinks />
    </Router>
  );
}

export default App;
