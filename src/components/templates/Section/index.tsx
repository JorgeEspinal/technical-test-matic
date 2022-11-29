import { ReactNode } from 'react';
import './style.css';

type Props = {
  type: 'Section' | 'Subsection';
  children: ReactNode;
  classCss?: string;
  id?: string;
};

const Section = ({ children, type, classCss, id }: Props) => (
  <section
    id={id}
    className={`section ${
      type === 'Section' ? 'section--main' : 'section--sub'
    }${classCss ? ' ' + classCss : ''}`}
  >
    {children}
  </section>
);

export default Section;
