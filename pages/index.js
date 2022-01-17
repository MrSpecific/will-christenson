import Head from 'next/head';
import Image from 'next/image';
import loadContent from '@utils/loadContent';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import styles from '../styles/Home.module.css';

const { log } = console;

export default function Home({ intro, ...props }) {
  return (
    <Layout>
      <Head>
        <title>Will Christenson</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Will Christenson" byline="Full-stack Web Development"></Header>

      <main className={styles.main}>
        <div className="triptych content content-y">
          <Image
            src="/images/will-portrait-28-medium.png"
            width={1600}
            height={2200}
            alt="A black and white photo of a man standing in front of a white backdrop, wearing black clothes."
          />
          <div className="body-copy">
            <span className="drop-cap">Hi,</span> Im a
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const intro = await loadContent('homeIntro');

  return { props: { intro } };
}
