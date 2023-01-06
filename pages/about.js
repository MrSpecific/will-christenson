import Head from 'next/head';
import classNames from 'classnames';

import siteInfo from '@lib/siteInfo';
import loadContent from '@utils/loadContent';
import { Layout, Header, Footer, Content } from '@layout';
import styles from '@styles/page/About.module.css';

export default function AboutPage({ skills, technologies, experience }) {
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
            <h2>{skills.meta.heading}</h2>
            <Content content={skills} />
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
  const skills = await loadContent('skills');
  const technologies = await loadContent('technologies');
  const experience = await loadContent('experience');

  return { props: { skills, technologies, experience } };
}
