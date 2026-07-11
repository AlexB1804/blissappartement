type Props = {
  email: string;
  phone: string;
  instagram?: string;
  facebook?: string;
};

export default function ContactCard({
  email,
  phone,
  instagram,
  facebook,
}: Props) {
  return (
    <div
      style={{
        padding: "46px 36px",
        borderRadius: 28,
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
        color: "white",
        textAlign: "center",
        boxShadow: "0 18px 40px rgba(15, 23, 42, 0.25)",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: 34,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500,
        }}
      >
        Réserver votre séjour
      </h2>

      <p
        style={{
          maxWidth: 560,
          margin: "16px auto 32px",
          color: "#cbd5e1",
          lineHeight: 1.7,
        }}
      >
        Contactez-nous directement pour connaître les disponibilités et préparer
        votre séjour.
      </p>

      {(instagram || facebook) && (
  <>
    <p
      style={{
        marginTop: 0,
        marginBottom: 18,
        color: "#cbd5e1",
      }}
    >
      Suivez cet appartement
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 14,
        flexWrap: "wrap",
        marginBottom: 26,
      }}
    >
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 18px",
            borderRadius: 999,
            background: "#E1306C",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          📷 Instagram
        </a>
      )}

      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 18px",
            borderRadius: 999,
            background: "#1877F2",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          👍 Facebook
        </a>
      )}
    </div>
  </>
)}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <a
          href={`mailto:${email}`}
          style={{
            padding: "14px 22px",
            borderRadius: 999,
            background: "white",
            color: "#0f172a",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          📧 {email}
        </a>

        <a
          href={`tel:${phone}`}
          style={{
            padding: "14px 22px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.35)",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          📞 {phone}
        </a>
      </div>
    </div>
  );
}