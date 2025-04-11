
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { articles } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import VideoEmbed from "@/components/VideoEmbed";
import { ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";

const ArticuloDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<typeof articles[0] | undefined>(undefined);
  const [relatedArticles, setRelatedArticles] = useState<typeof articles>([]);

  useEffect(() => {
    // Find the article with the matching ID
    const foundArticle = articles.find(a => a.id === id);
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles (same category, excluding current)
      const related = articles.filter(a => 
        a.category === foundArticle.category && a.id !== foundArticle.id
      ).slice(0, 3);
      setRelatedArticles(related);
    } else {
      navigate("/notfound");
    }
  }, [id, navigate]);

  if (!article) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-catholic-primary">Inicio</Link>
            <span>/</span>
            <Link to="/articulos" className="hover:text-catholic-primary">Artículos</Link>
            <span>/</span>
            <span className="text-catholic-primary">{article.title}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="mb-6 text-catholic-primary hover:text-catholic-secondary"
            >
              <Link to="/articulos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a artículos
              </Link>
            </Button>

            <div className="mb-6">
              <span className="bg-catholic-secondary text-catholic-dark text-xs uppercase py-1 px-3 rounded-full font-semibold">
                {article.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-catholic-dark mt-4 mb-6">
                {article.title}
              </h1>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-8">
                <span>{article.date}</span>
                <div className="flex items-center space-x-4">
                  <span className="mr-2">Compartir:</span>
                  <a href="#" className="hover:text-catholic-primary">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="hover:text-catholic-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <button className="hover:text-catholic-primary">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto rounded-lg shadow-md mb-6"
              />
              
              {article.video && (
                <div className="mb-6">
                  <VideoEmbed videoId={article.video} title={`Video: ${article.title}`} />
                </div>
              )}
              
              <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
              
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="font-serif text-xl font-bold text-catholic-dark mb-6">Artículos relacionados</h3>
              <div className="space-y-6">
                {relatedArticles.map(relatedArticle => (
                  <div key={relatedArticle.id} className="flex space-x-4">
                    <Link to={`/articulo/${relatedArticle.id}`} className="shrink-0">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-24 h-16 object-cover rounded"
                      />
                    </Link>
                    <div>
                      <Link to={`/articulo/${relatedArticle.id}`} className="font-medium text-catholic-dark hover:text-catholic-primary">
                        {relatedArticle.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">{relatedArticle.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-catholic-primary p-6 rounded-lg shadow-md text-white">
              <h3 className="font-serif text-xl font-bold mb-4">Suscríbete</h3>
              <p className="mb-4">Recibe las últimas noticias y artículos directamente en tu correo.</p>
              <div className="space-y-2">
                <input type="email" placeholder="Tu email" className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-catholic-secondary" />
                <Button className="w-full bg-catholic-secondary text-catholic-dark hover:bg-catholic-secondary/90">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticuloDetalle;
