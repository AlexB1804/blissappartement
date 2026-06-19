import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Locations de vacances",
  description: "Port Grimaud, Risoul, Aix-en-Provence",
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


