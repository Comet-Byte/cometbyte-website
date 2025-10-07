import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import I18nProvider from "@/i18n/I18nProvider";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CometByte - Transform Your Digital Future",
  description:
    "Empowering businesses with cutting-edge technology solutions. From startups to enterprises, we deliver innovation that drives growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
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
