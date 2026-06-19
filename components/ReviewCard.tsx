type Props = {
  author: string;
  text: string;
};

export default function ReviewCard({ author, text }: Props) {
  return (
    <div
      style={{
        padding: 28,
        borderRadius: 22,
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
      }}
    >
      <p
        style={{
          margin: 0,
          fontStyle: "italic",
          color: "#475569",
          lineHeight: 1.7,
        }}
      >
        “{text}”
      </p>

      <p
        style={{
          marginTop: 18,
          marginBottom: 0,
          fontWeight: 600,
          color: "#0f172a",
        }}
      >
        — {author}
      </p>
    </div>
  );
}