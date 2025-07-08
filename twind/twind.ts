import { setup, tw as baseTw } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

setup({
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#1c1c1e",
        surfaceSecondary: "#2c2c2e",
        textPrimary: "#f5f5f7",
        textSecondary: "#a1a1a6",
        accent: "#007aff",
        accentHover: "#0056cc",
        border: "rgba(0, 122, 255, 0.2)",
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

// Wrap the tw function with error handling to prevent undefined errors
export const tw = (...args: (string | undefined | null | false)[]): string => {
  try {
    // Filter out undefined, null, and false values, then join valid strings
    const validClasses = args.filter((arg): arg is string => 
      typeof arg === 'string' && arg.length > 0
    );
    
    if (validClasses.length === 0) {
      return '';
    }
    
    return baseTw(validClasses.join(' '));
  } catch (error) {
    console.warn('Twind error:', error);
    // Return empty string as fallback to prevent crashes
    return '';
  }
};