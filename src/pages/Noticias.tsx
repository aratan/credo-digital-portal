
import { useState } from "react";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { articles, categories } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="bg-catholic-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">Noticias</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Mantente informado con las últimas noticias de la Iglesia Católica y el mundo de la fe.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-catholic-light">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
              <div className="relative w-full md:w-1/3">
                <Input
                  type="search"
                  placeholder="Buscar noticias..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-catholic-primary" : "border-catholic-primary text-catholic-primary"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Articles Grid */}
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
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-400">Intenta con otros términos de búsqueda o categoría</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Noticias;
