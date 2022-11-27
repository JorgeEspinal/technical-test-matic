import Paragraph from '../../atoms/Paragraph';
import Title from '../../atoms/Title';
import CardIcon from '../../molecules/CardIcon';
import Section from '../../templates/Section';
import IconPhone from './../../../assets/icon1.svg';
import IconMoney from './../../../assets/icon2.svg';
import IconPeople from './../../../assets/icon3.svg';
import IconIA from './../../../assets/icon4.svg';
import './style.css';

const Subsection = () => {
  const cardItems = [
    {
      iconUrl: IconPhone,
      iconAlt: 'Icon phone',
      title: 'Online Banking',
      paragraph:
        'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
      iconUrl: IconMoney,
      iconAlt: 'Icon money handle',
      title: 'Simple Budgeting',
      paragraph:
        'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
      iconUrl: IconPeople,
      iconAlt: 'Icon people',
      title: 'Onboarding',
      paragraph:
        'We donU+2019t do branches. Open your account in minutes online and start taking control of your finances right away. ',
    },
    {
      iconUrl: IconIA,
      iconAlt: 'Icon IA',
      title: 'Open API',
      paragraph:
        'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. ',
    },
  ];

  return (
    <Section type="Subsection">
      <div className="subsection">
        <Title
          type="h2"
          text="Why choose Easybank?"
          classCss="subsection-title"
        />
        <Paragraph
          classCss="subsection-paragraph"
          text="We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before."
        />

        <div className="subsection-cards">
          {cardItems.map((item, i) => (
            <CardIcon {...item} key={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Subsection;
