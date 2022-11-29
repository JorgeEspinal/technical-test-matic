import './style.css';
import Paragraph from '../../atoms/Paragraph';
import Title from '../../atoms/Title';
import Section from '../../templates/Section';
import TableArticles from '../../molecules/TableArticles';

const PreviousArticlesSection = () => (
  <Section type="Section" classCss="prev-article__section">
    <Title type="h2" text="Previous Articles" classCss="prev-article__title" />
    <Paragraph
      classCss="prev-article__paragraph"
      text="Review and edit previous blog posts published on to the homepage."
    />
    <TableArticles />
  </Section>
);

export default PreviousArticlesSection;
