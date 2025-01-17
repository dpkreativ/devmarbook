"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children }) {
  const [ref] = useEmblaCarousel({ dragFree: true, loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  return (
    <div className="overflow-hidden" ref={ref}>
      {/* Carousel content */}
      <div className="flex gap-4 backface-visible touch-pan-y ml-[calc(1rem*-1)] cursor-grab active:cursor-grabbing py-4">
        {children}
      </div>
    </div>
  );
}
