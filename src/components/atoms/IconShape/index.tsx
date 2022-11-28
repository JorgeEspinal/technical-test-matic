import { ReactNode } from 'react';
import './style.css';

type Props = {
  children?: ReactNode;
  shape?: 'circular';
  src: string;
  alt: string;
};

const IconShape = ({ children, shape, src, alt }: Props) => (
  <div className="icon__shape icon__shape--circular">
    <img className="icon__shape-img" src={src} alt={alt} />
  </div>
);

export default IconShape;
