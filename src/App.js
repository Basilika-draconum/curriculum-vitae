import { ColorRing } from "react-loader-spinner";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage.jsx"));
const ResumePage = lazy(() => import("./pages/ResumePage/ResumePage.jsx"));
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage/ProjectsPage.jsx")
);
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage.jsx"));

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      }
    >
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
