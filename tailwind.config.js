/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/booking-image.jpg')",
      },
      gridTemplateColumns: {
        "custom-3": "repeat(auto-fill, minmax(300px, 1fr))",
        "custom-4": "repeat(auto-fill, minmax(300px, 1fr))", // Custom grid-cols-3 with min size of 100px
        "custom-2": "0.3fr 1fr",
        "custom-2xlg": "1fr 1fr",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "sunset-orange": "#FFA849",
        "sunset-orange-hover": "#FF8C33",
        "slate-teal": "#68848B",
        "slate-teal-hover": "#546D73",

        "pale-lemon": "#FFFBB7",
        "deep-brown": "#4A2B13",
        "deep-brown-hover": "#3B220F",

        "misty-blue": "#89A8B2",
        "misty-blue-hover": "#6F8F9A",
        "light-steel": "#B3C8CF",
        "warm-ivory": "#E5E1DA",
        "soft-almond": "#F1F0E8",
      },
    },
    screens: {
      xl: { max: "1279px" }, // Extra-large screens: below 1280px
      lg: { max: "1120px" }, // Large screens: below 1024px
      slg: { max: "1000px" },
      md: { max: "850px" }, // Medium screens: below 768px
      sm: { max: "639px" }, // Small screens: below 640px
    },
  },
  plugins: [],
};
