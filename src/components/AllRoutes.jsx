import { Routes, Route } from 'react-router';
import Main from "./pages/Main";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      {/* <Route exact path="/projects" element={<Projects />} /> */}
    </Routes>
  )
};

export default AllRoutes;
