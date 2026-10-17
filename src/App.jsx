import { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-scene text-zinc-100">
      <Navbar onNav={setPage} page={page} />
      <div style={{ paddingTop: 100, textAlign: "center" }}>
        <h1>Navbar Test</h1>
        <p>If you see a navbar above, Navbar works!</p>
      </div>
    </div>
  );
}
