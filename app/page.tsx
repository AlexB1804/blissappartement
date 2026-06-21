import DestinationCard from "../components/DestinationCard";

export default function Home() {
  return (
    <main>
      <section
        style={{
          padding: "110px 20px 90px",
          textAlign: "center",
          background:
          "linear-gradient(135deg, #fde68a 0%, #dbeafe 50%, #7dd3fc 100%)",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "#64748b",
            fontSize: 13,
            marginBottom: 18,
          }}
        >
          BlissAppartement
        </p>

        <h1
          style={{
            fontSize: 58,
            lineHeight: 1.05,
            margin: 0,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 500,
          }}
        >
          Mer, Montagne et Provence
        </h1>

        <p
          style={{
            maxWidth: 1000,
            margin: "26px auto 0",
            color: "#475569",
            fontSize: 19,
            lineHeight: 1.7,
          }}
        >
          Trois destinations de charme pour des séjours uniques à Port Grimaud,
          Risoul et Aix-en-Provence.
        </p>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "75px 20px",
        }}
      >
        <div style={{ marginBottom: 38 }}>
          <h2
            style={{
              fontSize: 34,
              margin: 0,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 500,
            }}
          >
            Nos destinations
          </h2>

          <p
            style={{
              color: "#64748b",
              marginTop: 12,
              fontSize: 17,
            }}
          >
            Choisissez l’ambiance de votre prochain séjour.
          </p>
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