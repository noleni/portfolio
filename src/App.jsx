import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";

import "./App.scss";




function App() {
  return (
    <Router>
      <Header />
      <AllRoutes />
    </Router>
  );
}

export default App;
