import Head from 'next/head';
import classNames from 'classnames';

import siteInfo from '@data/siteInfo';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import ContactForm from '@components/ContactForm';
import styles from '@styles/page/Contact.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Contact | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Contact" byline="Will Christenson"></Header>

      <main className={styles.main}>
        <section className={classNames(['content', 'content-y', [styles.formWrapper]])}>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
