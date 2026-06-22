import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://blissappartement.fr"),

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

  icons: {
    icon: "/logo.png",
  },

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
      <head>
        <meta
          name="google-site-verification"
          content="kctZ5Nir_1EhHwg8gQNa7QylNMB-Y4ANswfe1tVMigk"
        />
      </head>

      <body>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-ZMLL63G3FP"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZMLL63G3FP');
  `}
</Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


