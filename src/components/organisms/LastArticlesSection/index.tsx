import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './style.css';
import { getAllArticle } from '../../../features/articleAsyncActions';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { RootState } from '../../../store/reducers';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import ArticleCard from '../../molecules/ArticleCard';
import Section from '../../templates/Section';

const LastArticlesSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const articles = useAppSelector((state: RootState) => state.article.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticle());
  }, [dispatch]);

  const goTo = () => {
    navigate('/manage-articles');
  };

  return (
    <Section type="Section" classCss="last-article">
      <Title type="h2" text="Latest Articles" classCss="last-article__title" />
      {location.pathname !== '/manage-articles' && (
        <Button
          type="button"
          text="+ Add New Article"
          classCss="last-article__btn"
          onClick={goTo}
        />
      )}
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
