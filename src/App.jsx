import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import "./index.css";
export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-scene text-zinc-100">
      <Navbar onNav={setPage} page={page} />
      <Landing onStart={() => setPage("chat")} />
    </div>
  );
}
