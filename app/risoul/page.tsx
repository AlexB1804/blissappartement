import Hero from "../../components/Hero";
import FeatureCard from "../../components/FeatureCard";
import Gallery from "../../components/Gallery";
import DiscoverCard from "../../components/DiscoverCard";
import ReviewCard from "../../components/ReviewCard";
import ContactCard from "../../components/ContactCard";
import { risoul } from "../../data/risoul";
import ServicesGrid from "../../components/ServicesGrid";
import SectionTitle from "../../components/SectionTitle";
import ReviewsGallery from "../../components/ReviewsGallery";
import PricingCard from "../../components/PricingCard";
import LocationCard from "../../components/LocationCard";
import AvailabilityTable from "../../components/AvailabilityTable";

export const metadata = {
  title: "Location appartement Risoul 1850 | BlissAppartement",
  description:
    "Appartement skis aux pieds à Risoul 1850 avec piscine intérieure chauffée, sauna et vue montagne.",
};

export default function Risoul() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>
      <Hero
  title={risoul.title}
  image={risoul.image}
  subtitle={risoul.subtitle}
/>

      <section style={{ marginTop: 30 }}>
        <SectionTitle
  title="Description"
  subtitle="Découvrez votre futur lieu de séjour à Risoul."
/>
        <p>{risoul.description}</p>
      </section>


      <section style={{ marginTop: 30 }}>
        <SectionTitle
  title="Informations"
  subtitle="Les principales caractéristiques de l'appartement."
/>
        <ul>
          {risoul.infos.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      </section>

       <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Le logement"
    subtitle="Un appartement fonctionnel et parfaitement équipé pour vos vacances à la montagne."
  />

  <ul style={{ lineHeight: 2 }}>
    {risoul.housing.map((item, i) => (
      <li key={i}>✔ {item}</li>
    ))}
  </ul>
</section>

<section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Informations pratiques"
    subtitle="Les équipements et services disponibles durant votre séjour."
  />

  <ul style={{ lineHeight: 2 }}>
    {risoul.practicalInfos.map((item, i) => (
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
          <FeatureCard title="Au pied des pistes" description="Accès rapide aux pistes depuis la résidence." />
          <FeatureCard title="Balcon" description="Vue imprenable sur la montagne." />
          <FeatureCard title="Espace Bien-Être" description="Piscine et sauna disponibles dans la résidence." />
          <FeatureCard title="Casier à skis" description="Espace pratique pour ranger le matériel de ski." />
        </div>
      </section>

  <section style={{ marginTop: 60 }}>
  <SectionTitle
  title="Services"
  subtitle="Tout le nécessaire pour un séjour confortable."
/>

  <ServicesGrid services={risoul.services} />
</section>

      <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Galerie photos"
  subtitle="Découvrez l'appartement en images."
/>
        <Gallery images={risoul.gallery} />
      </section>

    <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Découvrir Risoul"
  subtitle="Explorez les incontournables de la station."
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

          {risoul.discover.map((place, i) => (
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
    <SectionTitle title="Été 2026" />
    <PricingCard prices={risoul.availability.summer2026} />
  </div>

  <div style={{ marginTop: 50 }}>
    <SectionTitle title="Hiver 2026 / 2027" />
    <PricingCard prices={risoul.availability.winter2026_2027} />
  </div>

  <div style={{ marginTop: 50 }}>
    <SectionTitle title="Été 2027" />
    <PricingCard prices={risoul.availability.summer2027} />
  </div>
</section>


      <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Livre d’or"
    subtitle="Quelques retours de voyageurs ayant séjourné dans l’appartement."
  />

  <ReviewsGallery images={risoul.reviewImages} />
</section>

    <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Localisation"
    subtitle="Ouvrez l’adresse directement dans Google Maps."
  />

  <LocationCard
  title={risoul.location.title}
  address={risoul.location.address}
  mapUrl={risoul.location.mapUrl}
  embedUrl={risoul.location.embedUrl}
/>
</section>

      <section style={{ marginTop: 60, marginBottom: 60 }}>
        <ContactCard email={risoul.contact.email} phone={risoul.contact.phone} />
      </section>
    </main>
  );
}