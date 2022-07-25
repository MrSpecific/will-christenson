import Head from 'next/head';
import classNames from 'classnames';

import loadContent from '@utils/loadContent';
import siteInfo from '@data/siteInfo';
import { Layout, Header, Footer, Content } from '@layout';
import ContactForm from '@components/ContactForm';
import styles from '@styles/page/Contact.module.css';

export default function Contact({ intro }) {
  return (
    <Layout>
      <Head>
        <title>Contact | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Contact" byline="Will Christenson"></Header>

      <main className={styles.main}>
        <section className={classNames(['content', 'content-y', [styles.contactFormWrapper]])}>
          <div className={styles.contactIntro}>
            <Content content={intro} />
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const intro = await loadContent('contactIntro');

  return { props: { intro } };
}
