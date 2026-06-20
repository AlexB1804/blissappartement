import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        padding: "18px 40px",
        borderBottom: "1px solid #e5e5e5",
        zIndex: 1000,
      }}
    >
      <div
        className="navbar-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: 500,
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.5px",
            }}
          >
            BlissAppartement
          </h2>
        </Link>

        <nav
          className="navbar-links"
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          <Link href="/" style={linkStyle}>Accueil</Link>
          <Link href="/port-grimaud" style={linkStyle}>Port Grimaud</Link>
          <Link href="/risoul" style={linkStyle}>Risoul</Link>
          <Link href="/aix-en-provence" style={linkStyle}>Aix-en-Provence</Link>

          <a
            className="navbar-reserve"
            href="mailto:blissappartement@gmail.com?subject=Demande%20de%20réservation"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "#0f172a",
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Réserver
          </a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#334155",
  fontWeight: 500,
  fontSize: "15px",
  letterSpacing: "0.3px",
};
