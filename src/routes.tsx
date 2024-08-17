import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';

export const buildRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
    </Routes>
  );
};
