export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: "50px 20px",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
        background: "#f8fafc",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 20,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500,
          color: "#0f172a",
        }}
      >
        Contact
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
          marginBottom: 25,
        }}
      >
        <a
          href="mailto:blissappartement@gmail.com"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            fontWeight: 500,
          }}
        >
          📧 blissappartement@gmail.com
        </a>

        <a
          href="tel:+33635503652"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            fontWeight: 500,
          }}
        >
          📞 +33 6 35 50 36 52
        </a>
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 15,
          color: "#475569",
          fontWeight: 500,
        }}
      >
        🚭 Appartement non-fumeur • 🐾 Animaux non admis
      </p>

      <div
        style={{
          marginTop: 25,
          color: "#64748b",
          fontSize: 13,
          lineHeight: 1.8,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Numéros d'enregistrement</strong>
        </p>

        <p style={{ margin: 0 }}>
          Port Grimaud : 83068000009S2
        </p>

        <p style={{ margin: 0 }}>
          Risoul : 05119000029
        </p>

        <p style={{ margin: 0 }}>
          Aix-en-Provence : 1300100017744
        </p>
        </div>

        <div
          style={{
            marginTop: 25,
            color: "#64748b",
            fontSize: 13,
            lineHeight: 1.8,
          }}
        >
         <p style={{ margin: 0 }}>
          <strong>SIREN</strong>
        </p>

        <p style={{ margin: 0 }}>
          481 944 023
        </p>
      </div>

      <p
        style={{
          marginTop: 30,
          color: "#94a3b8",
          fontSize: 12,
        }}
      >
        © 2026 BlissAppartement — Tous droits réservés
      </p>
    </footer>
  );
}