import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        border: "hsl(var(--border))",
        border3: "hsl(var(--border_03))",
        border5: "hsl(var(--border_05))",
        placeHolder: "hsl(var(--placeHolderText))",
        radio: "hsl(var(--radio))",
        borderGrey: "hsl(var(--borderGrey))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        success: "hsl(var(--success))",
        success20: "hsl(var(--success20))",
        extra: "hsl(var(--bg_clr_extra))",
        input_border: "hsl(var(--border_light_purple))",
        border_gray: "hsl(var(--clr_border_light_gary150))",
        border_gray_v2: "hsl(var(--border_07))",
        gray_800: "hsl(var(--clr_text_gray800))",
        blue_900: "hsl(var(--clr_text_blue900))",
        border_light_100: "hsl(var(--clr_border_blue900))",
        gray_darck_300: "hsl(var(--clr_bg_light_blue_gray200))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          inputBackground: "hsl(var(--inputPrimary))",
          bgDarkPurple: "hsl(var(--bg_clr_dark_purple))",
          bgLightPurple: "hsl(var(--bg_light_purple))",
          bgLightGary: "hsl(var(--clr_bg_gray200))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          textSecondary: "hsl(var(--clr_text_secondary))",
          textWhite: "hsl(var(--clr_text_white))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          foreground_red: "hsl(var(--destructive-foreground_red))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          textGray: "hsl(var(--clr_text_muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        website: {
          FOOT_Text: "hsl(var(--clr_foot_text))",
          TEXT_PRIMARY: "hsl(var(--clr_text_primary))",
          TEXT_BLUE: "hsl(var(--clr_text_light_blue))",
          TEXT_PURPLE: "hsl(var(--clr_text_pink_purple))",
          textGray400: "hsl(var(--clr_text_gray400))",
          textDarkBlue: "hsl(var(--clr_text_dark_blue))",
          textLightPurple: "hsl(var(--clr_text_light_purple))",
        },
        // dropShadow: {
        //   PRIMARY: "hsl(var(--primary_shadow))",
        // },
      },
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        InterSan: ["var(--font_Inter)"],
        Nunito_web: ["var(--Nunito_web)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bounce: {
          "0%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(23px)" },
          "60%": { transform: "translateY(-25px)" },
          "80%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounce: "bounce 1.2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
