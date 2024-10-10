import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Contact from './pages/contact';

export const buildRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />z
      <Route path="/contact" element={<Contact />} />z
    </Routes>
  );
};
