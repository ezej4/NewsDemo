import Eye from './icons/eye';
import Signal from './icons/signal';
import Calendar from './icons/calendar';
import News from './icons/news';

const iconMapper: Record<string, () => JSX.Element> = {
  eye: Eye,
  signal: Signal,
  calendar: Calendar,
  news: News,
};

const getIcon = (name: string) => {
  const CurrIcon = iconMapper[name];
  const DefaultIcon = iconMapper.news;

  const Icon = CurrIcon || DefaultIcon;
  return <Icon />;
};

const Icon = ({
  name,
  onClick,
}: {
  name: string;
  className?: string;
  onClick?: () => {};
}) => {
  const currentIcon = getIcon(name);
  return (
    <span style={{ display: 'contents' }} onClick={onClick}>
      {currentIcon}
    </span>
  );
};

export default Icon;
