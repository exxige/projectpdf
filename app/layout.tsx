import PlausibleProvider from "next-plausible";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free SEO Resources & Community Contributions",
  description:
    "Explore and contribute to Resora, a dynamic platform offering an extensive library of free SEO resources. Enhance your site's success with top-notch SEO PDFs, including guides on on-page, off-page, and technical SEO. Utilize and share insights on keyword research, link building, and more, all in one community-driven space. Perfect for both learning and sharing expertise in SEO",
  icons: {
    icon: ["/images/favicon.ico"],
    apple: ["/images/favicon.ico?v=4"],
    shortcut: ["/images/favicon.ico"],
  },
};

const creata = localFont({
  src: "./fonts/Creata-Bold.woff",
  variable: "--font-creataBold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={creata.variable}>
      <PlausibleProvider domain="resora.io">
        <body className={`antialiased ${inter.className} bg-[#f2f3f4]`}>
          <ScrollToTop />
          <Navigation />

          {children}
        </body>
      </PlausibleProvider>
    </html>
  );
}
