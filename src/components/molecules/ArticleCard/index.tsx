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
  <div className="cardArticle">
    <img className="cardArticle-img" src={urlImg} alt={title} />
    <div className="cardArticle-body">
      <h4 className="cardArticle-body-autor">By {autor}</h4>
      <Title classCss="cardArticle-body-title" type="h3" text={title} />
      <Paragraph classCss="cardArticle-body-content" text={content} />
    </div>
  </div>
);

export default ArticleCard;
