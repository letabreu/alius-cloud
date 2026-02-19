// lib/fonts.ts
import localFont from 'next/font/local';

export const zenDots = localFont({
  src: '../fonts/ZenDots-Regular.ttf',
  variable: '--font-zen',
  display: 'swap',
});

export const manrope = localFont({
  src: '../fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-manrope',
  display: 'swap',
  weight: '100 900',
});
