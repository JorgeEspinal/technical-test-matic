import './style.css';
import icons from '../../../assets/icons.svg';

type Props = {
  classCss?: string;
  href: string;
  icon: string;
  ariaLabel: string;
};

const Icon = ({ classCss, href, icon, ariaLabel }: Props) => (
  <a
    className={`icon${classCss ? ' ' + classCss : ''}`}
    href={href}
    aria-label={ariaLabel}
  >
    <svg className="icon__svg" aria-hidden="true">
      <use href={`${icons}/#${icon}`} />
    </svg>
  </a>
);

export default Icon;
