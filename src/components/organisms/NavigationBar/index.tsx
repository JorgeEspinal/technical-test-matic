import Button from '../../atoms/Button';
import ListItemNavBar from '../../atoms/ListItemNavBar';
import Logo from '../../atoms/Logo';
import Header from '../../templates/Header';
import './style.css';

const NavigationBar = () => {
  return (
    <Header classCss="nav-bar">
      <Logo color="dark" />
      <nav className="nav__options" role="navigation" aria-label="Main">
        <ul className="nav__items">
          <ListItemNavBar text="Home" path="/" />
          <ListItemNavBar text="About" path="/about" />
          <ListItemNavBar text="Contact" path="/contact" />
          <ListItemNavBar text="Blog" path="/blog" />
          <ListItemNavBar text="Careers" path="/careers" />
        </ul>
      </nav>
      <Button type="button" text="Request Invite" />
    </Header>
  );
};

export default NavigationBar;
