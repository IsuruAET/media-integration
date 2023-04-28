import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const script = document.createElement("script");
script.src = "script.min.js";
script.async = true;
document.body.appendChild(script);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
