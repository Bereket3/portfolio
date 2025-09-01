import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./nextThemeProvider";
import { Toaster } from "sonner";

const roboto = Sora({
  weight: ["400", "500", "300", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bereket Worku",
  description: "I am software developer over 3+ years of experince",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster />
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <body className={`${roboto.className} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
