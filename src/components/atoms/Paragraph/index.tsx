import './style.css';

type Props = {
  text: string;
  classCss?: string;
};

const Paragraph = ({ text, classCss }: Props) => (
  <p className={`paragraph${classCss ? ' ' + classCss : ''}`}>{text}</p>
);

export default Paragraph;
