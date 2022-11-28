import { ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
  classCss?: string;
};

const Footer = ({ children, classCss }: Props) => (
  <footer className={`footer${classCss ? ' ' + classCss : ''}`}>
    {children}
  </footer>
);

export default Footer;
