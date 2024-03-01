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
    <div className="article-container md:flex md:gap-[32px] flex flex-col justify-center md:flex-row gap-[16px]">
      <div className="main-article lg:">
        <Card article={articles[0]} layout="layout1" />
      </div>
      <div className="md:border "></div>
      <div className="side-articles flex flex-col gap-[16px]">
        {articles.slice(1, 3).map((article, index) => (
          <Card key={index} article={article} layout="layout2" />
        ))}
      </div>
    </div>
  );
}

export default FocalIzquierdo;


/*   return (
    <div className="article-container md:flex md:gap-[32px] md:justify-center">
      <div className="main-article">
        <Card article={articles[0]} layout="layout1" />
      </div>
      <div className="border mt-7"></div> 
      <div className="side-articles md:h-max-[581px] md:min-w-[235px] flex-1 md:flex md:flex-col md:justify-center">
        <Card article={articles[1]} layout="layout2" />
        <Card article={articles[2]} layout="layout2" />
      </div>
    </div>
  ); */

/* import { type ListOfDummy } from "../dummyData"
import '../../App.css'

interface Props {
  dummy: ListOfDummy
}

const ArticlesCard: React.FC<Props> = ({ dummy }) => {
  return (
    <div>
      {dummy.map((dummys, index) => (
        <div key={index}>
          {index === 0 && (
            <article className={`${dummys.desing}`}>
              <a href={dummys.url}>
                <div className="container__image" style={dummys.desing === "desingUno" ? { backgroundImage: `url(${dummys.image})` } : {}}>
                  <div className="container__text">
                    <div className={dummys.desing !== "desingUno" ? "hidden" : ""}>
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
                    <h1 className="text__card">{dummys.volanta}. <span>{dummys.title}</span></h1>
                    <p className={dummys.desing === 'desingUno' ? 'hidden' : ''}>{dummys.subtitle}</p>
                    <p>{dummys.author}</p>
                    <div className={dummys.desing === 'desingUno' ? 'hidden' : ''}>
                      <p>{dummys.authorImage}</p>
                      <p>{dummys.url}</p>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          )}
        </div>
      ))}
    </div>
  );
}

export default ArticlesCard */

/* import { Dummy } from "../types"
import '../../App.css'

const ArticleCard: React.FC<Dummy> = ({ image, desing, volanta, title, subtitle, author, authorImage, url }) => {
  return (
    <div className={`${desing}`}>
      <div className="container__image"
        style={desing === "desingUno" ? { backgroundImage: `url(${image})` } : {}}
      >
        <div className="container__text">

          <div className={desing !== "desingUno" ? "hidden" : ""}>
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

          <h1 className="text__card">{volanta}. <span>{title}</span></h1>
          <p className={desing === 'desingUno' ? 'hidden' : ''}>{subtitle}</p>
          <p>{author}</p>

          <div className={desing === 'desingUno' ? 'hidden' : ''}>
            <p>{authorImage}</p>
            <p >{url}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ArticleCard */

/*     <div className={`${desing}`}>
      <div className="container__image"
        style={desing === "desingUno" ? { backgroundImage: `url(${image})` } : {}}
      >
        <div className="container__text">

          <div className={desing !== "desingUno" ? "hidden" : ""}>
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

          <h1 className="text__card">{volanta}. <span>{title}</span></h1>
          <p className={desing === 'desingUno' ? 'hidden' : ''}>{subtitle}</p>
          <p>{author}</p>

          <div className={desing === 'desingUno' ? 'hidden' : ''}>
            <p>{authorImage}</p>
            <p >{url}</p>
          </div>

        </div>
      </div>
    </div> */
