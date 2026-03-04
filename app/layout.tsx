import "./globals.css";
import { CartProvider } from "./context/CartContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lookevo.in",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}