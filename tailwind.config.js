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
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary-text)",
        primary: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
          brand: "#0D98BA",
          cta: "var(--cta)",
        },
        premium: {
          950: "var(--background)",
          900: "var(--foreground)",
          850: "var(--secondary-text)",
          800: "var(--secondary-text)",
          700: "var(--secondary-text)",
          600: "var(--secondary-text)",
          500: "var(--secondary-text)",
          400: "var(--secondary-text)",
          300: "var(--secondary-text)",
          dark: "var(--premium-dark)",
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F59E0B",
            dark: "#B8860B",
          },
          blue: {
            DEFAULT: "#0D98BA",
            light: "#EAF6F9",
            dark: "#0A7A95",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(to bottom right, var(--background), var(--accent-light), var(--background))',
        'premium-gradient': 'linear-gradient(135deg, #0D98BA 0%, #00D4FF 100%)',
        'brand-gradient': 'linear-gradient(135deg, #0D98BA 0%, #0A7A95 100%)',
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