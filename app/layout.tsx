import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Click Lavanderia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${montserrat.variable} bg-accent/2 h-full antialiased`}>
        <main className="flex flex-col w-screen h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
