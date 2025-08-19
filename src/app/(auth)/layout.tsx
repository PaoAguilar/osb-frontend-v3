import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const apexMk2 = localFont({
  src: [
    {
      path: "../../../public/fonts/ApexMk2-Regular.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-apex",
  display: "swap",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Login - Outer Sports Ballers",
  description: "Login to Outer Sports Ballers",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${apexMk2.variable} ${geist.variable} ${geistMono.variable} font-apex relative`}
      >
        {children}
      </body>
    </html>
  );
}
