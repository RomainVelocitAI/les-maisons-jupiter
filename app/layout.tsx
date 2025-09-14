import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Les Maisons Jupiter - Constructeur de maisons individuelles à La Réunion",
  description: "Constructeur de maisons individuelles avec 27 ans d'expérience à La Réunion. Permis de construire gratuit, accompagnement financier, suivi de A à Z. Saint-Louis.",
  keywords: "constructeur maison La Réunion, maison individuelle Saint-Louis, construction maison 974, Les Maisons Jupiter, permis construire gratuit",
  authors: [{ name: "Les Maisons Jupiter" }],
  creator: "Les Maisons Jupiter",
  publisher: "Les Maisons Jupiter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Les Maisons Jupiter - Votre constructeur de confiance à La Réunion",
    description: "27 ans d'expérience dans la construction de maisons individuelles. Permis gratuit, financement accompagné, suivi complet.",
    url: "https://lesmaisonsjupiter.re",
    siteName: "Les Maisons Jupiter",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
