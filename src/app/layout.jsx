import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  
});

export const metadata = {
  title: {
    default: "TechBazar | Modern E-commerce Platform",
    template: "%s | TechBazar"
  },

  description:
    "TechBazar is a modern e-commerce platform built with Next.js. Buy electronics, fashion, gadgets and more at the best price.",

  keywords: [
    "Next.js ecommerce",
    "online shopping",
    "electronics store",
    "fashion shop",
    "React ecommerce",
    "Bangladesh ecommerce"
  ],

  authors: [
    { name: "Your Name", url: "https://yourwebsite.com" }
  ],

  creator: "Your Name",
  publisher: "TechBazar",

  metadataBase: new URL("https://techbazar.com"),

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "bn-BD": "/bn"
    }
  },

  openGraph: {
    title: "TechBazar | Modern E-commerce Platform",
    description:
      "Shop latest electronics, fashion and gadgets from TechBazar.",
    url: "https://techbazar.com",
    siteName: "TechBazar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechBazar Open Graph Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "TechBazar | Modern E-commerce Platform",
    description:
      "Buy electronics, fashion and gadgets at best price.",
    creator: "@techbazar",
    images: ["/og-image.png"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },

  category: "ecommerce"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
