import { ShieldCheck, Users, MessageSquare, Zap, EyeOff, Globe2 } from "lucide-react";

const FEATURES = [
  { icon: EyeOff, title: "Anonymous Chat", desc: "No accounts, no names, no tracking. Just pure conversation." },
  { icon: Users, title: "Meet New People", desc: "Get matched with random strangers from around the world." },
  { icon: MessageSquare, title: "Text Only", desc: "Focused, distraction-free text conversations." },
];

const STATS = [
  { icon: Zap, value: "2.4s", label: "Avg. match time" },
  { icon: Globe2, value: "140+", label: "Countries" },
  { icon: ShieldCheck, value: "100%", label: "Anonymous" },
];

export default function Landing({ onStart }) {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative px-4 pt-16 md:pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="anim-fadeUp inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-zinc-300 text-xs font-medium">12,483 people online now</span>
          </div>
          <h1 className="anim-fadeUp anim-d1 text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            Talk to Strangers.<br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Make Real Connections.
            </span>
          </h1>
          <p className="anim-fadeUp anim-d2 text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Anonymous random text chatting with strangers worldwide. No signup, no profile —
            just hit start and meet someone new.
          </p>
          <div className="anim-fadeUp anim-d3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onStart} className="btn-primary text-white font-bold px-10 py-4 rounded-2xl text-base w-full sm:w-auto">
              Start Chatting →
            </button>
            <button className="glass text-zinc-200 font-semibold px-8 py-4 rounded-2xl text-base w-full sm:w-auto hover:bg-white/[0.08] transition">
              How it works
            </button>
          </div>
          <div className="anim-fadeUp anim-d3 grid grid-cols-3 gap-3 md:gap-6 mt-12 max-w-lg mx-auto">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-2xl py-4 px-2">
                <Icon size={18} className="text-violet-400 mx-auto mb-1.5" />
                <div className="text-white font-bold">{value}</div>
                <div className="text-zinc-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Why Whisper?</h2>
          <p className="text-zinc-500 text-center mb-8 text-sm">Designed for genuine, spontaneous conversation.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className={`glass rounded-2xl p-6 anim-fadeUp anim-d${i + 1} hover:bg-white/[0.07] transition group`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon size={20} className="text-violet-300" />
                </div>
                <h3 className="text-white font-semibold mb-1.5">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-600/25 blur-[80px] rounded-full" />
          <h2 className="relative text-white text-2xl md:text-3xl font-bold mb-3">Your next conversation starts here.</h2>
          <p className="relative text-zinc-400 text-sm mb-6">Join thousands chatting right now. Free forever.</p>
          <button onClick={onStart} className="relative btn-primary text-white font-bold px-10 py-3.5 rounded-2xl">
            Start Chatting →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-4 py-8 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
              <MessageCircle size={15} className="text-white" />
            </span>
            <span className="text-zinc-400 text-sm">© 2026 Whisper</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <button key={l} className="text-zinc-500 hover:text-white transition">{l}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
