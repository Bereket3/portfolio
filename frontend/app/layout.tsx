import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const roboto = Sora({
  weight: ["400", "500", "300", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bereket Worku",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
