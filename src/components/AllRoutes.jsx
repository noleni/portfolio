import { Routes, Route } from 'react-router';
import Home from "./pages/Home";
import Projects from './pages/Projects';

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
    </Routes>
  )
};

export default AllRoutes;
