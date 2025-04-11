
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import VideoCard from "@/components/VideoCard";
import { articles, videos } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Buscar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("todo");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q");
    if (query) {
      setSearchTerm(query);
    }
  }, [location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    const url = new URL(window.location.href);
    url.searchParams.set("q", searchTerm);
    window.history.pushState({}, "", url);
  };

  const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
           article.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredVideos = videos.filter(video => {
    return video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           video.channel.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout>
      <section className="bg-catholic-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">Buscador</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Encuentra noticias, artículos y videos sobre la fe católica.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-catholic-light">
        <div className="container mx-auto px-4">
          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative w-full md:w-2/3 mx-auto">
              <Input
                type="search"
                placeholder="¿Qué estás buscando?"
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-catholic-primary text-white px-4 py-1 rounded-md hover:bg-catholic-primary/90 transition duration-200">
                Buscar
              </button>
            </div>
          </form>
          
          {/* Results Tabs */}
          <Tabs defaultValue="todo" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="todo" className="px-6">
                  Todo ({filteredArticles.length + filteredVideos.length})
                </TabsTrigger>
                <TabsTrigger value="articulos" className="px-6">
                  Artículos ({filteredArticles.length})
                </TabsTrigger>
                <TabsTrigger value="videos" className="px-6">
                  Videos ({filteredVideos.length})
                </TabsTrigger>
              </TabsList>
            </div>

            {searchTerm ? (
              <>
                <TabsContent value="todo">
                  {filteredArticles.length > 0 || filteredVideos.length > 0 ? (
                    <div className="space-y-12">
                      {filteredArticles.length > 0 && (
                        <div>
                          <h2 className="font-serif text-2xl font-bold text-catholic-dark mb-6">Artículos</h2>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.slice(0, 3).map(article => (
                              <ArticleCard 
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                excerpt={article.excerpt}
                                image={article.image}
                                category={article.category}
                                date={article.date}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {filteredVideos.length > 0 && (
                        <div>
                          <h2 className="font-serif text-2xl font-bold text-catholic-dark mb-6">Videos</h2>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredVideos.slice(0, 3).map(video => (
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
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron resultados</h3>
                      <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="articulos">
                  {filteredArticles.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredArticles.map(article => (
                        <ArticleCard 
                          key={article.id}
                          id={article.id}
                          title={article.title}
                          excerpt={article.excerpt}
                          image={article.image}
                          category={article.category}
                          date={article.date}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron artículos</h3>
                      <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="videos">
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
                      <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron videos</h3>
                      <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
                    </div>
                  )}
                </TabsContent>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-500 mb-2">Ingresa un término de búsqueda</h3>
                <p className="text-gray-400">Escribe lo que estás buscando en el campo de arriba</p>
              </div>
            )}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Buscar;
