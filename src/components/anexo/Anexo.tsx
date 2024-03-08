import { Article } from "../dummyData";
import Card from "../cards/Card";

interface AnexoProps {
    articles: Article[];
}

const Anexo: React.FC<AnexoProps> = ({ articles }) => {

    return (
        <div >
            <Card article={articles[1]} layout="anexo" />
        </div>
    );
}

export default Anexo;