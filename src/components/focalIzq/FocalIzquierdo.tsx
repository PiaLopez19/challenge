import { Article } from "../dummyData";
import Card from "../cards/Card";

interface FocalIzquierdoProps {
  articles: Article[];
}

const FocalIzquierdo: React.FC<FocalIzquierdoProps> = ({ articles }) => {
  if (articles.length < 3) {
    return <div>No hay suficientes artículos disponibles</div>;
  }

  return (
    <article className="md:flex md:gap-4 xl:gap-10 pt-4">
      <div className="w-auto md:w-[469px] xl:w-[560px] mb-8" title="layout1">
        <Card article={articles[0]} layout="layout1" />
      </div>
      <div className="md:border-l"></div>
      <div className="flex flex-col gap-8" title="layout2">
        {articles.slice(1, 3).map((article) => (
          <div key={article.id} className="w-auto md:w-[235px] xl:w-[280px] pt-2 md:pt-0">
            <Card article={article} layout="layout2" size="small" />
          </div>
        ))}
      </div>
    </article>
  );
}

export default FocalIzquierdo;