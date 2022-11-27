import { ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => (
  <header className="header">{children}</header>
);

export default Header;
