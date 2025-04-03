import type { Metadata } from "next";
import "./globals.css";
import { DataProvider } from './context/DataContext'
import { CartProvider } from "./context/CartContext";
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import Login from "./Login/Login";



export const metadata: Metadata = {
  title: "Ecommercy Mini",
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
        className={`antialiased`} // Apply custom fonts and antialiasing
      >
        <AntdRegistry>
          <DataProvider>
            <CartProvider>
              {children} {/* Render the children components */}
            </CartProvider>
          </DataProvider>
        </AntdRegistry>
      </body>
    </html >
  );
}
