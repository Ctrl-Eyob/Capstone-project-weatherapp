export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f6f7f9",
          card: "#ffffff",
          accent: "#4aa7ff",
          text: "#0f172a"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,23,42,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
