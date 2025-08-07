import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: {
    default: "پدر بزرگ",
    template: "پدر بزرگ | %s"
  },
  description: "فروشگاه طبیعی پدر بزرگ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="orange"
          height={3}
          showSpinner={false}
        />
        <Header/>
        {children}
      </body>
    </html>
  );
}
