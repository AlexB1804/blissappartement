import Hero from "../../components/Hero";
import FeatureCard from "../../components/FeatureCard";
import Gallery from "../../components/Gallery";
import DiscoverCard from "../../components/DiscoverCard";
import ReviewCard from "../../components/ReviewCard";
import ContactCard from "../../components/ContactCard";
import { aix } from "../../data/aix";
import ServicesGrid from "../../components/ServicesGrid";
import SectionTitle from "../../components/SectionTitle";
import PricingCard from "../../components/PricingCard";
import LocationCard from "../../components/LocationCard";

export const metadata = {
  title: "Location gîte Aix-en-Provence | BlissAppartement",
  description:
    "Gîte tout confort à Aix-en-Provence dans le quartier de Célony avec parking privé et terrasse.",
};

export default function Aix() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>
      <Hero
  title={aix.title}
  image={aix.image}
  subtitle={aix.subtitle}
/>

      <section style={{ marginTop: 30 }}>
        <SectionTitle
  title="Description"
  subtitle="Découvrez votre futur lieu de séjour à Aix-en-Provence."
/>
        <p>{aix.description}</p>
      </section>

      <section style={{ marginTop: 30 }}>
        <SectionTitle
  title="Informations"
  subtitle="Les principales caractéristiques de l'appartement."
/>
        <ul>
          {aix.infos.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Le logement"
    subtitle="Un gîte confortable et entièrement équipé pour découvrir la Provence."
  />

  <ul style={{ lineHeight: 2 }}>
    {aix.housing.map((item, i) => (
      <li key={i}>✔ {item}</li>
    ))}
  </ul>
</section>

<section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Informations pratiques"
    subtitle="Les équipements et informations utiles pour votre séjour."
  />

  <ul style={{ lineHeight: 2 }}>
    {aix.practicalInfos.map((item, i) => (
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
          <FeatureCard title="Terrasse privative" description="Profitez du soleil provençal." />
          <FeatureCard title="4 couchages" description="Idéal pour famille ou couple." />
          <FeatureCard title="Localisation" description="A 3 km du centre d'Aix et à 1km des différents axes routiers permettant de visiter la région." />
          <FeatureCard title="Cuisine équipée" description="Tout le nécessaire pour cuisiner." />
        </div>
      </section>

<section style={{ marginTop: 60 }}>
  <SectionTitle
  title="Services"
  subtitle="Tout le nécessaire pour un séjour confortable."
/>

  <ServicesGrid services={aix.services} />
</section>

      <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Galerie photos"
  subtitle="Découvrez l'appartement en images."
/>
        <Gallery images={aix.gallery} />
      </section>

    <section style={{ marginTop: 60 }}>
        <SectionTitle
  title="Découvrir la Provence"
  subtitle="Explorez les incontournables d'Aix et de ses alentours."
/>

        <div
  className="discover-grid"
  style={{
    display: "grid",
    gap: 20,
    marginTop: 20,
  }}
>
          {aix.discover.map((place, i) => (
            <DiscoverCard key={i} title={place.title} description={place.description} />
          ))}
        </div>
      </section>

    <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Tarifs"
    subtitle="Les prix peuvent varier selon les périodes et les disponibilités."
  />

  <PricingCard prices={aix.prices} />
</section>



      <section style={{ marginTop: 60 }}>
  <SectionTitle
    title="Localisation"
    subtitle="Ouvrez l’adresse directement dans Google Maps."
  />

  <LocationCard
    title={aix.location.title}
    address={aix.location.address}
    mapUrl={aix.location.mapUrl}
    embedUrl={aix.location.embedUrl}
  />
</section>

      <section style={{ marginTop: 60, marginBottom: 60 }}>
        <ContactCard email={aix.contact.email} phone={aix.contact.phone} />
      </section>
    </main>
  );
}