import "./scss/main.scss";
import { Home } from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Company from "./pages/company/company";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import Layout from "./layout/layout";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, mirror: true });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
