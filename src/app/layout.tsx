import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ArrowUp from "@/components/ArrowUp";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: "پدر بزرگ",
    template: "پدر بزرگ | %s"
  },
  description: "فروشگاه طبیعی پدر بزرگ",
  icons: {
    icon: "./images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextTopLoader
          color="orange"
          height={3}
          showSpinner={false}
        />
        <Header />
        <Layout>
          {children}
        </Layout>
        <Footer />
        <ArrowUp />
      </body>
    </html>
  );
}
