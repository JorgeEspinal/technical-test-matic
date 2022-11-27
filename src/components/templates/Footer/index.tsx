import { ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
};

const Footer = ({ children }: Props) => (
  <footer className="header">{children}</footer>
);

export default Footer;
