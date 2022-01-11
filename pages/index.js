import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Will Christenson</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Will Christenson" byline="Full-stack Web Development"></Header>

      <main className={styles.main}></main>

      <Footer />
    </Layout>
  );
}
