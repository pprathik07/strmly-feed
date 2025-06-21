# 🎥 Strmly-Feed-Task (React + Tailwind)

A vertical, mobile-style short-video feed built using **React**, **TailwindCSS**, and HTML5 `<video>`.

This project mimics platforms like YouTube Shorts or Instagram Reels with:
- Auto-playing videos
- Pause/mute on tap
- Overlay UI (likes, shares, user info)
- Smooth snap scroll behavior
- Fully responsive design

---

## 🚀 Features

- 🔁 **Auto-play/pause** based on scroll visibility
- 🔇 **Tap to mute/unmute**
- ⏯️ **Play/Pause control**
- ❤️ Likes with toggle state
- 💬 Comments, 🔄 Shares, ₹ Tips displayed
- 📱 Mobile-friendly bottom nav
- 🧑‍🎤 Profile + Follow button
- 🔁 Snap-to-scroll fullscreen video feed

---

## 📁 Folder Structure
src/
├── components/ # UI components (VideoCard, BottomNav)

├── data/ # Mock data (video metadata)

├── hooks/ # Custom hooks (e.g., useInView for auto play)

├── App.jsx # Main app logic

├── index.css # Tailwind + custom styles

├── main.jsx # ReactDOM entry
public/
└── videos/ # Local MP4 demo files


---

## 🛠️ Tech Stack

- ⚛️ React (w/ hooks)
- 💨 Tailwind CSS
- 🎥 HTML5 `<video>`
- 📦 Vite (for fast dev setup)
- 📁 Lucide Icons

---

## 📦 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/strmly-feed.git
cd strmly-feed

npm install
npm run dev
Then visit http://localhost:5173 🚀
