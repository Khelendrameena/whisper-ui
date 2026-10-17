import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import ChatUI from "./pages/ChatUI";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-scene text-zinc-100">
      <Navbar onNav={setPage} page={page} />
      {page === "home" && <Landing onStart={() => setPage("chat")} />}
      {page === "about" && <About onBack={() => setPage("home")} />}
      {page === "chat" && <ChatUI onBack={() => setPage("home")} />}
    </div>
  );
}
