import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050505',
          secondary: '#0A0A0A',
          surface: '#141414'
        },
        foreground: {
          DEFAULT: '#F2F2F2',
          secondary: '#A0A0A0',
          muted: '#8A8A8A'
        },
        metallic: {
          DEFAULT: '#C0C0C0',
          light: '#E0E0E0',
          dark: '#808080'
        },
        border: {
          DEFAULT: '#262626',
          subtle: '#1C1C1C',
          bright: '#3D3D3D'
        },
        crimson: {
          DEFAULT: '#790C18',
          subtle: 'rgba(121, 12, 24, 0.15)',
          glow: 'rgba(121, 12, 24, 0.35)'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      fontSize: {
        'display-2xl': 'clamp(2.5rem, 6vw, 5rem)',
        'display-xl': 'clamp(2rem, 4.5vw, 3.75rem)',
        'display-lg': 'clamp(1.5rem, 3.2vw, 2.5rem)',
        'technical-sm': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'technical-xs': ['0.6875rem', { lineHeight: '0.875rem', letterSpacing: '0.08em' }]
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px'
      },
      boxShadow: {
        metallic: '0 0 25px -5px rgba(192, 192, 192, 0.08)',
        crimson: '0 0 30px -5px rgba(121, 12, 24, 0.25)',
        surface: '0 12px 32px -8px rgba(0, 0, 0, 0.7)'
      },
      transitionTimingFunction: {
        industrial: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};

export default config;
