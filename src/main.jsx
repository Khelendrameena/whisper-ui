import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function showError(msg) {
  document.getElementById("root").innerHTML = '<div style="color:#fff;background:#222;padding:24px;font-family:monospace;min-height:100vh"><h2 style="color:#f55">JS Error:</h2><pre style="white-space:pre-wrap;font-size:14px">' + String(msg).replace(/</g,"&lt;") + "</pre></div>";
}
window.addEventListener("error", function(e){ showError((e.message||"unknown") + "\n" + ((e.error&&e.error.stack)||"")); });
window.addEventListener("unhandledrejection", function(e){ showError("Promise: "+e.reason); });

try {
  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
} catch(err) {
  showError(err.message + "\n" + err.stack);
}
