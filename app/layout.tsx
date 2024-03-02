import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebChain Dev",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <meta name="description" content={"Nothing sepcial"} />
        {/* Include any other head elements here */}
      </head>
      <body className={inter.className}>
        <Navbar />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
