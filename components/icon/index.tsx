import Eye from './icons/eye';
import Signal from './icons/signal';
import Calendar from './icons/calendar';
import News from './icons/news';

const iconMapper = {
  eye: Eye,
  signal: Signal,
  calendar: Calendar,
  news: News,
};

const getIcon = (name: string, className?: string) => {
  const CurrentIcon = iconMapper[name] || iconMapper.eye;
  return <CurrentIcon className={className} />;
};

const Icon = ({
  name,
  className,
  onClick,
}: {
  name: string;
  className?: string;
  onClick?: () => {};
}) => {
  const currentIcon = getIcon(name, className);
  return (
    <span style={{ display: 'contents' }} onClick={onClick}>
      {currentIcon}
    </span>
  );
};

export default Icon;
