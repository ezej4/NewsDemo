import Header from '../header';
import { Content } from '../../entities/content';
import configs from '../../configs';
const { baseUrl } = configs;

const HeaderArticle = ({}: {}) => {
  const links = [
    {
      name: Content.DATE,
      text: 'Recent news',
      active: false,
      href: `${baseUrl}?orderBy=${Content.DATE}`,
    },
    {
      name: Content.RATED,
      text: 'Top rated',
      active: false,
      href: `${baseUrl}?orderBy=${Content.RATED}`,
    },
    {
      name: Content.CATEGORIES,
      text: 'Categories',
      active: false,
      href: `${baseUrl}?showCategories=true`,
    },
  ];

  return <Header links={links} renderLinkAs={'a'} />;
};

export default HeaderArticle;
