import Head from 'next/head';
import siteInfo from '@lib/siteInfo';
import { Layout, Header, Footer } from '@layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Articles | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Articles" byline="Mostly web dev and cooking"></Header>

      <main className={styles.main}></main>

      <Footer />
    </Layout>
  );
}
