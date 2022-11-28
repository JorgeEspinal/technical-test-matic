import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import Header from '../../templates/Header';
import './style.css';

const NavigationBar = () => {
  return (
    <Header classCss="nav-bar">
      <Logo color="dark" />
      <nav className="nav__options">
        <ul className="nav__items">
          <li className="nav__item nav__item--active">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#home" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Careers
            </a>
          </li>
        </ul>
      </nav>
      <Button type="button" text="Request Invite" />
    </Header>
  );
};

export default NavigationBar;
