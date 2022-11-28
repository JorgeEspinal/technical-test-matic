import './style.css';
import Icon from '../../atoms/Icon';

type Props = {
  classCss?: string;
};

const SocialIconsBar = ({ classCss }: Props) => {
  const icons = [
    { ariaLabel: 'Facebook icon', href: '#', icon: 'facebook' },
    { ariaLabel: 'YouTube icon', href: '#', icon: 'youtube' },
    { ariaLabel: 'Twitter icon', href: '#', icon: 'twitter' },
    { ariaLabel: 'Pinteres icon', href: '#', icon: 'pinteres' },
    { ariaLabel: 'Instagram icon', href: '#', icon: 'instagram' },
  ];

  return (
    <div className={`social-icons-bar${classCss ? ' ' + classCss : ''}`}>
      {icons.map((icon, i) => (
        <Icon ariaLabel={icon.ariaLabel} href={icon.href} icon={icon.icon} />
      ))}
    </div>
  );
};

export default SocialIconsBar;
