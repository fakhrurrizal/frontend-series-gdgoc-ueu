import { useState } from 'react';
import BubbleChat from './components/BubbleChat';

function App() {
  const [messages, setMessages] = useState([
    { text: "Halo! Saya Asisten AI. Ada yang bisa saya bantu?", sender: "Gemini AI", isAi: true }
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { text: inputValue, sender: "You", isAi: false };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const aiResponse = { 
        text: "Pesan kamu diterima! Di Workshop Series #2, kita akan hubungkan ini ke Gemini AI yang asli.", 
        sender: "Gemini AI", 
        isAi: true 
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-white shadow-2xl border-x border-gray-200">
      
      <div className="p-4 border-b bg-indigo-600 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">G</div>
        <div>
          <h1 className="font-semibold text-lg leading-none">AI Assistant</h1>
          <span className="text-[10px] text-green-300 font-bold tracking-widest uppercase">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col">
        {messages.map((msg, index) => (
          <BubbleChat key={index} {...msg} />
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4  flex gap-2 bg-white">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tulis pesan..."
          className="flex-1 border text-black border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <button 
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default App;