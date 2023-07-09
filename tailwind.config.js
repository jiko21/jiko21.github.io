/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			accent: '#E4572E',
		},
		extend: {
			animation: {
				'text-fade-from-bottom': 'fade-from-bottom cubic-bezier(0.04, 0.69, 0.58, 1) 1.5s'
			},
			keyframes: {
				'fade-from-bottom': {
					'0%': {
						transform: 'translateY(80px)',
						opacity: 0,
					},
					to: {
						transform: 'translateY(0)',
						opacity: 1,
					}
				}
			}
		}
	},
	plugins: []
};
