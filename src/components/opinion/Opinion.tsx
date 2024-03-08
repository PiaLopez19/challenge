import Card from "../cards/Card"
import { Article } from "../dummyData"

interface OpinionProps {
  articles: Article[]
}

const Opinion: React.FC<OpinionProps> = ({ articles }) => {
  return (
    <section className="flex flex-col md:flex-row md:gap-4 xl:gap-10 md:h-[475px] pt-4">
      <article className="md:w-[235px] xl:w-[360px]" title="layout2">
        <Card article={articles[0]} layout="layout2" size="large" />
      </article>
      <article className="md:w-[235px] xl:w-[295px] md:h-[226px] md:gap-8 xl:h-[200px] flex flex-col"  title="layout3" >
        <Card article={articles[1]} layout="layout3" />
        <Card article={articles[2]} layout="layout3" />
      </article>
      <article className="md:w-[233px]" title="layout4" >
        <Card article={articles[3]} layout="layout4" />
      </article>
    </section>
  )
}

export default Opinion