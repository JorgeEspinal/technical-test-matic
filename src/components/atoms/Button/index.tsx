import './style.css';

type Props = {
  type: 'button' | 'reset' | 'submit';
  text: string;
  onClick?: () => {};
  classCss?: string;
};

const Button = ({ type, text, classCss }: Props) => {
  return (
    <button type={type} className={`button ${classCss}`}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
