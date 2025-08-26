"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Álbuns com nomes descritivos
const albums = {
  reclusaZonaAgbara: [
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1187.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1191.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1294.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1436.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1437.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1468.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1607.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1611.jpg",
  ],
  circuitoVozesDoCorpo: [
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-2.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-3.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-4.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-5.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-6.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-7.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-8.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-9.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-10.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-11.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-12.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA.jpg",
  ],
  corposNegrosESobrevidas: [
    "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-2.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-3.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-5.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-7.jpg",
  ],
  dancaPilaresZonaAgbara: [
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana1.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana2.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana3.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana4.jpg",
  ],
  zonaAgbara: [
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-1884.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2010.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2032.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2076.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2076.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2287.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2429.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2447.jpg",
  ],
  regurgitarOMundo: [
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_6967.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7089.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7245.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7775.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7895.jpg",
  ],
};

const albumNames: Record<string, string> = {
  reclusaZonaAgbara: "Reclusa Zona Agbara",
  circuitoVozesDoCorpo: "Circuito Vozes do Corpo - Cia Sansacroma",
  corposNegrosESobrevidas: "VALA: Corpos Negros e Sobrevidas - Cia Sansacroma",
  dancaPilaresZonaAgbara: "Web serie: 'Pilares' Zona Agbara",
  zonaAgbara: "Espetaculo: 'Pilares' Zona Agbara",
  regurgitarOMundo: "Engasgadas, um rito para regurgitar o mundo",
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentAlbum, setCurrentAlbum] = useState<keyof typeof albums>("reclusaZonaAgbara");

  // Scroll automático do carrossel
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
  }, [currentAlbum]);

  const displayImages = [...albums[currentAlbum], ...albums[currentAlbum]];

  return (
    <div className="flex flex-col items-center gap-6 text-white pt-20 bg-[#fff]">
      <p className="text-center max-w-2xl text-lg md:text-xl text-[#fff] bg-[#6f48a6] p-3 font-semibold rounded-md">
        Artes Cênicas
      </p>

      {/* Botões para alternar entre álbuns */}
      <div className="grid grid-cols-2 gap-2 mb-4 sm:flex sm:gap-2 sm:overflow-x-auto sm:no-scrollbar p-2">
        {Object.keys(albums).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentAlbum(key as keyof typeof albums)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentAlbum === key
                ? "bg-[#e4538d] text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            {albumNames[key]}
          </button>
        ))}
      </div>

      {/* Carrossel de imagens */}
      <div
        ref={scrollRef}
        className="flex gap-1 overflow-x-hidden whitespace-nowrap w-screen"
      >
        {displayImages.map((src, index) => (
          <div
            key={index}
            className="inline-block flex-shrink-0 relative w-[300px] h-[200px] md:w-[500px] md:h-[500px]"
          >
            <Image
              src={src}
              alt={`Foto ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
