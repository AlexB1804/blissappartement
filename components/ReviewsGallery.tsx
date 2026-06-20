"use client";

import { useState } from "react";
import ImageModal from "./ImageModal";

type Props = {
  images: string[];
};

export default function ReviewsGallery({ images }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <>
      <div className="reviews-grid">
        {visibleImages.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Avis ${i + 1}`}
            onClick={() => setSelectedImage(image)}
            className="review-image"
          />
        ))}
      </div>

      {images.length > 3 && (
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="reviews-button"
          >
            {showAll ? "Voir moins" : "Voir plus d’avis"}
          </button>
        </div>
      )}

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}