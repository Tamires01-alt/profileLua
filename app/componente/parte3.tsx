"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const albums = {
  album1: ["/FOTOGRAFIAS/ColetivoAMEM/Santana-8.jpg", "/FOTOGRAFIAS/ColetivoAMEM/Santana-9.jpg", "/FOTOGRAFIAS/ColetivoAMEM/Santana-8.jpg", "/FOTOGRAFIAS/ColetivoAMEM/Santana-10.jpg", "/FOTOGRAFIAS/ColetivoAMEM/Santana.jpg"],
  album2: ["/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1187.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1191.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1294.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1436.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1437.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1468.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1592.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1494.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1607.jpg", "/FOTOGRAFIAS/ArtesCênicas/Espetáculo_Reclusa_ZonaAgbara/IMG_1611.jpg"],
  album3: ["/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-2.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-3.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-4.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-5.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-6.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-7.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-8.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-9.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-10.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-11.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA-12.jpg", "/FOTOGRAFIAS/ArtesCênicas/CircuitoVozesdoCorpo/SANTANA.jpg",],
  album4: ["/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-2.jpg", "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-3.jpg", "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-5.jpg", "/FOTOGRAFIAS/ArtesCênicas/CorposNegroseSobrevidas/Santana-7.jpg", ],
  album5: ["/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana.jpg", "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana1.jpg", "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana2.jpg", "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana3.jpg", "/FOTOGRAFIAS/ArtesCênicas/DançaPilaresZonaAgbara/Santana4.jpg"],
  album6: ["/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-1884.jpg", "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2010.jpg", "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2032.jpg", "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2076.jpg", "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2076.jpg",  "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2287.jpg",  "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2429.jpg",  "/FOTOGRAFIAS/ArtesCênicas/ZonaAgbara/Santana-2447.jpg"],
  album7: ["/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_6967.jpg", "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7089.jpg", "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7245.jpg", "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7775.jpg", "/FOTOGRAFIAS/ArtesCênicas/regurgitaromundo/IMG_7895.jpg",   ],
  album8: ["/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-1.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-1.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-2.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-3.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-4.jpg",  "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-8.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-10.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-14.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-15.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-16.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-17.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-20.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-21.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-22.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-23.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-24.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãodeFotosCoxia/Impressão-25.jpg",],
  album9: ["/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/EQUIPEIMG_0316.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-2.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-3.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-4.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-5.jpg",  "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-6.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-7.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-8.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-10.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-11.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-12.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-13.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-16.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-17.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-18.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-19.jpg", "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/matriarcas-20.jpg",],
  album10: ["/FOTOGRAFIAS/Música/aLBUMSintonizenaEstaçãodoAmorDanilova/amor-9276.jpg", "/FOTOGRAFIAS/Música/aLBUMSintonizenaEstaçãodoAmorDanilova/amor-9295.jpg"],
  album11: ["/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-1.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-2.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-3.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-4.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-5.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-6.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-7.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-8.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-9.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-10.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-11.jpg","/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-12.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-13.jpg", "/FOTOGRAFIAS/Música/ENSAIODANILOVA/DUBLOVASOUND-14.jpg"],
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentAlbum, setCurrentAlbum] = useState<keyof typeof albums>("album1");

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
  }, [currentAlbum]); // reinicia o efeito ao trocar de álbum

  const displayImages = [...albums[currentAlbum], ...albums[currentAlbum]];

  return (
    <div className="flex flex-col items-center gap-6 text-white min-h-screen">
      <p className="text-center text-lg md:text-xl">Fotos</p>

      {/* Botões para alternar entre álbuns */}
      <div className="flex gap-4 mb-4">
        {Object.keys(albums).map((albumKey) => (
          <button
            key={albumKey}
            onClick={() => setCurrentAlbum(albumKey as keyof typeof albums)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentAlbum === albumKey ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {albumKey.toUpperCase()}
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
           className="inline-block flex-shrink-0 relative w-[300px] h-[200px] md:w-[500px] md:h-[500px] "
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
