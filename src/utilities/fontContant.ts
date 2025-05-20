import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import { Nunito } from "next/font/google";

export const InterFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700"],
  display: "swap",
  variable: "--font_Inter",
});

export const Nunito_web = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "600", "700", "900"],
  display: "swap",
  variable: "--Nunito_web",
});
