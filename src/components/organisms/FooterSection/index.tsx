import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import Paragraph from '../../atoms/Paragraph';
import FooterOptionsNav from '../../molecules/FooterOptionsNav/Index';
import SocialIconsBar from '../../molecules/SocialIconsBar';
import Footer from '../../templates/Footer';
import './style.css';

const FooterSection = () => {
  const options = [
    { text: 'About us', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Support', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ];

  return (
    <Footer classCss="footer-sec">
      <div className="footer-sec_socials">
        <Logo color="light" classCss="footer-sec__logo" />
        <SocialIconsBar />
      </div>

      <FooterOptionsNav options={options} classCss="footer-sec__nav" />

      <div className="footer-sec__btn-copyright">
        <Button
          type="button"
          text="Request Invite"
          classCss="footer-sec__btn"
        />
        <Paragraph
          classCss="footer-sec__copyright "
          text="&copy; Easybank. All Rights Reserved"
        />
      </div>
    </Footer>
  );
};

export default FooterSection;
