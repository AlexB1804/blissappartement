type Props = {
  title: string;
  address: string;
  mapUrl: string;
  embedUrl: string;
};

export default function LocationCard({
  title,
  address,
  mapUrl,
  embedUrl,
}: Props) {
  return (
    <div
      style={{
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
      }}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="360"
        style={{ border: 0, display: "block" }}
        loading="lazy"
      />

      <div
        style={{
          padding: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <p style={{ color: "#64748b", marginBottom: 0 }}>{address}</p>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 20px",
            borderRadius: 999,
            background: "#0f172a",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Ouvrir Google Maps
        </a>
      </div>
    </div>
  );
}