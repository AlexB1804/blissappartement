import DestinationCard from "../components/DestinationCard";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <p className="home-kicker">BlissAppartement</p>

        <h1 className="home-title">Mer, Montagne et Provence</h1>

        <p className="home-subtitle">
          Trois destinations de charme pour des séjours uniques à Port Grimaud,
          Risoul et Aix-en-Provence.
        </p>
      </section>

      <section className="home-destinations">
        <div className="home-section-header">
          <h2>Nos destinations</h2>
          <p>Choisissez l’ambiance de votre prochain séjour.</p>
        </div>

        <div className="home-destination-grid">
          <DestinationCard
            title="Port Grimaud"
            image="/IMG_3402.jpg"
            href="/port-grimaud"
          />

          <DestinationCard
            title="Risoul"
            image="/IMG_5789.jpeg"
            href="/risoul"
          />

          <DestinationCard
            title="Aix-en-Provence"
            image="/IMG_2425.jpeg"
            href="/aix-en-provence"
          />
        </div>
      </section>
    </main>
  );
}