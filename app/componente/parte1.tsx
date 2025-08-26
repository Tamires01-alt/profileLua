import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 text-[#fff] bg-[#b851a2]">
      
      {/* Logo acima do texto */}
      <Image
        src="/image69.png"      // substitua pelo caminho do seu logo
        alt="Logo da Empresa"
        width={150}          // ajuste o tamanho conforme necessário
        height={150}
      />

      <h1 className="text-3xl md:text-5xl font-semibold text-center max-w-300">
          Traduzo a força da cena em imagens que respiram sensibilidade, movimento e verdade.
      </h1>

      <p className="text-center max-w-2xl text-lg md:text-xl">
          Através do audiovisual, reconstruo imaginários e recrio histórias que fortalecem as narrativas do território periférico.
      </p>

      {/* Vídeo do YouTube */}
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/PShmr5PnpLw"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Botão de Orçamento */}
      <a
        href="https://wa.me/5511967302340"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 bg-green-500 text-white rounded-full font-semibold"
      >
        <Image
          src="/whatsAppLogo.jpg"
          alt="WhatsApp Logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>Faça seu orçamento</span>
      </a>
    </div>
  );
}
