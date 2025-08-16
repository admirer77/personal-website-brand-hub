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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
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
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-text': 'var(--gradient-text)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'typewriter': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'morphing': {
					'0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
					'25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
					'50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
					'75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(-100px) rotate(180deg)', opacity: '0' }
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
				},
				'flip': {
					'0%': { transform: 'rotateY(0)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'rubber-band': {
					'0%': { transform: 'scale(1)' },
					'30%': { transform: 'scaleX(1.25) scaleY(0.75)' },
					'40%': { transform: 'scaleX(0.75) scaleY(1.25)' },
					'60%': { transform: 'scaleX(1.15) scaleY(0.85)' },
					'100%': { transform: 'scale(1)' }
				},
				'jello': {
					'0%, 11.1%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
					'33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
					'44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
					'55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
					'66.6%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
					'77.7%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
					'88.8%': { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' }
				},
				'tada': {
					'0%': { transform: 'scale3d(1, 1, 1)' },
					'10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
					'30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
					'40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
					'100%': { transform: 'scale3d(1, 1, 1)' }
				},
				'bulb-light-up': {
					'0%': { 
						filter: 'brightness(0.8) contrast(0.9)',
						opacity: '0.8'
					},
					'20%': { 
						filter: 'brightness(0.9) contrast(1)',
						opacity: '0.85'
					},
					'40%': { 
						filter: 'brightness(1.1) contrast(1.1)',
						opacity: '0.9'
					},
					'60%': { 
						filter: 'brightness(1.3) contrast(1.2)',
						opacity: '0.95'
					},
					'80%': { 
						filter: 'brightness(1.5) contrast(1.3)',
						opacity: '1'
					},
					'100%': { 
						filter: 'brightness(1.6) contrast(1.4) saturate(1.2)',
						opacity: '1'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
						filter: 'brightness(1.6) contrast(1.4) saturate(1.2)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.5)',
						filter: 'brightness(1.8) contrast(1.5) saturate(1.3)'
					}
				},
				'gradient-y': {
					'0%, 100%': { backgroundPosition: '50% 0%' },
					'50%': { backgroundPosition: '50% 100%' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'typewriter': 'typewriter 3s steps(40, end) 1s 1 normal both',
				'blink': 'blink 1s infinite',
				'morphing': 'morphing 8s ease-in-out infinite',
				'particle-float': 'particle-float 6s ease-in-out infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'shake': 'shake 0.5s ease-in-out',
				'flip': 'flip 0.6s ease-in-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
				'rubber-band': 'rubber-band 1s ease-out',
				'jello': 'jello 1s ease-out',
				'tada': 'tada 1s ease-out',
				'stagger-1': 'fade-in-up 0.8s ease-out 0.1s both',
				'stagger-2': 'fade-in-up 0.8s ease-out 0.2s both',
				'stagger-3': 'fade-in-up 0.8s ease-out 0.3s both',
				'stagger-4': 'fade-in-up 0.8s ease-out 0.4s both',
				'stagger-5': 'fade-in-up 0.8s ease-out 0.5s both',
				'stagger-6': 'fade-in-up 0.8s ease-out 0.6s both',
				'delay-100': 'fade-in-up 0.8s ease-out 0.1s both',
				'delay-200': 'fade-in-up 0.8s ease-out 0.2s both',
				'delay-300': 'fade-in-up 0.8s ease-out 0.3s both',
				'delay-500': 'fade-in-up 0.8s ease-out 0.5s both',
				'delay-700': 'fade-in-up 0.8s ease-out 0.7s both',
				'bulb-light-up': 'bulb-light-up 3s ease-in-out 1s both',
				'glow-pulse': 'glow-pulse 2s ease-in-out 4s infinite',
				'gradient-y': 'gradient-y 4s ease infinite',
				'spin-slow': 'spin-slow 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
