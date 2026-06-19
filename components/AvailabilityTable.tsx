type Period = {
  period: string;
  price: string;
  available: boolean;
};

type Props = {
  title: string;
  periods: Period[];
};

export default function AvailabilityTable({
  title,
  periods,
}: Props) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3
        style={{
          fontSize: 28,
          fontFamily: "Georgia, serif",
        }}
      >
        {title}
      </h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 20,
        }}
      >
        <thead>
          <tr>
            <th style={cellHeader}>Période</th>
            <th style={cellHeader}>Tarif</th>
            <th style={cellHeader}>Disponibilité</th>
          </tr>
        </thead>

        <tbody>
          {periods.map((period, index) => (
            <tr key={index}>
              <td style={cell}>{period.period}</td>

              <td style={cell}>{period.price}</td>

              <td
                style={{
                  ...cell,
                  color: period.available
                    ? "#16a34a"
                    : "#dc2626",
                  fontWeight: 700,
                }}
              >
                {period.available
                  ? "Disponible"
                  : "Réservé"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellHeader = {
  textAlign: "left" as const,
  padding: "14px",
  borderBottom: "2px solid #e5e7eb",
};

const cell = {
  padding: "14px",
  borderBottom: "1px solid #e5e7eb",
};