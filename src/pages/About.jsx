import { Info } from "lucide-react";

export default function About({ onBack }) {
  return (
    <div className="pt-16 px-4">
      <div className="max-w-2xl mx-auto py-12">
        <div className="glass rounded-3xl p-8 anim-fadeUp">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-violet-500/25 flex items-center justify-center mb-5">
            <Info size={22} className="text-violet-300" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-4">About Whisper</h1>
          <div className="space-y-4 text-zinc-400 text-[15px] leading-relaxed">
            <p>
              Whisper is an anonymous random text-chatting experience. We believe the best
              conversations happen when nobody knows who you are — no profiles, no followers,
              no pressure.
            </p>
            <p>
              Every chat is ephemeral: when either person disconnects, the conversation
              vanishes. Nothing is stored, nothing is sold.
            </p>
            <p>
              This page is a <span className="text-zinc-200 font-medium">UI/UX design prototype</span> —
              all states shown here are static mock data for design preview.
            </p>
          </div>
          <button onClick={onBack} className="btn-primary text-white font-semibold px-6 py-3 rounded-xl mt-6 text-sm">
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
