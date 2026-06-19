type Props = {
  title: string;
  image: string;
  subtitle: string;
};

export default function Hero({
  title,
  image,
  subtitle,
}: Props) {
  return (
    <section
      style={{
        height: 460,
        borderRadius: 24,
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: 30,
      }}
    >
      <div>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: 4,
            fontSize: 13,
            marginBottom: 16,
          }}
        >
          BlissAppartement
        </p>

        <h1
          style={{
            fontSize: 56,
            margin: 0,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 500,
          }}
        >
          {title}
        </h1>

        <p
  style={{
    marginTop: 18,
    fontSize: 18,
  }}
>
  {subtitle}
</p>
      </div>
    </section>
  );
}