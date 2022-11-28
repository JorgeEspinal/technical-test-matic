import Paragraph from '../../atoms/Paragraph';
import Title from '../../atoms/Title';
import './style.css';

type Props = {
  autor: string;
  title: string;
  content: string;
  urlImg: string;
};

const ArticleCard = ({ autor, title, content, urlImg }: Props) => (
  <div className="card-article">
    <img className="card-article__img" src={urlImg} alt={title} />
    <div className="card-article__body">
      <h4 className="card-article__body-autor">By {autor}</h4>
      <Title classCss="card-article__body-title" type="h3">
        <a className="card-article__body-title__link" href="#">
          {title}
        </a>
      </Title>
      <Paragraph classCss="card-article__body-content" text={content} />
    </div>
  </div>
);

export default ArticleCard;
