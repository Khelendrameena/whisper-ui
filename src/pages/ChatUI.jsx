import { useEffect, useRef, useState } from "react";
import {
  Send, Smile, SkipForward, Square, Flag, Search,
  MessageCircle, ChevronLeft, MoreVertical, ShieldCheck,
} from "lucide-react";

const MOCK_MESSAGES = [
  { from: "stranger", text: "hey! where are you from? 🌍", at: "21:41" },
  { from: "you", text: "hey! india, you?", at: "21:42" },
  { from: "stranger", text: "nice, i'm from brazil 🇧🇷 do you code?", at: "21:42" },
  { from: "you", text: "yeah, full-stack dev. react + node mostly", at: "21:43" },
  { from: "stranger", text: "that's cool! i'm learning python right now, any tips for a beginner?", at: "21:44" },
];

const EMOJIS = ["😂","❤️","👍","😮","🔥","👋","🎉","🤔"];

function Avatar({ who }) {
  return who === "you" ? (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shrink-0">Y</div>
  ) : (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold text-white shrink-0">S</div>
  );
}

export default function ChatUI({ onBack }) {
  const [demo, setDemo] = useState("searching"); // searching | chatting | empty
  const [input, setInput] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (demo === "chatting") {
      setMsgs([]);
      MOCK_MESSAGES.forEach((m, i) => {
        setTimeout(() => setMsgs((p) => [...p, m]), 500 + i * 700);
      });
    } else setMsgs([]);
  }, [demo]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = () => {
    if (!input.trim() || demo !== "chatting") return;
    const now = new Date();
    setMsgs((p) => [...p, { from: "you", text: input.trim(), at: `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}` }]);
    setInput(""); setShowEmoji(false);
  };

  return (
    <div className="pt-16 min-h-screen flex flex-col">
      {/* demo switcher */}
      <div className="px-4 pt-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-xs">
          <span className="text-zinc-500 mr-1">Preview states:</span>
          {[["searching", "Searching"], ["chatting", "Chatting"], ["empty", "Empty"]].map(([id, label]) => (
            <button key={id} onClick={() => setDemo(id)}
              className={`px-3 py-1.5 rounded-full font-medium transition ${demo === id ? "bg-violet-600 text-white" : "glass text-zinc-400 hover:text-white"}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 py-4 flex">
        <div className="w-full max-w-3xl mx-auto glass-strong rounded-3xl flex flex-col overflow-hidden anim-fadeUp min-h-[540px] max-h-[calc(100vh-180px)]">
          {/* header */}
          <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <button onClick={onBack} className="icon-btn md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400">
                <ChevronLeft size={20} />
              </button>
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 items-center justify-center hidden sm:flex shadow-lg shadow-violet-600/25">
                <MessageCircle size={17} className="text-white" />
              </span>
              <div>
                <div className="text-white font-semibold text-sm flex items-center gap-2">
                  Anonymous Chat
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> online
                  </span>
                </div>
                <div className="text-zinc-500 text-xs">
                  {demo === "searching" ? "Looking for someone…" : demo === "chatting" ? "Connected · 03:24" : "Not connected"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="icon-btn w-9 h-9 rounded-lg hidden sm:flex items-center justify-center text-zinc-400 hover:text-white" title="Safety info">
                <ShieldCheck size={18} />
              </button>
              <button className="icon-btn w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white" title="More">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* body */}
          <div className="flex-1 overflow-y-auto chat-scroll px-4 md:px-5 py-5">
            {demo === "searching" && (
              <div className="h-full flex flex-col items-center justify-center py-14">
                <div className="relative w-20 h-20 mb-6">
                  <div className="pulse-ring absolute inset-0 rounded-full border-2 border-violet-500" />
                  <div className="pulse-ring absolute inset-0 rounded-full border-2 border-violet-500" style={{ animationDelay: ".5s" }} />
                  <div className="absolute inset-0 glass rounded-full flex items-center justify-center">
                    <Search size={26} className="text-violet-300" />
                  </div>
                </div>
                <p className="text-white font-semibold mb-1">Looking for someone…</p>
                <p className="text-zinc-500 text-sm mb-6">Matching you with a random stranger</p>
                {/* skeleton preview */}
                <div className="w-full max-w-sm space-y-2.5 opacity-60">
                  <div className="skeleton h-11 rounded-2xl rounded-bl-md w-3/4" />
                  <div className="skeleton h-11 rounded-2xl rounded-br-md w-2/3 ml-auto" />
                  <div className="skeleton h-11 rounded-2xl rounded-bl-md w-1/2" />
                </div>
              </div>
            )}

            {demo === "empty" && (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center mb-5">
                  <MessageCircle size={32} className="text-zinc-500" />
                </div>
                <p className="text-white font-semibold text-lg mb-1">Your next conversation starts here.</p>
                <p className="text-zinc-500 text-sm max-w-xs">Press <span className="text-violet-300 font-medium">Next Stranger</span> below to meet someone new.</p>
              </div>
            )}

            {demo === "chatting" && (
              <>
                <div className="flex justify-center mb-5">
                  <span className="glass text-zinc-400 text-[11px] px-4 py-1.5 rounded-full">You're chatting with <b className="text-zinc-200">Stranger</b> · say hi! 👋</span>
                </div>
                {msgs.map((m, i) => (
                  <div key={i} className={`flex mb-3 anim-fadeUp ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                    {m.from !== "you" && <div className="mr-2 self-end"><Avatar who="stranger" /></div>}
                    <div className={`max-w-[78%] sm:max-w-[70%] ${m.from === "you" ? "ml-10" : "mr-10"}`}>
                      <div className={`text-[11px] font-semibold mb-1 px-1 ${m.from === "you" ? "text-right text-blue-300" : "text-violet-300"}`}>
                        {m.from === "you" ? "You" : "Stranger"}
                      </div>
                      <div className={`px-4 py-2.5 text-[14.5px] leading-relaxed shadow-md ${
                        m.from === "you"
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-br-md"
                          : "glass text-zinc-100 rounded-2xl rounded-bl-md"
                      }`}>
                        {m.text}
                      </div>
                      <div className={`text-[10px] text-zinc-600 mt-1 px-1 ${m.from === "you" ? "text-right" : ""}`}>{m.at}</div>
                    </div>
                    {m.from === "you" && <div className="ml-2 self-end"><Avatar who="you" /></div>}
                  </div>
                ))}
                {/* typing indicator */}
                <div className="flex mb-2">
                  <div className="mr-2 self-end"><Avatar who="stranger" /></div>
                  <div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5 items-center">
                    <span className="tdot w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                    <span className="tdot w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                    <span className="tdot w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                  </div>
                </div>
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* controls */}
          <div className="px-4 md:px-5 py-2.5 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto">
            <button className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 glass px-3.5 py-2 rounded-xl hover:bg-white/[0.09] transition whitespace-nowrap">
              <SkipForward size={14} className="text-violet-300" /> Next Stranger
            </button>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 glass px-3.5 py-2 rounded-xl hover:bg-white/[0.09] transition whitespace-nowrap">
              <Square size={13} className="text-zinc-400" /> Stop Chat
            </button>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 glass px-3.5 py-2 rounded-xl hover:text-red-300 hover:bg-red-500/10 transition whitespace-nowrap ml-auto">
              <Flag size={13} /> Report
            </button>
          </div>

          {/* input */}
          <div className="px-4 md:px-5 py-3 border-t border-white/[0.06] bg-black/20">
            {showEmoji && (
              <div className="glass rounded-xl p-2 mb-2 flex gap-1 flex-wrap anim-fadeUp">
                {EMOJIS.map((e) => (
                  <button key={e} onClick={() => setInput((v) => v + e)}
                    className="text-xl p-1.5 hover:bg-white/10 rounded-lg transition">{e}</button>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <button onClick={() => setShowEmoji(!showEmoji)}
                className="icon-btn shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-yellow-300"
                title="Emoji">
                <Smile size={20} />
              </button>
              <input
                value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type your message..."
                maxLength={500}
                disabled={demo !== "chatting"}
                className="flex-1 glass rounded-xl px-4 text-white text-[15px] placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/15 disabled:opacity-40 transition"
              />
              <button onClick={send} disabled={demo !== "chatting" || !input.trim()}
                className="btn-primary shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                title="Send">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
