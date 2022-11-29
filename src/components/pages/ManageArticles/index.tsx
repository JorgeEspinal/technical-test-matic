import './style.css';
import AddArticleSection from '../../organisms/AddArticleSection';
import LastArticlesSection from '../../organisms/LastArticlesSection';
import PreviousArticlesSection from '../../organisms/PreviousArticlesSection';

const ManageArticles = () => {
  return (
    <>
      <AddArticleSection />
      <PreviousArticlesSection />
      <LastArticlesSection />
    </>
  );
};

export default ManageArticles;
