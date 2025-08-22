"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/image.jpg",
  "/image.jpg",
  "/image.jpg",
  "/image.jpg",
  "/image.jpg",
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scrollStep = 1; 
    const speed = 10; 

    const interval = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; 
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, speed);

    return () => clearInterval(interval);
  }, []);

  
  const displayImages = [...images, ...images];

  return (
    <div className="flex flex-col items-center gap-6 p-6 text-white min-h-screen pt-140 ">
      <p className="text-center max-w-2xl text-lg md:text-xl">Fotos</p>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden whitespace-nowrap w-full max-w-6xl"
      >
        {displayImages.map((src, index) => (
          <div key={index} className="inline-block flex-shrink-0 w-104 h-120 relative rounded-lg overflow-hidden shadow-lg">
            <Image src={src} alt={`Foto ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
