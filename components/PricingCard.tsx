type Price = {
  period: string;
  price: string;
  booked?: boolean;
};

type Props = {
  prices: Price[];
};

export default function PricingCard({ prices }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 20,
      }}
    >
      {prices.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 22px",
            borderRadius: 14,
            border: item.booked
              ? "1px solid #fecaca"
              : "1px solid #e5e7eb",
            background: item.booked ? "#fef2f2" : "#ffffff",
          }}
        >
          <span
            style={{
              fontWeight: 600,
              color: item.booked ? "#dc2626" : "#0f172a",
            }}
          >
            {item.period}
          </span>

          <span
            style={{
              fontWeight: 700,
              color: item.booked ? "#dc2626" : "#0f172a",
            }}
          >
            {item.booked ? "RÉSERVÉ" : item.price}
          </span>
        </div>
      ))}
    </div>
  );
}