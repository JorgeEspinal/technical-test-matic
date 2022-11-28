import { ReactNode } from 'react';
import './style.css';

type Props = {
  type: 'h1' | 'h2' | 'h3';
  text?: string;
  children?: ReactNode;
  classCss?: string;
};

const Title = ({ text, type, classCss, children }: Props) => {
  if (type === 'h1')
    return (
      <h1 className={`heading-primary ${classCss}`}>
        {text ? text : children}
      </h1>
    );

  if (type === 'h2')
    return (
      <h2 className={`heading-secondary ${classCss}`}>
        {text ? text : children}
      </h2>
    );

  return (
    <h3 className={`heading-tertiary ${classCss}`}>{text ? text : children}</h3>
  );
};

export default Title;
