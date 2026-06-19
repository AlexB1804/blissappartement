type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div
      style={{
        marginBottom: 28,
      }}
    >
      <div
        style={{
          width: 60,
          height: 3,
          background: "linear-gradient(90deg, #0f172a, #94a3b8)",
          borderRadius: 999,
          marginBottom: 16,
        }}
      />

      <h2
        style={{
          margin: 0,
          fontSize: 34,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500,
          color: "#0f172a",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            marginTop: 12,
            marginBottom: 0,
            color: "#64748b",
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: 700,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}