"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// TODOS OS ÁLBUNS
const albums = {
  SeriedevideodançaRetratosCiaSansacroma: [
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/1.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/2.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/3.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/4.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/5.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/6.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/7.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/SeriedevideodançaRetratosCiaSansacroma/8.jpg",
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
  regurgitarOMundo: [
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_6967.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7089.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7245.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7775.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7895.jpg",
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
  dancaPilaresZonaAgbara: [
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana1.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana2.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana3.jpg",
    "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana4.jpg",
  ],
};

// nomes para os botões
const albumNames: Record<string, string> = {
  SeriedevideodançaRetratosCiaSansacroma:
    "Serie de video dança Retratos Cia Sansacroma",
  circuitoVozesDoCorpo: "Circuito Vozes do Corpo - Cia Sansacroma",
  corposNegrosESobrevidas: "VALA: Corpos Negros e Sobrevidas - Cia Sansacroma",
  regurgitarOMundo: "Engasgadas, um rito para regurgitar o mundo",
  zonaAgbara: "Espetáculo: 'Pilares' Zona Agbara",
  reclusaZonaAgbara: "Espetáculo: Reclusa Zona Agbara",
  dancaPilaresZonaAgbara: "Web série: 'Pilares' Zona Agbara",
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentAlbum, setCurrentAlbum] = useState<
    keyof typeof albums
  >("SeriedevideodançaRetratosCiaSansacroma");

  // modal fullscreen
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // scroll automático
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

  const openModal = (index: number) => {
    setCurrentIndex(index % albums[currentAlbum].length);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % albums[currentAlbum].length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + albums[currentAlbum].length) % albums[currentAlbum].length
    );

  return (
    <div className="flex flex-col items-center gap-6 text-white pt-20 bg-[#fff]">
      <p className="text-center max-w-2xl text-lg md:text-xl text-[#fff] bg-[#6f48a6] p-3 font-semibold rounded-md">
        Artes Cênicas
      </p>

      {/* Botões de seleção de álbum */}
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
            className="inline-block flex-shrink-0 relative w-[300px] h-[200px] md:w-[500px] md:h-[500px] cursor-pointer"
            onClick={() => openModal(index)}
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

      {/* Modal fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          {/* fechar */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={closeModal}
          >
            <X size={40} />
          </button>

          {/* anterior */}
          <button className="absolute left-6 text-white" onClick={prevImage}>
            <ChevronLeft size={50} />
          </button>

          {/* imagem ampliada */}
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={albums[currentAlbum][currentIndex]}
              alt="Imagem ampliada"
              fill
              className="object-contain"
            />
          </div>

          {/* próximo */}
          <button className="absolute right-6 text-white" onClick={nextImage}>
            <ChevronRight size={50} />
          </button>
        </div>
      )}
    </div>
  );
}
