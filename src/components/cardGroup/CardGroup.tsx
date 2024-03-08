import { Article } from "../dummyData";
import Card from "../cards/Card";

interface CardGroupProps {
  articles: Article[];
}

const CardGroup: React.FC<CardGroupProps> = ({ articles }) => {
  if (articles.length < 3) {
    return <div>No hay suficientes artículos disponibles</div>;
  }

  // Los articulos dividos en dos partes
  const halfIndex = Math.ceil(articles.length / 2);
  const firstHalf = articles.slice(0, halfIndex);
  const secondHalf = articles.slice(halfIndex);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8 xl:gap-10 pt-4">
        {firstHalf.map((article, index) => (
          <div key={index} className="md:w-[235px] xl:w-[280px]" title="layout2">
            <Card article={article} layout="layout2" size="small" />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-8 xl:gap-10">
        {secondHalf.map((article, index) => (
          <div key={index} className="md:w-[235px] xl:w-[280px]" title="layout2">
            <Card article={article} layout="layout2" size="small" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGroup;