import { ReactNode } from 'react';
import './style.css';

type Props = {
  type: 'h1' | 'h2' | 'h3';
  text: string;
};

const Title = ({ text, type }: Props) => {
  if (type === 'h1') return <h1 className="heading-primary">{text}</h1>;

  if (type === 'h2') return <h2 className="heading-secondary">{text}</h2>;

  return <h3 className="heading-tertiary">{text}</h3>;
};

export default Title;
