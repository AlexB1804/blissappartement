"use client";

type Props = {
  image: string | null;
  onClose: () => void;
};

export default function ImageModal({ image, onClose }: Props) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: 12,
        }}
      />
    </div>
  );
}