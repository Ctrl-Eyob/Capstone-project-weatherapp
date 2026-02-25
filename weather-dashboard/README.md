🌦️ Weather Dashboard Web App

A modern, responsive Weather Dashboard built with React (Vite) and Tailwind CSS, powered by the OpenWeatherMap API.

This application allows users to search for any city and view real-time weather data including current conditions, detailed metrics, hourly forecasts, and theme switching between light and dark modes.

🚀 Live Demo

Add your Vercel deployment link here
************https://your-app-name.vercel.app

📌 Features

🔍 Search weather by city

🌡️ Current weather conditions

📊 Weather metrics (humidity, wind, visibility, etc.)

📈 Hourly forecast chart (Recharts)

📅 Monthly preview section

🌙 Dark / Light mode toggle

📱 Fully responsive (Mobile, Tablet, Desktop)

⚡ Fast build with Vite + SWC

🔐 Secure API key via environment variables

🛠 Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS v3

HTTP Client: Axios

Charts: Recharts

Icons: React Icons

API: OpenWeatherMap

Deployment: Vercel

📂 Project Structure
src/
│
├── components/        # Reusable UI components
├── pages/             # Page-level components
├── context/           # Theme context (dark/light mode)
├── services/          # API integration layer
├── hooks/             # Custom React hooks
├── utils/             # Helper functions
│
├── App.jsx
├── main.jsx
└── index.css
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
2️⃣ Install dependencies
npm install
3️⃣ Create environment file

Create a .env file in the root directory:

VITE_WEATHER_KEY=your_openweathermap_api_key

Get your free API key from:
https://openweathermap.org/api

4️⃣ Run development server
npm run dev

App will run at:

http://localhost:5173
🌐 API Integration

This project uses:

Current Weather API

5-Day / 3-Hour Forecast API

All API logic is abstracted inside:

src/services/weatherService.js

Environment variables are accessed using:

import.meta.env.VITE_WEATHER_KEY
🎨 Theming System

Dark/Light mode is implemented using:

Tailwind darkMode: "class"

React Context API

LocalStorage persistence

Theme state automatically persists across sessions.

📱 Responsiveness

The layout adapts to:

Mobile → Single column

Tablet → 2 columns

Desktop → Full dashboard layout with sidebar

Built using Tailwind responsive utilities:

md:
lg:
xl:
🚀 Deployment (Vercel)

Push project to GitHub

Go to https://vercel.com

Import repository

Add environment variable:

VITE_WEATHER_KEY

Deploy

📈 Future Improvements

🌍 Geolocation support

🗺️ Weather maps integration

📊 Advanced data visualization

📦 PWA support (offline mode)

🔔 Weather alerts notifications

🌐 Multi-language support

🧠 Best Practices Used

Reusable component architecture

Service-layer API abstraction

Environment variable security

Clean folder structure

Responsive-first design

Accessibility-friendly UI

Production-ready configuration

👨‍💻 Author

Eyob Abera
Frontend Developer | UI/UX designer

GitHub: https://github.com/Ctrl-Eyob
