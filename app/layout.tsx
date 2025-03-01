import type { Metadata } from "next";
import "./globals.css";
import { firaCode } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Yu Min",
  description: "Yu Min's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased m-5`}
      >
        {children}
      </body>
    </html>
  );
}
