import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Gjelsås | Media, kommunikasjon og historiefortelling",
  description:
    "Thomas Gjelsås hjelper selskaper, organisasjoner og idrett med mediestrategi, PR, historiefortelling, innhold, podkast og foredrag.",
  keywords: [
    "Thomas Gjelsås",
    "medierådgiver",
    "kommunikasjon",
    "PR",
    "historiefortelling",
    "medietrening",
    "podkast",
    "foredrag",
  ],
  openGraph: {
    title: "Thomas Gjelsås | Media og kommunikasjon",
    description:
      "Rådgivning, innhold og historiefortelling basert på 30 års erfaring fra media, TV, sport og ledelse.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}