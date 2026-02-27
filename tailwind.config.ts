import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#05070a",
                foreground: "#ffffff",
                editor: {
                    bg: "#0d1117",
                    sidebar: "#161b22",
                    border: "#30363d",
                    text: "#e6edf3",
                    secondary: "#9ca3af",
                    accent: "#7030a0",
                },
                brand: {
                    purple: "#7030a0",
                    "purple-light": "#9b59b6",
                    dark: "#05070a",
                }
            },
        },
    },
    plugins: [],
};
export default config;
