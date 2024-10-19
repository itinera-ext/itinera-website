import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: "Itinera – Plan Your Trip In Seconds",
  description:
    "Discover attractions in cities worldwide. Seamlessly integrate them into your Google Calendar for convenient trip planning.",
  icons: {
    icon: "favicon/faviconicon-filled-16.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
