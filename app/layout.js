import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiveInGreece",
  description: "Greece is Beautiful and Filled with Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
