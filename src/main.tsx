import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Routes, Route, HashRouter} from "react-router";
import Day1 from "./component/Day1.tsx";
import Day2 from "./component/Day2.tsx";
import Day3 from "./component/Day3.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Day1" element={<Day1 />} />
        <Route path="/Day2" element={<Day2 />} />
        <Route path="/Day3" element={<Day3 />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
