/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/LoginPage.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/LoginPage1.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "codechef-logo": "url('./assets/codechef_logo.png')",
        "image-1": "url('./assets/image1.png')",
        "image-2": "url('./assets/image2.png')",
        "image-3": "url('./assets/image3.png')",
        "image-4": "url('./assets/node.png')",
        "image-5": "url('./assets/js.png')",
        "image-6": "url('./assets/devicon_react.png')",
        "image-7": "url('./assets/mobile-bg.png')",
        "gradient-lighten":
          "linear-gradient(180deg, #C5F2FF 0%, #D5F6FF 50%, #FFFFFF 100%)",
      },
      backgroundBlendMode: {
        lighten: "lighten",
      },
    },
  },
  plugins: [require("./tailwind-plugins")],
};
