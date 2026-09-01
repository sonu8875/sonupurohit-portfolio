import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";

import HomePage from "./component/HomePage";
import ProjectsPage from "./pages/ProjectPage";
import QualificationPage from "./pages/QualificationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HireMePage from "./pages/HireMePage.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/projects" element={<ProjectsPage />} />

      <Route
        path="/qualification"
        element={<QualificationPage />}
      />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/hireme" element={<HireMePage />} />
    </Routes>
  );
}

export default App;