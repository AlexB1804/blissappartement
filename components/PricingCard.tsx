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
    <div className="pricing-list">
      {prices.map((item, i) => (
        <div
          key={i}
          className={`pricing-item ${item.booked ? "pricing-booked" : ""}`}
        >
          <span className="pricing-period">
            {item.period}
          </span>

          <span className="pricing-price">
            {item.booked ? "RÉSERVÉ" : item.price}
          </span>
        </div>
      ))}
    </div>
  );
}