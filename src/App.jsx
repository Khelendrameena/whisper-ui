import { MessageCircle } from "./components/Icons";
export default function App() {
  return (
    <div style={{ background: "#080810", color: "white", minHeight: "100vh", padding: 40 }}>
      <h1>Icon Test</h1>
      <MessageCircle size={32} className="test" />
      <p>If you see an icon above, Icons work!</p>
    </div>
  );
}
