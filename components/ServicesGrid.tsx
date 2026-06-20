type Props = {
  services: string[];
};

export default function ServicesGrid({ services }: Props) {
  return (
    <div
      className="responsive-grid-3"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
        marginTop: 20,
      }}
    >
      {services.map((service, i) => (
        <div
          key={i}
          style={{
            padding: 18,
            borderRadius: 16,
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            textAlign: "center",
            fontWeight: 500,
            color: "#334155",
          }}
        >
          {service}
        </div>
      ))}
    </div>
  );
}
