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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 20,
        }}
      >
        {visibleImages.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Avis ${i + 1}`}
            onClick={() => setSelectedImage(image)}
            style={{
              width: "100%",
              height: 500,
              objectFit: "contain",
              borderRadius: 18,
              border: "1px solid #e5e7eb",
              background: "white",
              padding: 10,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {images.length > 3 && (
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid #0f172a",
              background: "white",
              cursor: "pointer",
            }}
          >
            {showAll ? "Voir moins" : "Voir plus d’avis"}
          </button>
        </div>
      )}

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}