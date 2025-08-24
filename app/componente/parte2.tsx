"use client";
import { useState } from "react";

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl"
          src={videoId.includes("youtube") || videoId.includes("youtu.be") ? `${videoId.replace("watch?v=", "embed/")}` : videoId}
          title="Vídeo"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
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
    ? `https://img.youtube.com/vi/${videoId.split("v=")[1] || videoId.split("/").pop()}/hqdefault.jpg`
    : "/thumbnail-placeholder.jpg"; // coloca um placeholder para links que não são YouTube

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
      "https://www.instagram.com/tv/CLIED4rhOYL/",
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
    <div className="flex flex-col items-center gap-6 text-white">
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Quem busca qualidade, escolhe a FRAME FILMS.
      </h1>
      <p className="text-center max-w-2xl text-lg md:text-xl">Vídeos</p>

      {/* Abas */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        {Object.keys(videoAlbums).map((albumKey) => (
          <button
            key={albumKey}
            onClick={() => setCurrentTab(albumKey as keyof typeof videoAlbums)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentTab === albumKey ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
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
