# Front-End Series #1
**Introduction to ReactJS**
**GDG on Campus - Universitas Esa Unggul**

---

## Langkah 1: Setup Project (Vite)
Buka terminal/CMD, lalu jalankan perintah berikut untuk menginisialisasi project React menggunakan Vite:

```bash
# 1. Membuat project baru
npm create vite@latest frontend-series -- --template react

# 2. Masuk ke folder project
cd frontend-series

# 3. Tes project
npm run dev
```

## Langkah 2: Konfigurasi Tailwind CSS
Agar tampilan chatbot kita cantik dan modern tanpa perlu menulis file CSS manual yang panjang, kita akan menggunakan Tailwind CSS.

### 1. Install Tailwind CSS
Jalankan perintah berikut di terminal (pastikan kamu masih berada di dalam folder `frontend-series`):

```bash
# Install Tailwind CSS dan tools pendukungnya
npm install tailwindcss @tailwindcss/vite

```
### 2. Tambahkan plugin @tailwindcss/vite ke konfigurasi Vite (vite.config.js).
```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
        react(),
        tailwindcss(),
    ],
})
```

### 3. Tambahkan @import ke file index.css yang mengimpor Tailwind CSS.
```bash
@import "tailwindcss";

## Kamu bisa hapus semua styling bawaan di index.css agar kita bisa custom sendiri
```

---

## Langkah 3: Membuat Komponen Reusable (BubbleChat)
Dalam React, kita memecah UI menjadi potongan kecil yang bisa dipakai berulang kali. Kita akan membuat komponen khusus untuk menampilkan balon percakapan.

### 1. Buat Folder & File Komponen
Buat folder `src/components`, lalu buat file `BubbleChat.jsx`.

### 2. Isi Kode BubbleChat.jsx
```jsx
import React from 'react';

const BubbleChat = ({ text, sender, isAi }) => {
  return (
    <div className={`flex w-full mb-4 ${isAi ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
        isAi 
        ? 'bg-white text-gray-800 rounded-tl-none border border-gray-200' 
        : 'bg-indigo-600 text-white rounded-tr-none'
      }`}>
        <p className="text-[10px] font-bold uppercase mb-1 opacity-60">
          {sender}
        </p>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default BubbleChat;
```

---

## Langkah 4: Logic & Main UI (App.jsx)
Sekarang kita akan merakit semuanya di file utama. Kita akan menggunakan useState untuk menyimpan percakapan.

### 1. Buat Folder & File Komponen
Buka `src/App.jsx` dan ganti isinya dengan:

### 2. Isi Kode App.jsx
```jsx
import { useState } from 'react';
import BubbleChat from './components/BubbleChat';

function App() {
  const [messages, setMessages] = useState([
    { text: "Halo! Saya Asisten AI. Ada yang bisa saya bantu?", sender: "Gemini AI", isAi: true }
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { text: inputValue, sender: "You", isAi: false };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = { 
        text: "Pesan kamu diterima! Di Workshop Series #2, kita akan hubungkan ini ke Gemini AI yang asli.", 
        sender: "Gemini AI", 
        isAi: true 
      };
      setMessages((prev) => [...prev, aiResponse]);
      
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen pb-3 mx-auto bg-white shadow-2xl border-x border-gray-200">   {/* Tambahkan max-w-lg jika diperlukan ya*/}
   
      <div className="p-4 border-b bg-indigo-600 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">G</div>
        <div>
          <h1 className="font-semibold text-lg leading-none">AI Assistant</h1>
          <span className="text-[10px] text-green-300 font-bold tracking-widest uppercase">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-2">
        {messages.map((msg, index) => (
          <BubbleChat key={index} {...msg} />
        ))}

        {isTyping && (
          <div className="flex flex-col items-start mb-4">
            <span className="text-xs text-gray-500 ml-2 mb-1">Gemini AI sedang mengetik...</span>
            <div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="p-4 flex gap-2 bg-white">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tulis pesan..."
          disabled={isTyping} 
          className="flex-1 border text-black border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:bg-gray-100"
        />
        <button 
          type="submit"
          disabled={isTyping} 
          className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md disabled:bg-indigo-300"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default App;
```

---

## Langkah 5: Final Check & Running
Terakhir, pastikan semua file sudah tersimpan, lalu jalankan project kamu

```bash
npm run dev
```