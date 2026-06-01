import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosProvider from "./components/AosProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ink & Thread",
  description: "Dark Vintage Fashion Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}