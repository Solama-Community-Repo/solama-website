/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.tsx", "./src/components/**/*.tsx", "./src/pages/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#12151D",
        secondary: "#565DC0",
        "hover-primary": "#01FAA3",
        "hover-secondary": "#9647F7",
      },
      boxShadow: {
        green: "3px 3px 0px 0px #01FAA3",
        purple: "3px 3px 0px 0px #9647F7",
		glow: "0px 0px 20px 0px rgba(86.00000000000001, 92.99999999999996, 192, 0.38)"
      },
      animation: {
        bounce: "bounce 2s ease-in-out infinite",
		slide: "slide 35s linear infinite",
		slidein: "slidein 1s ease-in-out 1",
		slideout: "slideout 1s ease-in-out 1"
      },
      keyframes: {
		slide: {
			'0%': { transform: 'translateX(0)' },
			'100%': { transform: 'translateX(-400%)'}
		},
		slidein: {
			'0%': { transform: 'translateX(-100%)' },
			'100%': { transform: 'translateX(0)'}
		},
		slideout: {
			'0%': { transform: 'translateX(0)' },
			'100%': { transform: 'translateX(-100%)'}
		},
        bounce: {
          "0%, 100%": { transform: "translateY(-2%)", "animation-timing-function": "cubic-bezier(.4,.4,.7,.7)" },
          "50%": { "animation-timing-function": "cubic-bezier(.4,.4,.7,.7)" },
        },
      },
      backgroundImage: {
        "bg-image": "url('/background_image.jpg')",
      },
      backgroundPosition: {
        "top-center": "top center",
      },
    },
  },
  plugins: [],
};
