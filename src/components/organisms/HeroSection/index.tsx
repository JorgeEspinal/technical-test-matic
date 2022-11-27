import Paragraph from '../../atoms/Paragraph';
import Title from '../../atoms/Title';
import mockupsImg from '../../../assets/mockups-1.png';
import shapeSVG from '../../../assets/shape.svg';
import './style.css';
import Button from '../../atoms/Button';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-desc">
        <Title type="h1" text="Next generation digital banking" />
        <Paragraph text="Take your financial life online. Your Easybank accountwill be a one-stop-shop for spending, saving. budgeting, nvesting, and much more." />
        <Button type="button" text="Request Invite" />
      </div>

      <div className="hero-img">
        <img className="hero-img--svg" src={shapeSVG} alt="Shape" />
        <img className="hero-img--mockups" src={mockupsImg} alt="Mockups app" />
      </div>
    </section>
  );
};

export default HeroSection;
