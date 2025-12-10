import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from '@/components/ui/Header';

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ['300', '600', '800'],
});

export const metadata: Metadata = {
  title: "REST Countries",
  description: "Explore the world with REST Countries API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.className} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col bg-(--background) text-(--foreground) transition-colors duration-300">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
