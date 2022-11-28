import { ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
  classCss?: string;
};

const Header = ({ children, classCss }: Props) => (
  <header className={`header${classCss ? ' ' + classCss : ''}`}>
    {children}
  </header>
);

export default Header;
