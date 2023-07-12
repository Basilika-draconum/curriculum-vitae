// import logo from "./images/logo.svg";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ResumePage from "./pages/ResumePage/ResumePage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
