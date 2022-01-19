import Head from 'next/head';
import siteInfo from '@data/siteInfo';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import ContactForm from '@components/ContactForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Contact | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Contact" byline="Will Christenson"></Header>

      <main className={styles.main}>
        <ContactForm />
      </main>

      <Footer />
    </Layout>
  );
}
