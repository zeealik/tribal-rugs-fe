import { buildRoutes } from './routes';
import useScrollToTop from './hooks/use-scroll-top';

function App() {
  useScrollToTop();
  return <>{buildRoutes()}</>;
}

export default App;
