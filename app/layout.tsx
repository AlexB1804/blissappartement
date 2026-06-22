import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "BlissAppartement | Locations de vacances",
  description:
    "Locations de vacances à Port Grimaud, Risoul 1850 et Aix-en-Provence. Appartements tout confort avec réservation directe.",
  keywords: [
    "location vacances",
    "Port Grimaud",
    "Risoul 1850",
    "Aix-en-Provence",
    "BlissAppartement",
    "location appartement",
    "gîte Provence",
  ],
  openGraph: {
    title: "BlissAppartement | Locations de vacances",
    description:
      "Trois destinations de charme entre mer, montagne et Provence.",
    url: "https://blissappartement.fr",
    siteName: "BlissAppartement",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}


