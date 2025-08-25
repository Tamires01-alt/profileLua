import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511967302340" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
       <Image 
        src="/whatsAppLogo.jpg" 
        alt="WhatsApp Logo" 
        width={30} 
        height={30} 
        className="rounded-full  hover:scale-110 transition-transform duration-300"
    />
    </a>
  );
}