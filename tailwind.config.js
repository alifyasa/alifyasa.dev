/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export const content = [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
];
// https://tailwindcss.nuxtjs.org/tailwind/config#safelisting-classes
export const safelist = [
    'safelisted',
    {
        pattern: /(bg|text)-(beige|rust|jet)/,
    },
]
export const theme = {
    extend: {
        fontFamily: {
            'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            'serif': ['"Crimson Text"', ...defaultTheme.fontFamily.serif],
        },
        colors: {
            'dark-brown': '#2D2424',
            'medium-brown': '#5C3D2E',
            'rusty-orange': '#B85C38',
            'light-beige': '#E0C097',
            'beige': '#f5f7dc',
            'jet': '#41393e',
            'rust': '#bf3100'
        }
    },
    
};
export const plugins = [];