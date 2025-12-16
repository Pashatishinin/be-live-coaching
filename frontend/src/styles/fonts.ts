import {
  Literata,
  Montserrat,
  Playfair_Display,
  Poppins,
} from "next/font/google";

export const literata = Playfair_Display({
  variable: "--font-literata",
  subsets: ["latin"],
});

export const montserrat = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});
