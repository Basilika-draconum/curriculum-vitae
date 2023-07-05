// import logo from "./images/logo.svg";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import { Routes, Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage/ResumePage.jsx";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects" element={<AboutPage />} />
          <Route path="contact" element={<ResumePage />} />
        </Route>
        <Route path="*" element={<AboutPage />} />
      </Routes>
      ;
    </Suspense>
  );
}

export default App;
