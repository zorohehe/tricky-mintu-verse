import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: { '2xl': '1400px' }
		},
		extend: {
			fontFamily: {
				sans: ['"DM Sans"', 'sans-serif'],
				display: ['Bungee', 'cursive'],
				grotesk: ['"Space Grotesk"', 'sans-serif'],
				pixel: ['"Pixelify Sans"', 'monospace'],
				hand: ['"Patrick Hand"', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				ink: 'hsl(var(--ink))',
				cream: 'hsl(var(--cream))',
				'pink-soft': 'hsl(var(--pink-soft))',
				'pink-pale': 'hsl(var(--pink-pale))',
				fuchsia: 'hsl(var(--fuchsia))',
				violet: 'hsl(var(--violet))',
				sky: 'hsl(var(--sky))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 8px)'
			},
			backgroundImage: {
				candy: 'var(--gradient-candy)',
				pastel: 'var(--gradient-pastel)',
			},
			boxShadow: {
				sticker: 'var(--shadow-sticker)',
				soft: 'var(--shadow-soft)',
				window: 'var(--shadow-window)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%,100%': { transform: 'translateY(0) rotate(var(--rot, 0deg))' },
					'50%': { transform: 'translateY(-12px) rotate(var(--rot, 0deg))' }
				},
				wiggle: {
					'0%,100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				sparkle: {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'scale(1.4) rotate(140deg)', opacity: '0' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'pop-in': {
					'0%': { transform: 'scale(0.85) translateY(12px)', opacity: '0' },
					'100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
				},
				blink: {
					'0%,100%': { opacity: '1' },
					'50%': { opacity: '0.2' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 5s ease-in-out infinite',
				wiggle: 'wiggle 2.5s ease-in-out infinite',
				sparkle: 'sparkle 0.7s ease-out forwards',
				marquee: 'marquee 24s linear infinite',
				'pop-in': 'pop-in 0.4s cubic-bezier(.2,1.4,.4,1) both',
				blink: 'blink 1.4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
