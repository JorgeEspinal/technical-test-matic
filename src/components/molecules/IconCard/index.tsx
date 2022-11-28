import IconShape from '../../atoms/IconShape';
import Paragraph from '../../atoms/Paragraph';
import Title from '../../atoms/Title';
import './style.css';

type Props = {
  iconUrl: string;
  iconAlt: string;
  title: string;
  paragraph: string;
  class?: string;
};

const IconCard = ({ iconUrl, iconAlt, title, paragraph }: Props) => (
  <div className="cardIcon">
    <IconShape src={iconUrl} alt={iconAlt} />
    <Title type="h3" text={title} />
    <Paragraph text={paragraph} />
  </div>
);

IconCard.defaultProps = {
  class: '',
};

export default IconCard;
