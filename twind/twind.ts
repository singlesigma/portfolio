import { setup, tw } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

setup({
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#1d1d1f",
        surfaceSecondary: "#2d2d30",
        textPrimary: "#f5f5f7",
        textSecondary: "#a1a1a6",
        accent: "#007aff",
        accentHover: "#0056cc",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        'sf': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      backdropBlur: {
        'apple': '20px',
      },
      borderRadius: {
        'apple': '16px',
        'pill': '980px',
      },
      boxShadow: {
        'apple': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'apple-large': '0 8px 40px rgba(0, 0, 0, 0.4)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    }
  },
  presets: [
    presetAutoprefix(),
    presetTailwind(),
  ],
});

export {tw}