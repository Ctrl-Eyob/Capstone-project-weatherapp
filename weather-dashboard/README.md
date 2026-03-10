# 🌦️ Weather Dashboard     Modern React Weather Application

A beautifully designed, fully responsive Weather Dashboard built with **React + Vite + Tailwind CSS**, powered by the **OpenWeatherMap API**.

This project demonstrates clean architecture, reusable component design, API integration, data visualization, and modern UI/UX practices ready for production deployment.

---

## 🚀 Live Demo

🔗 **Deployed on Vercel:**  
https://capstone-project-weatherapp.vercel.app/  

---

## ✨ Preview
<img width="1354" height="670" alt="Screenshot 2026-03-10 141853" src="https://github.com/user-attachments/assets/70ebb11c-8aa8-42fa-bcaa-8f79ac45ee1f" />
<img width="1366" height="675" alt="image" src="https://github.com/user-attachments/assets/fc44e979-5252-408f-b515-e917d8790b28" />
<img width="1240" height="1072" alt="image" src="https://github.com/user-attachments/assets/71647f6f-d8e8-42cd-a0fe-5fa81d663d9f" />
<img width="1348" height="674" alt="image" src="https://github.com/user-attachments/assets/02f6b82d-95de-440e-a85a-231a87ba9b09" />
<img width="1366" height="691" alt="Screenshot 2026-03-10 141951" src="https://github.com/user-attachments/assets/e3718c9c-39c8-4a76-8dfb-0a37f0226942" />

- 🌤️ Current Weather Overview  
- 📊 Detailed Weather Metrics  
- 📈 Hourly Forecast Visualization  
- 🌙 Dark / Light Mode Toggle  
- 📱 Fully Responsive Layout  

---

# 📌 Features

### 🌍 Weather Search
- Search any city worldwide
- Real-time data fetching
- Default city on initial load

### 🌡️ Current Conditions
- Temperature
- Feels like
- Weather description
- Weather icon
- Location display

### 📊 Weather Metrics
- Humidity
- Wind Speed
- Visibility
- UV Index (extendable)
- Air Quality (extendable)
- Sunrise & Sunset

### 📈 Hourly Forecast Chart
- Interactive temperature graph
- Built using Recharts
- Responsive scaling

### 🌙 Theme Toggle
- Dark / Light mode
- Smooth transitions
- LocalStorage persistence

### 📱 Fully Responsive
- Mobile-first design
- Adaptive grid layout
- Sidebar for desktop
- Clean stacked layout for mobile

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | React (Vite) |
| Styling | Tailwind CSS v3 |
| HTTP Client | Axios |
| Charts | Recharts |
| Icons | React Icons |
| API | OpenWeatherMap |
| Deployment | Vercel |

---

# 🧱 Architecture Overview

The application follows a clean and scalable structure:

```
src/
│
├── components/        # Reusable UI components
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   ├── WeatherCard.jsx
│   ├── MetricCard.jsx
│   └── HourlyChart.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── services/
│   └── weatherService.js
│
├── hooks/
│   └── useDebounce.js
│
├── utils/
│
├── App.jsx
├── main.jsx
└── index.css
```

### 🧠 Design Principles Used

- Component reusability
- Service-layer API abstraction
- Separation of concerns
- Context API for global state
- Responsive-first design
- Environment variable security
- Production-ready configuration

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Capstone-project-weatherapp.git
cd Capstone-project-weatherapp
cd weather-dashboard
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```
VITE_WEATHER_KEY=your_openweathermap_api_key
```

Get your free API key here:  
https://openweathermap.org/api

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

# 🌐 API Integration

This project uses:

- **Current Weather API**
- **5-Day / 3-Hour Forecast API**

API logic is centralized in:

```
src/services/weatherService.js
```

Environment variables are accessed via:

```js
import.meta.env.VITE_WEATHER_KEY
```

This ensures sensitive keys are not exposed in version control.

---

# 🌙 Dark Mode Implementation

Dark mode uses:

- Tailwind `darkMode: "class"`
- React Context API
- LocalStorage persistence

Theme is automatically restored on page reload.

---

# 📊 Data Visualization

Hourly forecast is displayed using:

- Recharts `<LineChart />`
- ResponsiveContainer for adaptive sizing
- Clean tooltip interaction

---

# 🚀 Deployment (Vercel)

### Step 1 — Push to GitHub

```bash
git add .
git commit -m "Initial deployment"
git push
```

### Step 2 — Deploy on Vercel

1. Go to https://vercel.com
2. Import GitHub repository
3. Add environment variable:

```
VITE_WEATHER_KEY
```

4. Click Deploy

---

# 🔐 Environment Security

- API key stored in `.env`
- `.env` excluded via `.gitignore`
- No secrets committed to repository

---

# 📱 Responsiveness Strategy

| Device | Layout |
|--------|--------|
| Mobile | Single column stack |
| Tablet | Two-column grid |
| Desktop | Sidebar + Multi-column dashboard |

Built using Tailwind responsive utilities:

```
md:
lg:
xl:
```

---

# 📈 Performance Optimizations

- Vite + SWC for fast builds
- Component-based architecture
- Lightweight state management
- Debounced search support
- Minimal re-renders
- Optimized API calls

---

# 🧪 Future Enhancements

- 🌍 Geolocation detection
- 🗺️ Interactive weather maps
- 📦 PWA offline support
- 🔔 Real-time weather alerts
- 🌐 Multi-language support
- 📊 Advanced analytics dashboard
- 🧩 Redux or Zustand integration

---

# 👨‍💻 Author

**Eyob Abera**  
Frontend developer | UI/UX designer

GitHub: https://github.com/Ctrl-Eyob  
LinkedIn: https://www.linkedin.com/in/eyobabera/

---

# 📄 License

MIT License © 2026

---

# ⭐ If You Like This Project

Give it a star ⭐ on GitHub — it helps a lot!

---
