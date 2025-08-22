"use client";
import { useState } from "react";

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Botão de Fechar */}
        <button
          className="absolute  text-white text-3xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function VideoCard({ videoId, onClick }: { videoId: string; onClick: () => void }) {
  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="Thumbnail"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Play customizado */}
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

  // mesmo vídeo repetido 6 vezes
  const videos = Array(6).fill("IWVJq-4zW24");

  return (
    <div className="flex flex-col items-center gap-6 p-6 text-[#fff] min-h-screen pt-170">
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Quem busca qualidade, escolhe a FRAME FILMS.
      </h1>

      <p className="text-center max-w-2xl text-lg md:text-xl">Vídeos</p>

      {/* Grid com thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {videos.map((id, index) => (
          <VideoCard key={index} videoId={id} onClick={() => setSelectedVideo(id)} />
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}
