import { ReactNode } from 'react';
import './style.css';

type Props = {
  type: 'Section' | 'Subsection';
  children: ReactNode;
  classCss?: string;
};

const Section = ({ children, type, classCss }: Props) => (
  <section
    className={`section ${
      type === 'Section' ? 'section--main' : 'section--sub'
    }${classCss ? ' ' + classCss : ''}`}
  >
    {children}
  </section>
);

export default Section;
