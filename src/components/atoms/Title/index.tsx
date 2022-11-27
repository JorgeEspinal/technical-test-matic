import './style.css';

type Props = {
  type: 'h1' | 'h2' | 'h3';
  text: string;
  classCss?: string;
};

const Title = ({ text, type, classCss }: Props) => {
  if (type === 'h1')
    return <h1 className={`heading-primary ${classCss}`}>{text}</h1>;

  if (type === 'h2')
    return <h2 className={`heading-secondary ${classCss}`}>{text}</h2>;

  return <h3 className={`heading-tertiary ${classCss}`}>{text}</h3>;
};

export default Title;
