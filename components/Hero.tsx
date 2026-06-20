type Props = {
  title: string;
  image: string;
  subtitle: string;
};

export default function Hero({ title, image, subtitle }: Props) {
  return (
    <section
      className="destination-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url(${image})`,
      }}
    >
      <div>
        <p className="destination-hero-kicker">BlissAppartement</p>
        <h1 className="destination-hero-title">{title}</h1>
        <p className="destination-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}