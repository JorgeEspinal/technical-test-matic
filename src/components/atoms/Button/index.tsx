import './style.css';

type Props = {
  type: 'button' | 'reset' | 'submit';
  text: string;
  onClick?: () => void;
  classCss?: string;
};

const Button = ({ type, text, classCss, onClick }: Props) => {
  return (
    <button type={type} className={`button ${classCss}`} onClick={onClick}>
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
