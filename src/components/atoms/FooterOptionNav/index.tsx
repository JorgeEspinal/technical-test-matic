import './style.css';

type Props = {
  text: string;
  href: string;
};

const FooterOptionNav = ({ text, href }: Props) => (
  <a href={href} className="nav-footer__link">
    {text}
  </a>
);

export default FooterOptionNav;
