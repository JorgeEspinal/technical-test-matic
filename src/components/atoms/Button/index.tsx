import './style.css';

type Props = {
  type: 'button' | 'reset' | 'submit';
  text: string;
  onClick?: () => {};
};

const Button = ({ type, text }: Props) => {
  return (
    <button type={type} className="button">
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
