# 🚀 Workshop: Build Your First AI Chatbot UI
**Front-End Series #1: Introduction to ReactJS**
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

### 3. Tambahkan @import ke file CSS yang mengimpor Tailwind CSS.
```bash
@import "tailwindcss";
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