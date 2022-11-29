import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import './style.css';

type Props = {
  text: string;
  classCss?: string;
  path: string;
};

const ListItemNavBar = ({ text, classCss, path }: Props) => {
  const location = useLocation();
  const [classActiveItem, setClassActiveItem] = useState('');

  const active = location.pathname === path;

  const onHover = () => {
    if (!active) setClassActiveItem(' nav__item--active');
  };
  const onLeave = () => {
    setClassActiveItem('');
  };

  return (
    <li
      className={`item-navbar${
        location.pathname === path ? ` nav__item--active` : ''
      } ${classActiveItem}`}
    >
      <NavLink
        to={path}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        className={({ isActive }) =>
          isActive
            ? 'item-navbar__link item-navbar__link--active'
            : 'item-navbar__link'
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default ListItemNavBar;
