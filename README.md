# SST Schedule App (SST Craft) 📅⛏️

A Progressive Web App (PWA) designed for Scaler School of Technology (SST) students to track college schedules, classroom locations, upcoming lectures, and break timings in real-time.

Built with three interactive UI themes, live Google Sheets synchronization, offline persistence, and Web Audio sound effects.

---

## ✨ Features

- **🔴 Live Objective Boss Card**: Shows current ongoing class, classroom venue, remaining time countdown, and next class.
- **🎨 3 Dynamic Themes**:
  - **🟩 Minecraft UI**: Blocky 3D aesthetic, 'Press Start 2P' typography, XP progress bar, stone/grass palette, and 8-bit retro sound synthesizers.
  - **💠 Minimal Clean UI**: Modern dark titanium glassmorphism, 'Plus Jakarta Sans' font, glowing cyan counters, constellation nodes, and subtle futuristic clicks.
  - **🌸 Cute Pink UI**: Strawberry milk pastel theme, 'Fredoka' rounded typography, soft ambient sakura petal flutter, and bubble audio feedback.
- **🔄 Live Google Sheets Sync**: Directly parses merged 15-minute slot intervals from the live academic timetable with automatic CORS bypass and offline fallback.
- **👥 Multi-Group Support**: Instant toggle for Groups **A, B, C, D, and E** with selection remembered across sessions via `localStorage`.
- **🛠️ Creative Mode Simulator**: Fast-forward time or test any hour of the day/week to preview schedule behavior dynamically.
- **📱 PWA & Sticky Notifications**: Background service worker with `requireInteraction: true` notifications updating class time remaining.
- **🌅 Ambient Day/Night Cycle**: Dynamic lighting engine that automatically adjusts background tones based on morning, afternoon, evening, or night.

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser or serve it via a local HTTP server:

```bash
# Using Python
python -m http.server 8080

# Or using Node.js http-server / serve
npx serve .
```

Navigate to `http://localhost:8080` in your browser.

---

## 📁 Project Structure

```
├── index.html           # Main PWA application markup
├── styles.css           # Responsive stylesheets & theme tokens
├── app.js               # Parser engine, audio synthesizer, and particle canvas
├── sw.js                # Service Worker for offline caching and notifications
├── manifest.json        # PWA Web App Manifest
├── schedule_data.json   # Fallback offline schedule cache
└── assets/              # Icons and Minecraft background graphics
```

---

## 📜 License

MIT License. Designed for students at Scaler School of Technology.
