// app/layout.tsx
import type { Metadata } from 'next';
import { Manrope, Zen_Dots } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'], // Light = 300
});

const zenDots = Zen_Dots({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Alius Cloud',
  description: 'Soluções em Dados',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${zenDots.variable} antialiased`}>{children}</body>
    </html>
  );
}
