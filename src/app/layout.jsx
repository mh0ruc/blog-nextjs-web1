import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Enterance from "./components/Enterance";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header/>
        
        {children}
        <Footer/>
        </body>
    </html>
  );
}
