import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const icons = [
    {
      src: "/whatsapp.png",
      alt: "WhatsApp",
      link: "https://wa.me/5511967302340",
    },
    {
      src: "/instagram.png",
      alt: "Instagram",
      link: "https://www.instagram.com/luasantanaaudiovisual?igsh=dmJydThtNjk3M3Nk",
    },
  ];

  return (
    <div className="relative w-full h-[28rem] md:h-64" id="contato">
      {/* Fundo */}
      <Image
        src="/assets/predios.jpg"
        alt="Imagem de prédios"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#b851a2] bg-opacity-80"></div>

      {/* Conteúdo */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center
          md:flex-row md:items-start md:justify-start
          text-white gap-6 px-6 md:px-12 max-w-full md:max-w-5xl mx-auto
        "
      >
        {/* Imagem + ícones */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-60">
          <Image
            src="/image69.png"
            alt="Imagem de Fundo"
            quality={100}
            width={180}
            height={180}
            className="rounded-lg object-cover"
          />

          <div className="flex flex-row gap-4 mb-2 md:ml-8">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Image src={icon.src} alt={icon.alt} width={20} height={20} quality={100} />
              </a>
            ))}
          </div>
        </div>

        {/* Texto de contato */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center  mt-6 md:mt-0">
          <h2 className="text-2xl md:text-xl font-bold md:ml-10 mr-5 md:mt-6">Contato</h2>

          <div className="flex items-center gap-2 mr-10">
            <Phone color="red" size={20} />
            <span>+55 11 96730-2340</span>
          </div>

          <div className="flex items-center gap-2 mr-10">
            <MapPin color="red" size={20} />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
