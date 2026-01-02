import type { Metadata } from "next";
import { Geist, Geist_Mono, Albert_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gugramas - Comércio, Plantio e Manutenção de Gramados",
  description:
    "A Gugramas é uma empresa especializada em comércio e plantio de gramado residenciais, industriais, esportivo e rodoviário. Localizada em Chapada-RS, atende todo o Rio Grande do Sul e Santa Catarina levando o melhor custo benefício e eficiência até sua obra. solicite seu orçamento",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
