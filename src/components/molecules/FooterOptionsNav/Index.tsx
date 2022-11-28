import FooterOptionNav from '../../atoms/FooterOptionNav';
import './style.css';

type Option = {
  text: string;
  href: string;
};

type Props = {
  options: Option[];
  classCss?: string;
};

const FooterOptionsNav = ({ options, classCss }: Props) => (
  <ul className={`nav-footer${classCss ? ' ' + classCss : ''}`}>
    {options.map((option, i) => (
      <li className="nav-footer__item">
        <FooterOptionNav
          key={`footer-opt${i}`}
          href={option.href}
          text={option.text}
        />
      </li>
    ))}
  </ul>
);

export default FooterOptionsNav;
