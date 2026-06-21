type Props = {
  title: string;
  description: string;
};

export default function DiscoverCard({ title, description }: Props) {
  return (
    <div
      style={{
        padding: 28,
        borderRadius: 22,
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
      }}
    >

      <h3
        style={{
          marginTop: 0,
          marginBottom: 12,
          fontSize: 20,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500,
        }}
      >
        {title}
      </h3>

      <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  );
}