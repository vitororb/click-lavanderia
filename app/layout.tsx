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
  description:
    "Lavanderia de autoatendimento 24h em Mineiros-GO. Roupas limpas e secas em cerca de 1 hora, com sabão e amaciante inclusos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className="scroll-smooth scroll-pt-32 md:scroll-pt-20">
      <body className={`${montserrat.variable} bg-accent/2 h-full antialiased`}>
        <main className="flex flex-col">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
