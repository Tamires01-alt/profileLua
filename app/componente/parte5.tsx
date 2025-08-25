"use client";

import Image from "next/image";

export default function Home() {
  const perfis = [
    {
      nome: "Direção de Fotografia",
      descricao: "Responsável pela estética visual das produções, capturando imagens que traduzem emoção e narrativa.",
      foto: "/23022022-IMG_9655.jpg",
    },
    {
      nome: "Câmera e Captação de Áudio",
      descricao: "Especialista em operação de câmeras e captação sonora, garantindo qualidade técnica e imersão audiovisual.",
      foto: "/IMG_4127 (1).JPG",
    },
    {
      nome: "Pós-Produção",
      descricao: "Profissional de edição e tratamento de imagens, montando narrativas coerentes e impactantes.",
      foto: "/IMG-20240127-WA0012.jpg",
    },
    {
      nome: "Direção de Pós-Produção",
      descricao: "Coordena a finalização dos projetos, assegurando consistência visual e sonora em todas as produções.",
      foto: "/FOTOGRAFIAS/Autorais/ExposiçãoMatriarcas/EQUIPEIMG_0316.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12 p-6 text-[#6f48a6] bg-[#fff]">
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#6f48a6]">
        Direção de fotografia, câmera, captação de áudio e pós-produção
      </h1>

      <div className="flex flex-col gap-8 max-w-5xl w-full">
        {perfis.map((perfil, index) => (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row items-center gap-4 text-[#6f48a6]
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
          >
            <Image
              src={perfil.foto}
              alt={perfil.nome}
              width={250}
              height={250}
              className="rounded-lg object-cover w-full md:w-64 h-auto"
            />
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-lg font-bold">{perfil.nome}</h2>
              <p className="text-sm">{perfil.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
