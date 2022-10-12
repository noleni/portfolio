import { Routes, Route } from 'react-router';
import Main from "./pages/Main";
import Error from './pages/Error';

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      {/* <Route exact path="/projects" element={<Projects />} /> */}
      <Route exact path="*" element={<Error />} />
    </Routes>
  )
};

export default AllRoutes;
