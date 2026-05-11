"use client";

import { useRef } from "react";

type ProductCarouselProps = {
  productKey: string;
  title: string;
  gallery: string[];
};

export default function ProductCarousel({
  productKey,
  title,
  gallery,
}: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const offset = track.clientWidth * (direction === "next" ? 1 : -1);
    track.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="carousel-track flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-xl bg-[var(--surface)] p-3 scroll-smooth"
        role="group"
        aria-label={`Carrusel de imagenes de ${title}`}
      >
        {gallery.map((item, index) => (
          <div
            key={`${productKey}-img-${index}`}
            className="placeholder-box flex min-h-[140px] min-w-full snap-center items-center justify-center rounded-lg"
          >
            <span className="placeholder-label">{item}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--bg-elev)] p-2 text-[var(--text)] shadow-sm transition hover:border-[var(--accent)]"
        aria-label={`Imagen anterior de ${title}`}
        onClick={() => scrollByAmount("prev")}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--bg-elev)] p-2 text-[var(--text)] shadow-sm transition hover:border-[var(--accent)]"
        aria-label={`Imagen siguiente de ${title}`}
        onClick={() => scrollByAmount("next")}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
