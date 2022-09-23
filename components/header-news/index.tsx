import { useRouter } from 'next/router';
import Header from '../header';
import { Content } from '../../entities/content';

const HeaderNews = ({
  orderNewsByDate,
  orderNewsByViews,
  setActiveSection,
  activeSection,
}: {
  orderNewsByDate: () => void;
  orderNewsByViews: () => void;
  setActiveSection: (value: Content) => void;
  activeSection: Content;
}) => {
  const router = useRouter();

  const links = [
    {
      name: Content.DATE,
      text: 'Recent news',
      active: activeSection === Content.DATE,
      callback: () => {
        orderNewsByDate();
        setActiveSection(Content.DATE);
        router.push(
          {
            pathname: '/',
            query: {
              orderBy: Content.DATE,
            },
          },
          undefined,
          { shallow: true },
        );
      },
      href: '#',
    },
    {
      name: Content.RATED,
      text: 'Top rated',
      active: activeSection === Content.RATED,
      callback: () => {
        orderNewsByViews();
        setActiveSection(Content.RATED);
        router.push(
          {
            pathname: '/',
            query: {
              orderBy: Content.RATED,
            },
          },
          undefined,
          { shallow: true },
        );
      },
      href: '#',
    },
    {
      name: Content.CATEGORIES,
      text: 'Categories',
      active: activeSection === Content.CATEGORIES,
      callback: () => {
        setActiveSection(Content.CATEGORIES);
        router.push(
          {
            pathname: '/',
            query: {
              showCategories: true,
            },
          },
          undefined,
          { shallow: true },
        );
      },
      href: '#',
    },
  ];

  return <Header links={links} renderLinkAs={'span'} />;
};

export default HeaderNews;
