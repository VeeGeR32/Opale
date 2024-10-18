import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Services from "./pages/Services";
import About from "./pages/About";
import Approche from "./pages/Approche";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/approche" element={<Approche />} />
      </Route>
    </Routes>
  );
}

export default App;
