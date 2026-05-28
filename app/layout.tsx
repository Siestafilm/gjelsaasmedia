import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata = {
  metadataBase: new URL("https://gjelsaas.no"),
  title: "Thomas Gjelsås | Media, kommunikasjon og historiefortelling",
  description:
    "Thomas Gjelsås hjelper selskaper, organisasjoner og idrett med mediestrategi, PR-rådgivning, medietrening, historiefortelling, podkast og foredrag om kommunikasjon.",
  keywords: [
    "Thomas Gjelsås",
    "medierådgiver Oslo",
    "PR-rådgivning",
    "mediestrategi",
    "kommunikasjon",
    "historiefortelling",
    "medietrening",
    "foredrag om kommunikasjon",
    "podkast",
    "innholdsproduksjon",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Thomas Gjelsås | Media og kommunikasjon",
    description:
      "Mediestrategi, PR-rådgivning, historiefortelling, medietrening, podkast og foredrag.",
    url: "https://gjelsaas.no",
    siteName: "Thomas Gjelsås",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Gjelsås – media, kommunikasjon og historiefortelling",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Gjelsås | Media og kommunikasjon",
    description:
      "Mediestrategi, PR-rådgivning, historiefortelling, medietrening, podkast og foredrag.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
    <body className={`${inter.variable} ${cormorant.variable}`}>
      {children}
    </body>
    </html>
  );
}