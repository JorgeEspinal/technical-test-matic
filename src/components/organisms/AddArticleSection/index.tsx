import Paragraph from '../../atoms/Paragraph';
import Title from '../../atoms/Title';
import FormInputsArticle from '../../molecules/FormInputsArticle';
import Section from '../../templates/Section';
import './style.css';

const AddArticleSection = () => {
  return (
    <Section type="Section" classCss="add-article__section" id="addArticle">
      <Title
        type="h2"
        text="Add New Blog Article"
        classCss="add-article__title"
      />
      <Paragraph
        classCss="add-article__paragraph"
        text="Publish a new blog article to feature in the Easybank homepage."
      />
      <FormInputsArticle classCss="add-article-form" />
    </Section>
  );
};

export default AddArticleSection;
