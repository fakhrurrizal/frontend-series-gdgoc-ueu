# 🚀 Workshop: Build Your First AI Chatbot UI
**Front-End Series #1: Introduction to ReactJS**
**GDG on Campus - Universitas Esa Unggul**

Materi ini dirancang untuk pemula yang ingin memulai perjalanan di dunia Front-End Development. Kita akan membangun antarmuka Chatbot AI yang modern, responsif, dan siap dihubungkan dengan API di masa depan.

---

## 📋 Daftar Isi
1. Setup Project (Vite)
2. Konfigurasi Tailwind CSS
3. Membuat Komponen Reusable (BubbleChat)
4. Logic Utama & State Management (App.jsx)
5. Menjalankan Aplikasi

---

## Langkah 1: Setup Project (Vite)
Buka terminal/CMD, lalu jalankan perintah berikut untuk menginisialisasi project React menggunakan Vite:

```bash
# 1. Membuat project baru
npm create vite@latest frontend-series -- --template react

# 2. Masuk ke folder project
cd frontend-series

# 3. Install dependencies dasar
npm install

## Langkah 2: Konfigurasi Tailwind CSS
Agar tampilan chatbot kita cantik dan modern tanpa perlu menulis file CSS manual yang panjang, kita akan menggunakan Tailwind CSS.

### 1. Install Tailwind CSS
Jalankan perintah berikut di terminal (pastikan kamu masih berada di dalam folder `frontend-series`):

```bash
# Install Tailwind CSS dan tools pendukungnya
npm install -D tailwindcss postcss autoprefixer

# Generate file konfigurasi (tailwind.config.js dan postcss.config.js)
npx tailwindcss init -p