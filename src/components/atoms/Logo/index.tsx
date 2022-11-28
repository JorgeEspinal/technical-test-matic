import './style.css';
import logoLetter from '../../../assets/logo-letter.svg';
import logoBars from '../../../assets/logo-bars.svg';

type Props = {
  classCss?: string;
  color: 'light' | 'dark';
};

const Logo = ({ classCss, color }: Props) => (
  <div className={`logo${classCss ? ' ' + classCss : ''}`}>
    <img className="logo__bars" src={logoBars} alt="Logo shapes easybank" />
    <svg className={`logo__letter  logo__letter--${color}`}>
      <use href={`${logoLetter}/#logo-letter`} />
    </svg>
  </div>
);

export default Logo;
