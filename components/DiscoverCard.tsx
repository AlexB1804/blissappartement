type Props = {
  title: string;
  description: string;
};

export default function DiscoverCard({ title, description }: Props) {
  return (
    <div className="discover-card">
      <h3 className="discover-card-title">
        {title}
      </h3>

      <p className="discover-card-description">
        {description}
      </p>
    </div>
  );
}