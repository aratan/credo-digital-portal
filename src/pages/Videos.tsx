
import { useState } from "react";
import Layout from "@/components/Layout";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        video.channel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <Layout>
      <section className="bg-catholic-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">Videos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explora nuestra selección de videos sobre la fe católica, enseñanzas y testimonios.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-catholic-light">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="mb-12">
            <div className="relative w-full md:w-1/3 mx-auto">
              <Input
                type="search"
                placeholder="Buscar videos..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute top-1/2 left-3 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Videos Grid */}
          {filteredVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map(video => (
                <VideoCard 
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  channel={video.channel}
                  duration={video.duration}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
