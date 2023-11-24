import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Rent from "./components/Rent/Rent";
import Footer from "./components/Footer/Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Торговый центр Никольский",
  description: "Это сайт торгового центра Никольский",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
