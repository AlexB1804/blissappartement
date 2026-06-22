"use client";

import { useRef, useState } from "react";
import ImageModal from "./ImageModal";



type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <>
      <div>
        <div
        className="gallery-grid"
          style={{
            display: "grid",
            gap: 16,
            marginTop: 20,
          }}
        >
          {visibleImages.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Photo ${i + 1}`}
              onClick={() => setSelectedImage(image)}
              style={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                borderRadius: 16,
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
              }}
            />
          ))}
        </div>

        {images.length > 3 && (
          <div
  ref={buttonRef}
  style={{ textAlign: "center", marginTop: 28 }}
>
            <button
              onClick={() => {
  if (showAll) {
    setShowAll(false);

    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  } else {
    setShowAll(true);
  }
}}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid #0f172a",
                background: "white",
                cursor: "pointer",
              }}
            >
              {showAll ? "Voir moins" : "Voir plus de photos"}
            </button>
          </div>
        )}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}