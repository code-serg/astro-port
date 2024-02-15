/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-teal": ({ opacityVariable, opacityValue }) => {
          const defaultOpacity =
            opacityValue !== undefined ? opacityValue : "1";
          const opacity = opacityVariable
            ? `var(${opacityVariable}, ${defaultOpacity})`
            : defaultOpacity;

          return `rgba(5, 230, 230, ${opacity})`;
        },
      },
    },
  },
  plugins: [],
};
