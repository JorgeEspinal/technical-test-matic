import { useEffect } from 'react';
import { getAllArticle } from '../../../features/articleAsyncActions';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { RootState } from '../../../store/reducers';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import ArticleCard from '../../molecules/ArticleCard';
import Section from '../../templates/Section';
import './style.css';

const LastArticlesSection = () => {
  const articles = useAppSelector((state: RootState) => state.article.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticle());
  }, [dispatch]);

  return (
    <Section type="Section" classCss="last-article">
      <Title type="h2" text="Latest Articles" classCss="last-article__title" />
      <Button
        type="button"
        text="+ Add New Article"
        classCss="last-article__btn"
      />
      <div className="last-article__cards">
        {articles.map((article, i) => {
          if (i < 4)
            return (
              <ArticleCard
                key={article.id}
                autor={article.author}
                content={article.content}
                title={article.title}
                urlImg={article.imageUrl}
              />
            );

          return null;
        })}
      </div>
    </Section>
  );
};

export default LastArticlesSection;
