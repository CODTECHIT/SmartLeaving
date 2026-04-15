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
        premium: {
          950: "#050505", // Deepest Black
          900: "#0A0A0B", // Main Dark BG
          850: "#111111", // Secondary Dark BG
          800: "#1A1A1B", // Tertiary Dark BG
          700: "#2A2A2B", // Border Dark
          600: "#4B5563", // Muted Text Dark
          500: "#6B7280", // Muted Text Light
          400: "#9CA3AF", // Light Gray
          300: "#D1D5DB", // Lighter Gray
          200: "#E5E7EB", // Border Light
          100: "#F3F4F6", // Off-white BG
          50: "#F9FAFB",  // Soft White BG
          blue: {
            DEFAULT: "#0062FF", // Royal Sapphire
            light: "#00D4FF",   // Sky Cyan
            dark: "#0047BA",    // Deep Sapphire
          },
          gold: {
            DEFAULT: "#D4AF37", // Metallic Gold
            light: "#E5C76B",
            dark: "#B8860B",
          },
          emerald: {
            DEFAULT: "#10B981",
            light: "#34D399",
            dark: "#059669",
          }
        },
        industrial: {
          dark: "#0A0A0B",
          steel: "#1A1A1B",
          slate: "#4B5563",
          graphite: "#111111",
          accent: "#0062FF",
          "accent-light": "#00D4FF",
          rust: "#D4AF37",
          "rust-light": "#E5C76B",
          safety: "#0062FF",
          "safety-dark": "#0047BA",
          concrete: "#9CA3AF",
          smoke: "#050505",
        },
        background: "#FFFFFF",
        foreground: "#0A0A0B",
        primary: {
          DEFAULT: "#0062FF",
          light: "#EBF3FF",
          dark: "#0047BA",
        },
        accent: {
          DEFAULT: "#0062FF",
          light: "#00D4FF",
          dark: "#0047BA",
          gold: "#D4AF37",
          "gold-light": "#F59E0B",
        },
        slate: {
          850: "#111111",
          950: "#050505",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(to bottom right, #0A0A0B, #1A1A1B, #0A0A0B)',
        'premium-gradient': 'linear-gradient(135deg, #0062FF 0%, #00D4FF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 100%)',
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