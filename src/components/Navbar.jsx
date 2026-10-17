import { useState } from "react";
import { Moon, Sun, MessageCircle, Menu, X } from "./Icons";

export default function Navbar({ onNav, page }) {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "chat", label: "Live Demo" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNav("home")} className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
            <MessageCircle size={19} className="text-white" />
          </span>
          <span className="text-white font-bold text-lg tracking-tight">Whisper</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.id} onClick={() => onNav(l.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                page === l.id ? "text-white bg-white/10" : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}>{l.label}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => { setDark(!dark); document.documentElement.classList.toggle("dark"); }}
            className="icon-btn w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white" title="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => onNav("chat")}
            className="btn-primary hidden sm:block text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
            Start Chatting
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden icon-btn w-9 h-9 rounded-lg flex items-center justify-center text-zinc-300">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-t border-white/[0.06] px-4 py-3 space-y-1 anim-fadeUp">
          {links.map((l) => (
            <button key={l.id} onClick={() => { onNav(l.id); setOpen(false); }}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
