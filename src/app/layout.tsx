import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

import { DataProvider } from './context/DataContext'
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Define the RootLayout component which will be used as the main layout for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define the type for children prop
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Apply custom fonts and antialiasing
      >

        <DataProvider>
          <CartProvider>
            <Sidebar />
            {children} {/* Render the children components */}
          </CartProvider>
        </DataProvider>
      </body>

    </html >
  );
}
