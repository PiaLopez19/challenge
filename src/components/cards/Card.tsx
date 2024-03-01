import { Article } from "../dummyData";

interface CardProps {
  article: Article
  layout: 'layout' | 'layout1' | 'layout2' | 'layout3'; // Definimos los diferentes layouts
}

const Card: React.FC<CardProps> = ({ article, layout }) => {

  return (
    <div className={`card ${layout}`}>
      {layout === 'layout' && (
        <>
          <article>
            <a href={article.url}>
              <div className="container__image" style={{ backgroundImage: `url(${article.image})` }}>
                <div className="container__text">
                  <div>
                    <button className="font-['Arial'] bg-black rounded-2xl py-1 px-3 mb-2 lg:hidden">INFOGRAFIA</button>
                    <button className="font-['Arial'] gap-2 items-center font-bold bg-white text-black rounded-2xl py-1 px-3 mb-2 hidden lg:flex">
                      <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="20" height="20" rx="10" fill="#333333" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.52921 6.875H4V7.52995H4.81915V12.2197H4V12.875H9.15883V10.3293H8.50005V10.707C8.50005 11.3264 8.29872 11.6923 7.99122 11.9105C7.67423 12.1354 7.22243 12.2197 6.69267 12.2197H6.62691V7.52995H7.52921V6.875ZM12.1429 6.875H9.57883V7.52995H9.84607C10.094 7.52995 10.3433 7.73327 10.3433 8.04121V11.7644C10.3433 11.989 10.2833 12.0903 10.2209 12.1414C10.1526 12.1975 10.0505 12.2197 9.9155 12.2197H9.55038V12.875H11.8306V12.2197H11.5447C11.4183 12.2197 11.3168 12.2147 11.2351 12.2016C11.1532 12.1885 11.0991 12.1684 11.0622 12.1436C11.0007 12.1021 10.9531 12.0234 10.9531 11.8069V8.47382L14.3411 12.875H15.2077V7.83754C15.2077 7.77351 15.2345 7.70023 15.302 7.64103C15.3696 7.58177 15.4862 7.52995 15.6736 7.52995H16V6.875H13.7157V7.52995H14.0879C14.2812 7.52995 14.4087 7.56618 14.4848 7.62083C14.5529 7.66979 14.593 7.74283 14.593 7.86281V10.0465L12.1429 6.875Z" fill="#FDB727" />
                        </svg>
                      </span>
                      Exclusivo suscriptor
                    </button>
                  </div>
                  <h1 className="text__card">{article.lead}. <span>{article.title}</span></h1>
                  <p>{article.author}</p>
                  <div className='hidden'>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </>
      )}
      {layout === 'layout1' && (
        <>
          <article className="layoutUno__container" >
            <a className="md:flex flex-col-reverse" href={article.url}>
              <section className="layoutUno__container-img">
                <img className="layoutUno__img" src={article.image} alt={article.title} />
              </section>
              <section className="layoutUno__container-text ">
                <h2 className="layoutUno__lead text-xl">{article.lead}. <span className="layoutUno__title">{article.title}</span></h2>
                <div className="">
                  <span className="layoutUno__subtitle font-['Arial']">{article.subtitle}</span>
                </div>
                <div className="">
                  <span className="layoutUno__author font-['Arial']">{article.author}</span>
                </div>
              </section>
            </a>
          </article>
        </>
      )}
      {
        layout === 'layout2' && (
          <article className="layoutDos__container ">
            <a className="" href={article.url}>
              <section className="layoutDos__container-img">
                <img className="layoutDos__img" src={article.image} alt={article.title} />
              </section>
              <section className="layoutDos__container-title">
                <h2 className="layoutDos__lead">{article.lead} <span className="layoutDos__title">{article.title}</span></h2>
                <span className="layoutDos__author">
                  {article.author}
                </span>
              </section>
            </a>
          </article>
        )
      }
      {
        layout === 'layout3' && (
          <article>
            <a href={article.url}>
              <h2>{article.lead}</h2>
              <h3>{article.title}</h3>
              <img src={article.image} alt={article.title} />
              <p>{article.author}</p>
            </a>
          </article>
        )
      }
    </div >
  );
}

export default Card

/* import FocalIzq from "../focalIzq/FocalIzq";
import { type ListOfDummy } from "../types"
import ArticleCard from "./ArticlesCard";


interface Props {
  dummy: ListOfDummy
}

const Card: React.FC<Props> = ({ dummy }) => {
  return (
    <div>
      {dummy.map((dummys, index) => (
        <div key={index}>
          {index === 0 && (
            <ArticleCard
              desing={dummys.desing}
              image={dummys.image}
              volanta={dummys.volanta}
              title={dummys.title}
              subtitle={dummys.subtitle}
              author={dummys.author}
              authorImage={dummys.authorImage}
              url={dummys.url}
            />
          )}
          {index > 0 && index <= 3 && (
            <FocalIzq
              desing={dummys.desing}
              image={dummys.image}
              volanta={dummys.volanta}
              title={dummys.title}
              subtitle={dummys.subtitle}
              author={dummys.author}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Card; */

/* <div>
      {dummy.map((dummys, index) => (
        <div key={index}>
          {index === 0 && (
            <ArticleCard
              desing={dummys.desing}
              image={dummys.image}
              volanta={dummys.volanta}
              title={dummys.title}
              subtitle={dummys.subtitle}
              author={dummys.author}
              authorImage={dummys.authorImage}
              url={dummys.url}
            />
          )}
          {index > 0 && index <= 3 && (
            <FocalIzq
              desing={dummys.desing}
              image={dummys.image}
              volanta={dummys.volanta}
              title={dummys.title}
              subtitle={dummys.subtitle}
              author={dummys.author}
            />
          )}
        </div>
      ))}
    </div> */