import localFont from "next/font/local";

export const firaCode = localFont({
  src: [
    {
      path: "../fonts/FiraCode-Regular.ttf",
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-fira-code',
});
