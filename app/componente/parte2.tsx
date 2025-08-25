"use client";
import { useState } from "react";

// Função para converter links do YouTube em formato de embed
function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v") || "";
    } else if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1); // pega depois de youtu.be/
    }

    // Captura parâmetro de tempo (t) para start
    const start = parsedUrl.searchParams.get("t");
    const startParam = start ? `?start=${parseInt(start)}` : "";

    return `https://www.youtube.com/embed/${videoId}${startParam}`;
  } catch {
    return url;
  }
}

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  const isYouTube = videoId.includes("youtube") || videoId.includes("youtu.be");
  const isInstagram = videoId.includes("instagram.com");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-4xl aspect-video bg-black flex items-center justify-center rounded-xl">
        {isYouTube ? (
          <iframe
            className="w-full h-full rounded-xl"
            src={getYouTubeEmbedUrl(videoId)}
            title="Vídeo"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : isInstagram ? (
          <a
            href={videoId}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg underline"
          >
            Abrir vídeo no Instagram
          </a>
        ) : (
          <p className="text-white">Não é possível exibir este vídeo diretamente.</p>
        )}
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function VideoCard({ videoId, onClick }: { videoId: string; onClick: () => void }) {
  const isYouTube = videoId.includes("youtube") || videoId.includes("youtu.be");
  const thumb = isYouTube
    ? `https://img.youtube.com/vi/${videoId.includes("v=")
      ? new URL(videoId).searchParams.get("v")
      : videoId.split("/").pop()
    }/hqdefault.jpg`
    : "/thumbnail-placeholder.jpg";

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={thumb}
        alt="Thumbnail"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
          ▶
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<keyof typeof videoAlbums>("Artes Cênicas");

  const videoAlbums = {
    "Artes Cênicas": [
      "https://youtu.be/gG6p88nT97s",
      "https://youtu.be/bwBwXwni_Q8",
      "https://www.youtube.com/watch?v=Cr0QiYpaX_w&t=493s",
      "https://youtu.be/OXnWF9yqGn0",
      "https://youtu.be/LpPwcmS_GM8",
      "https://www.youtube.com/watch?v=Qhlu5hvi6XA&t=2770s",
      "https://www.youtube.com/watch?v=TYsiDj5KpEg&t=786s",
      "https://www.youtube.com/watch?v=RKJOowdElsY",
    ],
    "Música": [
      "https://www.youtube.com/watch?v=lOKCmyx5qVc",
      "https://www.youtube.com/watch?v=MikPFdYJg7U",
      "https://youtu.be/-mYtt-QKK84",
    ],
    "Evento Cultural": ["https://youtu.be/_1k6iqgVk48"],
    "Institucional": [
      "https://www.youtube.com/watch?v=c8NDMe2gmYo",
      "https://www.youtube.com/watch?v=E6kY4WBdD28",
      "https://www.youtube.com/watch?v=WisdHGNRpp4",
      "https://www.youtube.com/watch?v=jAh2Vw1l0X4",
    ],
    "Cinema": [
      "https://youtu.be/PShmr5PnpLw",
      "https://www.youtube.com/watch?v=n4cJ3s-Djws",
    ],
  };

  const videos = videoAlbums[currentTab];

  return (
    <div className="flex flex-col items-center gap-6 text-white bg-[#fff] p-6">
      <h1 className="text-2xl md:text-4xl text-center text-[#6f48a6] font-semibold">
          O audiovisual que reconstrói histórias e conecta pessoas.
      </h1>
      <p className="text-center max-w-2xl text-lg md:text-xl text-[#fff] bg-[#6f48a6] p-3 font-semibold rounded-md">Vídeos</p>

      {/* Abas */}
      <div
        className="
    grid grid-cols-2 gap-2 mb-4 
    sm:flex sm:gap-2 sm:justify-start sm:overflow-x-auto sm:no-scrollbar
  "
      >
        {Object.keys(videoAlbums).map((albumKey) => (
          <button
            key={albumKey}
            onClick={() => setCurrentTab(albumKey as keyof typeof videoAlbums)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${currentTab === albumKey
                ? "bg-[#e4538d] text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
          >
            {albumKey}
          </button>
        ))}
      </div>

      {/* Grid de vídeos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {videos.map((link, index) => (
          <VideoCard key={index} videoId={link} onClick={() => setSelectedVideo(link)} />
        ))}
      </div>

      {selectedVideo && (
        <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}
