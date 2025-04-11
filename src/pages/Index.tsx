
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import VideoCard from "@/components/VideoCard";
import { articles, videos } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, BookOpen, Church } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1, 4);
  const latestVideos = videos.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-catholic-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                <span className="text-catholic-secondary">Credo</span>Digital
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Tu portal católico de noticias, artículos y recursos para fortalecer tu fe en el mundo digital.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-catholic-secondary text-catholic-dark hover:bg-catholic-secondary/90">
                  <Link to="/noticias">
                    Últimas Noticias
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/articulos">
                    Explorar Artículos
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/seed/catholic-hero/800/600" 
                alt="Credo Digital" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-catholic-dark">
              Artículo Destacado
            </h2>
            <Link to="/articulos" className="text-catholic-primary hover:text-catholic-secondary flex items-center">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {featuredArticle && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="rounded-lg shadow-md w-full object-cover h-[400px]"
                />
              </div>
              <div>
                <span className="bg-catholic-secondary text-catholic-dark text-xs uppercase py-1 px-3 rounded-full font-semibold mb-4 inline-block">
                  {featuredArticle.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-catholic-dark mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500">{featuredArticle.date}</span>
                </div>
                <Button asChild className="bg-catholic-primary hover:bg-catholic-primary/90">
                  <Link to={`/articulo/${featuredArticle.id}`}>
                    Leer artículo completo
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 bg-catholic-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-catholic-dark">
              Últimas Noticias
            </h2>
            <Link to="/noticias" className="text-catholic-primary hover:text-catholic-secondary flex items-center">
              Ver todas <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map(article => (
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
      </section>

      {/* Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-catholic-dark">
              Videos Recomendados
            </h2>
            <Link to="/videos" className="text-catholic-primary hover:text-catholic-secondary flex items-center">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestVideos.map(video => (
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
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-catholic-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
            Mantente Informado
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir las últimas noticias y artículos directamente en tu correo.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="px-4 py-3 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-catholic-secondary"
            />
            <Button className="w-full md:w-auto bg-catholic-secondary text-catholic-dark hover:bg-catholic-secondary/90">
              <Bell className="mr-2 h-4 w-4" />
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-catholic-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-catholic-dark mb-8 text-center">
            Recursos para tu Fe
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-catholic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-catholic-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-catholic-dark mb-2">Lecturas Diarias</h3>
              <p className="text-gray-600 mb-4">Accede a las lecturas del día y reflexiones para profundizar en la Palabra de Dios.</p>
              <Button asChild variant="outline" className="border-catholic-primary text-catholic-primary hover:bg-catholic-primary hover:text-white">
                <Link to="#">
                  Explorar
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-catholic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="h-8 w-8 text-catholic-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-catholic-dark mb-2">Catecismo Online</h3>
              <p className="text-gray-600 mb-4">Consulta el Catecismo de la Iglesia Católica con explicaciones sencillas y prácticas.</p>
              <Button asChild variant="outline" className="border-catholic-primary text-catholic-primary hover:bg-catholic-primary hover:text-white">
                <Link to="#">
                  Consultar
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-catholic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-catholic-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-catholic-dark mb-2">Documentos Pontificios</h3>
              <p className="text-gray-600 mb-4">Biblioteca de encíclicas, exhortaciones y otros documentos del Magisterio de la Iglesia.</p>
              <Button asChild variant="outline" className="border-catholic-primary text-catholic-primary hover:bg-catholic-primary hover:text-white">
                <Link to="#">
                  Biblioteca
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
