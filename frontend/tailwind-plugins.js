// tailwind-plugins.js

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".bg-blend-lighten": {
      "background-blend-mode": "lighten",
    },
    // Add more blend mode utilities if needed
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
});
