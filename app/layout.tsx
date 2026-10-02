import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawan — Full-stack developer",
  description:
    "The portfolio of Pawan, a full-stack developer building durable digital products.",
  icons: {
    icon: [
      "/favicon.ico",
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const themeScript = `(function(){try{var k='pawan-portfolio-theme';var s=null;try{s=localStorage.getItem(k)}catch(e){}var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(d?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light')}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
