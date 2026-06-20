import Hero from "../../components/Hero";
import FeatureCard from "../../components/FeatureCard";
import Gallery from "../../components/Gallery";
import DiscoverCard from "../../components/DiscoverCard";
import ReviewCard from "../../components/ReviewCard";
import ContactCard from "../../components/ContactCard";
import ServicesGrid from "../../components/ServicesGrid";
import { portGrimaud } from "../../data/portGrimaud";
import SectionTitle from "../../components/SectionTitle";
import ReviewsGallery from "../../components/ReviewsGallery";
import PricingCard from "../../components/PricingCard";
import LocationCard from "../../components/LocationCard";

export const metadata = {
  title: "Location appartement Port Grimaud | BlissAppartement",
  description:
    "Appartement avec vue sur la marina à Port Grimaud. Plage à pied, parking privé et tout confort.",
};

export default function PortGrimaud() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>
      <Hero
  title={portGrimaud.title}
  image={portGrimaud.image}
  subtitle={portGrimaud.subtitle}
/>

      <section style={{ marginTop: 30 }}>
        <SectionTitle
  title="Description"
  subtitle="Découvrez votre futur lieu de séjour au cœur de Port Grimaud."
/>
        <p>{portGrimaud.description}</p>
      </section>


      <section style={{ marginTop: 30 }}>
        <SectionTitle
  title="Informations"
  subtitle="Les principales caractéristiques de l'appartement."
/>
        <ul>
          {portGrimaud.infos.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      </section>

          <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Le logement"
    subtitle="Tout le confort nécessaire pour un séjour agréable."
  />

  <ul style={{ lineHeight: 2 }}>
    {portGrimaud.housing.map((item, i) => (
      <li key={i}>✔ {item}</li>
    ))}
  </ul>
</section>

<section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Informations pratiques"
    subtitle="Services complémentaires et conditions de séjour."
  />

  <ul style={{ lineHeight: 2 }}>
    {portGrimaud.practicalInfos.map((item, i) => (
      <li key={i}>✔ {item}</li>
    ))}
  </ul>
</section>

      <section style={{ marginTop: 50 }}>
        <SectionTitle
  title="Les points forts"
  subtitle="Les avantages qui rendent ce logement unique."
/>
        <div
  className="responsive-grid-2"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
    marginTop: 20,
  }}
>
          <FeatureCard title="À 400m de la plage" description="Accès rapide à pied aux plages de Port Grimaud." />
          <FeatureCard title="Cartes de coche d'eau de la mi-juin à la mi-septembre " description="" />
          <FeatureCard title="Parking réservé" description="Place de parking privée." />
          <FeatureCard title="Vue dégagée" description="Superbe vue sur la cité lacustre: idéal pour les apéritifs au soleil couchant!" />
        </div>
      </section>

      <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Services"
  subtitle="Tout le nécessaire pour un séjour confortable."
/>
        <ServicesGrid services={portGrimaud.services} />
      </section>

      <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Galerie photos"
  subtitle="Découvrez l'appartement en images."
/>
        <Gallery images={portGrimaud.gallery} />
      </section>

            <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Découvrir Port Grimaud"
  subtitle="Explorez les incontournables de la cité lacustre."
/>
        <div
  className="responsive-grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    marginTop: 20,
  }}
>
  
          {portGrimaud.discover.map((place, i) => (
            <DiscoverCard key={i} title={place.title} description={place.description} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Tarifs & disponibilités"
    subtitle="Consultez les périodes disponibles pour votre séjour."
  />

  <div style={{ marginTop: 30 }}>
    <SectionTitle title="☀️ Saison 2026" />
    <PricingCard prices={portGrimaud.availability.season2026} />
  </div>

  <div style={{ marginTop: 50 }}>
    <SectionTitle title="☀️ Saison 2027" />
    <PricingCard prices={portGrimaud.availability.season2027} />
  </div>
</section>


      <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Livre d'or"
    subtitle="Découvrez les avis laissés par nos voyageurs."
  />

  <ReviewsGallery images={portGrimaud.reviewImages} />
</section>

    <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Localisation"
    subtitle="Ouvrez l’adresse directement dans Google Maps."
  />

  <LocationCard
  title={portGrimaud.location.title}
  address={portGrimaud.location.address}
  mapUrl={portGrimaud.location.mapUrl}
  embedUrl={portGrimaud.location.embedUrl}
/>
</section>

      <section style={{ marginTop: 60, marginBottom: 60 }}>
        <ContactCard email={portGrimaud.contact.email} phone={portGrimaud.contact.phone} />
      </section>
    </main>
  );
}
