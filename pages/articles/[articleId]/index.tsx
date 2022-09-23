import Head from 'next/head';
import * as newsService from '../../../services/news';
import { INew } from '../../../entities';
import styles from './styles.module.scss';
import Article from '../../../components/article';
import { HeaderArticle } from '../../../components';

export const getStaticPaths = async () => {
  const initialNews: INew[] = await newsService.getNews();
  const paths = initialNews.map((article) => ({
    params: { articleId: article.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;

  try {
    const article = await newsService.getArticle(articleId);
    if (!article) {
      throw new Error('Article not found');
    }

    return { props: { article } };
  } catch (error) {
    console.log('article page error', error);

    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
    };
  }
}

const ArticlePage = ({ article }: { article: INew }) => {
  return (
    <div>
      <Head>
        <title>{article.title}</title>
        <meta name='description' content={article.subtitle} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeaderArticle />
      <div className={styles.main}>
        <Article article={article} />
      </div>
    </div>
  );
};

export default ArticlePage;
