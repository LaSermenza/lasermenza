import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { clsx } from "@koine/utils";
import { Footer } from "../molecules";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Sermenza",
  description: "Associazione La Sermenza APS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20`}
      >
        <div
          className={clsx(
            "max-xl:hidden",
            "absolute top-0 left-0 w-full h-[100vh]",
            "overflow-hidden pointer-events-none select-none"
          )}
        >
          <div
            className={clsx(
              "absolute -top-[20%] -left-[10%] z-1",
              "w-[80%] h-[20%] -rotate-[10deg]",
              "bg-black ",
              "border-b-4 border-black"
            )}
          />
          <div
            className={clsx(
              "absolute -top-[15%] left-[30%] z-1",
              "w-[100%] h-[25%] rotate-[10deg]",
              "bg-black ",
              "border-b-2 border-black"
            )}
          />
          {/* <div
            className={clsx(
              "absolute -top-[12%] left-[30%]",
              "w-[100%] h-[25%] rotate-[12deg]",
              // "bg-black"
              "border-b-1 border-black"
            )}
          /> */}
        </div>
        {children}
        <div
          className={clsx(
            "fixed bottom-0 text-center w-full",
            "pointer-events-none"
          )}
        >
          <p
            className={clsx(
              "px-10 py-3 text-sm font-bold inline-block uppercase",
              "border-t-2 border-black bg-white"
            )}
          >
            Sito in costruzione
          </p>
        </div>
        <Footer />
      </body>
    </html>
  );
}
