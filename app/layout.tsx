import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "BlissAppartement | Locations de vacances",
  description:
    "Locations de vacances à Port Grimaud, Risoul 1850 et Aix-en-Provence. Appartements tout confort avec réservation directe.",
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


