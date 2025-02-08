import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Layout from "./Layout.jsx";
import About from "./Components/About/About.jsx";
import Skill from "./Components/Skill/Skill.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Resume from "./Components/Resume/Resume.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import RightSideMain from "./Components/RightSide/RightSideMain.jsx";
import Combine from "./Components/Combine/Combine.jsx";


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Combine />}>
      <Route index element={<About />} />
      <Route path="Skill" element={<Skill />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />  */}
    <RouterProvider router={route} />
  </StrictMode>
);
