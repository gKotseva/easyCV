import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CVProvider } from "./context/CV.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <CVProvider>
        <App />
      </CVProvider>
    </BrowserRouter>
  </>
);
