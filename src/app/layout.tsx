import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temporada Arraial",
  description: "Seu paraíso de temporada!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
