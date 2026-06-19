import Link from "next/link";

type Props = {
  title: string;
  image: string;
  href: string;
};

export default function DestinationCard({
  title,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          height: 300,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "0.3s",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        />

        <h2
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}