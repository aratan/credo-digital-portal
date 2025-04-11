
import { Play } from "lucide-react";

export interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  duration: string;
  className?: string;
}

const VideoCard = ({ id, title, thumbnail, channel, duration, className = "" }: VideoCardProps) => {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  return (
    <div 
      className={`cursor-pointer overflow-hidden rounded-lg bg-white hover:shadow-lg transition duration-300 ${className}`}
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full object-cover h-48"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-catholic-secondary/80 rounded-full p-3 hover:bg-catholic-secondary transition duration-300">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs py-1 px-2 rounded">
          {duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-catholic-dark mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600">{channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
