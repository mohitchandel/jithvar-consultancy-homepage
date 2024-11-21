import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Sofia } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sofia",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
