import "./globals.css";
import type { Metadata } from "next";
import { Layout, FixedPlugin } from "@/components";
import I18nProvider from "@/i18n/I18nProvider";

export const metadata: Metadata = {
  title: "CometByte - Transform Your Digital Future",
  description:
    "Empowering businesses with cutting-edge technology solutions. From startups to enterprises, we deliver innovation that drives growth.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Mobile Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Google Fonts - Roboto with Latin and Cyrillic support */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap&subset=latin,cyrillic" 
          rel="stylesheet" 
        />
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>
        <I18nProvider>
          <Layout>
            {children}
            <FixedPlugin />
          </Layout>
        </I18nProvider>
      </body>
    </html>
  );
}
