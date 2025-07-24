import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const latoRegular = Lato({
  weight: "400",
  variable: "--font-lato-regular",
  subsets: ["latin"],
});

const latoBold = Lato({
  weight: "700",
  variable: "--font-lato-bold",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Studio - Play & Feedback",
  description: "Experience our latest game prototypes and share your feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoRegular.variable} ${latoBold.variable} font-lato-regular antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
