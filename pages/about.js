import Head from 'next/head';
import classNames from 'classnames';

import siteInfo from '@data/siteInfo';
import loadContent from '@utils/loadContent';
import Content from '@components/Content';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import styles from '@styles/page/About.module.css';

export default function AboutPage({ proficiencies, technologies, experience }) {
  return (
    <Layout>
      <Head>
        <title>About | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="About" byline="Will Christenson"></Header>

      <main className={styles.main}>
        <div className={classNames(['triptych', 'content', 'content-y', [styles.homeContent]])}>
          <div className="body-copy">
            <h2>{proficiencies.meta.heading}</h2>
            <Content content={proficiencies} />
          </div>
          <div className="body-copy">
            <h2>{technologies.meta.heading}</h2>
            <Content content={technologies} />
          </div>
          <div className="body-copy">
            <h2>{experience.meta.heading}</h2>
            <Content content={experience} />
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const proficiencies = await loadContent('proficiencies');
  const technologies = await loadContent('technologies');
  const experience = await loadContent('experience');

  return { props: { proficiencies, technologies, experience } };
}
