import { Routes, Route } from "react-router-dom";
import NotFound from './pages/notFound';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;