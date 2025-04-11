
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const VideoEmbed = ({ videoId, title, className = "" }: VideoEmbedProps) => {
  const handlePlayVideo = () => {
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
    }
  };

  return (
    <div 
      className={`relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer bg-black ${className}`}
      onClick={handlePlayVideo}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-catholic-secondary/80 rounded-full p-5 hover:bg-catholic-secondary transition duration-300">
          <Play className="h-8 w-8 text-white" />
        </div>
      </div>
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white">
          <p className="text-sm truncate">{title}</p>
        </div>
      )}
      <img 
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title || "Video thumbnail"}
        className="w-full h-full object-cover opacity-70"
      />
    </div>
  );
};

export default VideoEmbed;
