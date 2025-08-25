"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Álbuns com nomes descritivos
const albums = {
  exposicaoMatriarcas: [
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/EQUIPEIMG_0316.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-2.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-3.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-4.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-5.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-6.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-7.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-8.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-10.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-11.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-12.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-13.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-16.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-17.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-18.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-19.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-20.jpg",
  ],
  coletivoAMEM: [
    "/FOTOGRAFIAS/ColetivoAMEM/Santana-8.jpg",
    "/FOTOGRAFIAS/ColetivoAMEM/Santana-9.jpg",
    "/FOTOGRAFIAS/ColetivoAMEM/Santana-8.jpg",
    "/FOTOGRAFIAS/ColetivoAMEM/Santana-10.jpg",
    "/FOTOGRAFIAS/ColetivoAMEM/Santana.jpg",
  ],
  exposicaoCoxia: [
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-1.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-1.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-2.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-3.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-4.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-8.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-10.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-14.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-15.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-16.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-17.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-20.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-21.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-22.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-23.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-24.jpg",
    "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-25.jpg",
  ],
  sintonizeNaEstacaoDoAmor: [
    "/FOTOGRAFIAS/Música/aLBUMSintonizenaEstaçãodoAmorDanilova/amor-9276.jpg",
    "/FOTOGRAFIAS/Música/aLBUMSintonizenaEstaçãodoAmorDanilova/amor-9295.jpg",
  ],
  ensaioDanilova: [
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-1.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-2.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-3.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-4.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-5.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-6.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-7.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-8.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-9.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-10.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-11.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-12.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-13.jpg",
    "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-14.jpg",
  ],
};

// Mapear nomes amigáveis para os botões
const albumNames: Record<string, string> = {
  exposicaoMatriarcas: "Exposição Matriarcas",
  coletivoAMEM: "Coletivo AMEM",
  exposicaoCoxia: "Exposição Coxia",
  sintonizeNaEstacaoDoAmor: "Sintonize na Estação do Amor",
  ensaioDanilova: "Ensaio Danilova",
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentAlbum, setCurrentAlbum] = useState<keyof typeof albums>("coletivoAMEM");

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
    <div className="flex flex-col items-center gap-6 text-white bg-[#fff] p-3">
      <p className="text-center max-w-2xl text-lg md:text-xl text-[#fff] bg-[#6f48a6] p-3 font-semibold rounded-md">
        Autorais e Música
      </p>

      {/* Botões para alternar entre álbuns */}
      <div className="grid grid-cols-2 gap-4 mb-4 sm:flex sm:gap-4">
        {Object.keys(albums).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentAlbum(key as keyof typeof albums)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentAlbum === key
                ? "bg-[#e4538d]"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {albumNames[key]}
          </button>
        ))}
      </div>

      {/* Carrossel de imagens */}
      <div ref={scrollRef} className="flex gap-1 overflow-x-hidden whitespace-nowrap w-screen">
        {displayImages.map((src, index) => (
          <div
            key={index}
            className="inline-block flex-shrink-0 relative w-[300px] h-[200px] md:w-[500px] md:h-[500px]"
          >
            <Image src={src} alt={`Foto ${index + 1}`} fill className="object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
