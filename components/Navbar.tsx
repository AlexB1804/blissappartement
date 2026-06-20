"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          BlissAppartement
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

        <nav className={open ? "navbar-links open" : "navbar-links"}>
          <Link href="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>

          <Link href="/port-grimaud" onClick={() => setOpen(false)}>
            Port Grimaud
          </Link>

          <Link href="/risoul" onClick={() => setOpen(false)}>
            Risoul
          </Link>

          <Link href="/aix-en-provence" onClick={() => setOpen(false)}>
            Aix-en-Provence
          </Link>

          <a
            className="navbar-reserve"
            href="mailto:blissappartement@gmail.com?subject=Demande%20de%20réservation"
          >
            Réserver
          </a>
        </nav>
      </div>
    </header>
  );
}