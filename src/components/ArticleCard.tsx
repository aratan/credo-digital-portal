
import { Link } from "react-router-dom";

export interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
  className?: string;
}

const ArticleCard = ({ id, title, excerpt, image, category, date, featured = false, className = "" }: ArticleCardProps) => {
  return (
    <div className={`overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 ${className}`}>
      <Link to={`/articulo/${id}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className={`w-full object-cover ${featured ? 'h-72' : 'h-48'}`}
          />
          <div className="absolute top-2 left-2">
            <span className="bg-catholic-secondary text-catholic-dark text-xs uppercase py-1 px-2 rounded-full font-semibold">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className={`font-serif ${featured ? 'text-xl' : 'text-lg'} font-bold text-catholic-dark mb-2 line-clamp-2`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{date}</span>
            <span className="text-catholic-primary hover:text-catholic-secondary">Leer más →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
