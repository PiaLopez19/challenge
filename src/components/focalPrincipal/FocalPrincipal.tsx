import { Article } from "../dummyData";
import Card from "../cards/Card";

interface FocalPrincipalProps {
    articles: Article[];
}

const FocalPrincipal: React.FC<FocalPrincipalProps> = ({ articles }) => {

    return (
        <div>
            <Card article={articles[0]} layout="layout" />
        </div>
    );
}

export default FocalPrincipal;