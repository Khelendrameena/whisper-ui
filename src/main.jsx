import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function showError(msg) {
  document.body.innerHTML = '<div style="color:white;background:#1a1a1a;padding:20px;font-family:monospace;min-height:100vh">'
    + '<h2 style="color:#ff5555">Error:</h2><pre style="white-space:pre-wrap">' + String(msg).replace(/</g, "&lt;") + "</pre></div>";
}

window.addEventListener("error", (e) => showError(e.message + "\n" + (e.error && e.error.stack || "")));
window.addEventListener("unhandledrejection", (e) => showError("Unhandled: " + e.reason));

try {
  const root = document.getElementById("root");
  if (!root) throw new Error("No #root element found!");
  ReactDOM.createRoot(root).render(React.createElement(App));
} catch (err) {
  showError(err.message + "\n" + err.stack);
}
