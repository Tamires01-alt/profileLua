import Image from "next/image";
import Parte1 from "@/app/componente/parte1"
import Parte2 from "@/app/componente/parte2"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-[#020202]">
        <Parte1/>
        <Parte2/>
    </div>
  );
}
