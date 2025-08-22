import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Manrope } from "next/font/google"
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Connect - Connect. Code. Create.",
  description:
    "The ultimate platform for developers to connect, collaborate, and build amazing projects together. Join the community of passionate developers.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${geistSans.variable} ${manrope.variable} ${geistMono.variable} antialiased`}>
          {children}
        <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
