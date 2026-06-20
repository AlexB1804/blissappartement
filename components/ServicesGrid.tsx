type Props = {
  services: string[];
};

export default function ServicesGrid({ services }: Props) {
  return (
    <div className="services-grid">
      {services.map((service, i) => (
        <div key={i} className="service-item">
          {service}
        </div>
      ))}
    </div>
  );
}