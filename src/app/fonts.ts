import localFont from "next/font/local";

const neueHaas = localFont({
  src: [
    { path: "../../public/fonts/NeueHaasRoman.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NeueHaasBold.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-neue-haas",
});

export { neueHaas };
