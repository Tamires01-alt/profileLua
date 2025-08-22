import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 text-[#fff] min-h-screen pt-180">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        Vídeos que impulsionam negócios
      </h1>

      <p className="text-center max-w-2xl text-lg md:text-xl">
        Dê forma às suas ideias e conquiste a atenção do seu público com a
        produtora audiovisual mais completa do Brasil.
      </p>

      {/* Vídeo do YouTube */}
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/XF_h0suRtTs"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Botão de Orçamento */}
      <a
        href="https://wa.me/5599999999999?text=Olá! Gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
      >
        SOLICITE O SEU ORÇAMENTO
      </a>
    </div>
  );
}
