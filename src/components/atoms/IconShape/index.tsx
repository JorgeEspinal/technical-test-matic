import { ReactNode } from 'react';
import './style.css';

type Props = {
  children?: ReactNode;
  shape?: 'Circular';
  src: string;
  alt: string;
};

const IconShape = ({ children, shape, src, alt }: Props) => (
  <div className="icon icon--circular">
    <img className="icon-img" src={src} alt={alt} />
  </div>
);

export default IconShape;
