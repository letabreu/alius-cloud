import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const manrope = localFont({
  src: '../public/fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-sans',
  display: 'swap',
});

const zenDots = localFont({
  src: '../public/fonts/ZenDots-Regular.ttf',
  variable: '--font-logo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alius Cloud',
  description: 'Soluções em Dados',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${zenDots.variable}`}>{children}</body>
    </html>
  );
}
