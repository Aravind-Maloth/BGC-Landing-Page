// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spinSlow 30s linear infinite",
        "float": "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "orbit": "orbit 12s linear infinite",
        "shimmer": "shimmer 3s linear infinite", // <-- Registered here
      },

      keyframes: {
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        pulseGlow: {
          "0%,100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.08)",
          },
        },

       keyframes: {
  shimmer: {
    "0%": { backgroundPosition: "-200% 0" },
    "100%": { backgroundPosition: "200% 0" },
  },
},

        orbit: {
          from: {
            transform: "rotate(0deg) translateX(270px) rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg) translateX(270px) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};