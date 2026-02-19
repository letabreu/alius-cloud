import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const manrope = localFont({
  src: '../public/fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-sans',
  display: 'swap',
  weight: '100 900',
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
    <html lang="pt-BR" className={`${manrope.variable} ${zenDots.variable}`}>
      <body className="font-sans font-light">{children}</body>
    </html>
  );
}
