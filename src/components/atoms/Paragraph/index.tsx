import { ReactNode } from 'react';
import './style.css';

type Props = {
  text: string;
};

const Paragraph = ({ text }: Props) => <p className="paragraph">{text}</p>;

export default Paragraph;
