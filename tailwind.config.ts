
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', 'sans-serif'],
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our app
				'blue': {
					'50': '#E5F1FF',
					'100': '#CCE4FF',
					'200': '#99C8FF',
					'300': '#66ADFF',
					'400': '#4A9DFF',
					'500': '#0078FF',
					'600': '#0063D1',
					'700': '#004FA3',
					'800': '#003A75',
					'900': '#002547',
				},
				'green': {
					'50': '#EAFAF2',
					'100': '#D5F6E5',
					'200': '#ABEDCB',
					'300': '#81E4B1',
					'400': '#4AD991',
					'500': '#34C77A',
					'600': '#2BA866',
					'700': '#218A51',
					'800': '#186C3D',
					'900': '#0E4E29',
				},
				'red': {
					'50': '#FEECEC',
					'100': '#FED9D9',
					'200': '#FEB3B3',
					'300': '#FD8D8D',
					'400': '#FF6B6B',
					'500': '#FF4242',
					'600': '#E50000',
					'700': '#B70000',
					'800': '#8A0000',
					'900': '#5C0000',
				},
				'orange': {
					'50': '#FFF3E5',
					'100': '#FFE6CC',
					'200': '#FFCE99',
					'300': '#FFB566',
					'400': '#FF9A3D',
					'500': '#FF8000',
					'600': '#D16500',
					'700': '#A34F00',
					'800': '#753A00',
					'900': '#472400',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
