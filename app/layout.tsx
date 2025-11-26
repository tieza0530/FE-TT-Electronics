import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

import "./globals.css";
import { Header } from "./components/header/Header";
import { Contact } from "./components/info/Contact";
import { Footer } from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "Điện Máy Trường Thủy",
  description: "",
};

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div>
          <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <Header />
          </div>
          <div className="pt-24 mt-1 mb-10 ">
            {children}
          </div>
          <div className="fixed bottom-5 right-5 z-50 transition-transform hover:scale-102 ">
            <Contact />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
