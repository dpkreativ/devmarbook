'use client';
import useEmblaCarousel from 'embla-carousel-react';

export default function Carousel({ children }) {
  const [ref] = useEmblaCarousel();
  return (
    <div
      className="overflow-scroll w-full max-w-3xl mx-auto py-5 rounded-2xl"
      ref={ref}
    >
      <div className="flex gap-5 md:gap-10">{children}</div>
    </div>
  );
}
