import { setup, tw } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

setup({
  theme: {
    extend: {
      colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#ff6b6b",
        accentSecondary: "#48cae4",
        glass: "rgba(255, 255, 255, 0.1)",
        glassBorder: "rgba(255, 255, 255, 0.2)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #48cae4 0%, #023e8a 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'mesh-move': 'mesh-move 20s ease-in-out infinite',
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(102, 126, 234, 0.5)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
      }
    }
  },
  presets: [
    presetAutoprefix(),
    presetTailwind(),
  ],
});

export {tw}