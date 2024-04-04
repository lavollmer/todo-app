module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or "media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "check-background":
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        "very-dark-blue-dark": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue-dark": "hsl(235, 24%, 19%)",
        "light-grayish-blue-dark": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover-dark": "hsl(236, 33%, 92%)",
        "dark-grayish-blue-dark": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-dark": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-dark": "hsl(237, 14%, 26%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
