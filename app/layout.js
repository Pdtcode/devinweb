import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devin Ta",
  description: "Hello my name is Devin Ta and I am a Vietnamese-American photographer based in Oklahoma City, Oklahoma. I enjoy taking portraits, creative photos, as well as concert photos!",
  icons: {
    icon: [
      '/dt.ico',
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-white">
          <Navbar/>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
