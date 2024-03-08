import Button from "../buttons/Button";
import { Article } from "../dummyData";

interface CardProps {
  article: Article
  layout: 'anexo' | 'layout' | 'layout1' | 'layout2' | 'layout3' | 'layout4';
  size?: 'small' | 'large';
}

const Card: React.FC<CardProps> = ({ article, layout, size }) => {
  /* CLASES LAYOUT 2 */
  const containerClass = size === 'small' ? 'layoutDos__container' : 'layoutDos__container layoutDos__container-large';
  const imgClass = size === 'small' ? 'layoutDos__img' : 'layoutDos__img layoutDos__img-large';
  const titleClass = size === 'small' ? 'layoutDos__lead' : 'layoutDos__lead layoutDos__lead-large';
  const containerTitle = size === 'small' ? 'layoutDos__container-title' : 'layoutDos__container-title layoutDos__container-title-large';




  return (

    <div className={`card ${layout}`} data-testid="card">
      {layout === 'anexo' && (
        <a href={article.url} title={`Leer más sobre ${article.title}`}>
          <article>
            <section>
              <div className="bg-anexoBg anexo__text md:text-center">
                <h2 className="anexo__lead">
                  {article.lead} <span>{article.title}</span>
                </h2>
              </div>
              <div className="w-full relative h-[180px] bg-cover bg-top" style={{ backgroundImage: `url(${article.image})` }}></div>
            </section>
          </article>
        </a>
      )}

      {layout === 'layout' && (
        <a href={article.url} title={`Leer más sobre ${article.title}`}>
          <article>
            <section className="container__image" style={{ backgroundImage: `url(${article.image})` }}>
              <div className="container__text">
                <div className="flex items-center">
                  <Button
                    icon=
                    {
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="10" fill="#333333" />
                        <desc>logo de la nacion</desc>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.52921 6.875H4V7.52995H4.81915V12.2197H4V12.875H9.15883V10.3293H8.50005V10.707C8.50005 11.3264 8.29872 11.6923 7.99122 11.9105C7.67423 12.1354 7.22243 12.2197 6.69267 12.2197H6.62691V7.52995H7.52921V6.875ZM12.1429 6.875H9.57883V7.52995H9.84607C10.094 7.52995 10.3433 7.73327 10.3433 8.04121V11.7644C10.3433 11.989 10.2833 12.0903 10.2209 12.1414C10.1526 12.1975 10.0505 12.2197 9.9155 12.2197H9.55038V12.875H11.8306V12.2197H11.5447C11.4183 12.2197 11.3168 12.2147 11.2351 12.2016C11.1532 12.1885 11.0991 12.1684 11.0622 12.1436C11.0007 12.1021 10.9531 12.0234 10.9531 11.8069V8.47382L14.3411 12.875H15.2077V7.83754C15.2077 7.77351 15.2345 7.70023 15.302 7.64103C15.3696 7.58177 15.4862 7.52995 15.6736 7.52995H16V6.875H13.7157V7.52995H14.0879C14.2812 7.52995 14.4087 7.56618 14.4848 7.62083C14.5529 7.66979 14.593 7.74283 14.593 7.86281V10.0465L12.1429 6.875Z" fill="#FDB727" />
                      </svg>
                    }
                    texto="Exclusivo suscriptor"
                    clases="font-bold text-black rounded-3xl gap-2 bg-white xl:py-2 xl:px-4 hidden xl:flex">
                  </Button>
                  <Button
                    texto="INFOGRAFIA"
                    clases="bg-black rounded-3xl py-2 px-4 md:hidden"
                  />
                  <Button
                    texto="BADGE"
                    clases="bg-black rounded-3xl mb-2 py-2 px-4 hidden md:flex xl:hidden"
                  />
                </div>
                <h1 className="text__card">
                  {article.lead}. <span>{article.title}</span>
                </h1>
                <p>{article.author}</p>
              </div>
            </section>
          </article>
        </a>
      )}
      {layout === 'layout1' && (
        <a href={article.url} className="relative" title={`Leer más sobre ${article.title}`}>

          <article>
            <div className="layoutUno__container md:flex md:flex-col-reverse">
              <section className='layoutUno__container-img'>
                <img className="layoutUno__img"
                  src={article.image}
                  alt={article.title}
                />
                <div className="hidden xl:flex absolute bottom-2 left-2">
                  <Button
                    texto="• EN VIVO"
                    clases="font-bold bg-botonRojo text-white xl:py-1 xl:px-3 rounded-2xl"
                  />
                </div>
              </section>
              <section className="layoutUno__container-title">
                <h2 className="layoutUno__lead">
                  {article.lead}. <span className="layoutUno__title">{article.title}</span>
                </h2>
                <div>
                  <span className="layoutUno__subtitle font-['Arial']">{article.subtitle}</span>
                </div>
                <div >
                  <span className="layoutUno__author font-['Arial']">{article.author}</span>
                </div>
              </section>
            </div>
          </article>
        </a>
      )}
      {
        layout === 'layout2' && (
          <a className="relative" href={article.url} title={`Leer más sobre ${article.title}`}>
            <article className={containerClass}>
              <section className="layoutDos__container">
                <article className="layoutDos__container-img">
                  <img
                    className={`${imgClass} w-full`}
                    src={article.image}
                    alt={article.title}
                  />
                </article>
                <article className={containerTitle}>
                  <h2 className={titleClass}>
                    {article.lead} <span className="layoutDos__title">{article.title}</span>
                  </h2>
                  <span className="layoutDos__author">
                    {article.author}
                  </span>
                </article>
              </section>
            </article>
          </a>
        )
      }
      {
        layout === 'layout3' && (
          <a href={article.url} title={`Leer más sobre ${article.title}`}>
            <article className="layoutTres__container border-2">
              <section className="layoutTres__container-text">
                <article className="layoutTres__lead-container">
                  <h2 className="layoutTres__lead">
                    {article.lead} <span className="layoutTres__title">{article.title}</span>
                  </h2>
                </article>
                <article className="layoutTres__container-author">
                  <img
                    className="rounded-full md:w-[50px]"
                    src={article.authorImage}
                    alt={article.title}
                  />
                  <p>{article.author}</p>
                </article>
              </section>
            </article>
          </a>
        )
      }
      {
        layout === 'layout4' && (
          <a href={article.url} title={`Leer más sobre ${article.title}`}>
            <article className="layoutCuatro__container border-2">
              <section className="layoutCuatro__container-text">
                <article className="layoutCuatro__lead-container">
                  <h2 className="layoutCuatro__lead">
                    {article.lead} <span className="layoutCuatro__title">{article.title}</span>
                  </h2>
                </article>
                <article className="layoutCuatro__container-author">
                  <img
                    className="rounded-full md:w-20"
                    src={article.authorImage}
                    alt={article.title}
                  />
                  <p>{article.author}</p>
                </article>
              </section>
            </article>
          </a>
        )
      }
    </div >
  );
}

export default Card