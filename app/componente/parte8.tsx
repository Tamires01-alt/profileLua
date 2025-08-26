import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6 text-[#fff] bg-[#b851a2] md:h-100">
      <div className="text-3xl font-bold">
         Quem é a Lua?
      </div>
      <div className="flex md:flex-row flex-col gap-3 items-center">
        <Image 
          src="/image68.png" 
          alt="Foto de perfil" 
          width={350} 
          height={350} 
          className="rounded-full object-cover"
        />
        <div className="md:max-w-[450px] text-xl font-medium">
          Sou Lua Santana, cineasta, fotógrafa, técnica audiovisual e dançarina.
          Com 7 anos de atuação especializada em audiovisual para espetáculos,
          shows, projetos culturais e produções artísticas independentes,
          desenvolvi um olhar sensível e artístico para captar a essência do
          que o/a artista traz em cena e traduzi-la em imagem.
        </div>
      </div>
    </div>
  );
}
