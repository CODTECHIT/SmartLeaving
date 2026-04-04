/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          900: "#020617", // Deep Obsidian
          800: "#0F172A", // Dark Slate
          700: "#1E293B", // Steel Gray
          600: "#334155",
          500: "#475569",
          400: "#64748B",
        },
        industrial: {
          dark: "#020617",
          steel: "#0F172A",
          slate: "#334155",
          graphite: "#1E293B",
          accent: "#06B6D4", // Electric Cyan
          accentLight: "#22D3EE",
          rust: "#06B6D4", // Alias for backward compatibility
          rustLight: "#22D3EE",
          safety: "#0891B2",
          safetyDark: "#155E75",
          concrete: "#94A3B8",
          smoke: "#0F172A",
        },
        background: "#020617",
        foreground: "#F8FAFC",
        primary: {
          DEFAULT: "#020617",
          light: "#0F172A",
          dark: "#000000",
        },
        accent: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
          safety: "#06B6D4",
          safetyLight: "#67E8F9",
        },
        slate: {
          850: "#1E293B",
          950: "#020617",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(to bottom right, #0F172A, #1E293B, #0F172A)',
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-down": "fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-up": "scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", scale: "0.95" },
          "100%": { opacity: "1", scale: "1" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};