import Head from 'next/head';
import siteInfo from '@data/siteInfo';
import { gql, request, responsiveImageFragment } from '@data/datocms';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';

import ProjectCard from '@components/ProjectCard';
import styles from '../styles/Home.module.css';

export default function Work({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>Work | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Work" byline="Current &amp; Past Projects"></Header>

      <main className={styles.main}>
        {allProjects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </main>

      <Footer />
    </Layout>
  );
}

const PAGE_QUERY = gql`
  {
    allProjects(first: 20, orderBy: date_DESC) {
      id
      title
      date
      featuredImage {
        responsiveImage(imgixParams: { fit: max, w: 600 }) {
          ...responsiveImageFragment
        }
      }
      tags {
        title
        slug
      }
    }
  }

  ${responsiveImageFragment}
`;

export async function getStaticProps({ params }) {
  const data = await request({
    query: PAGE_QUERY,
    preview: false,
  });

  return {
    props: data,
  };
}
