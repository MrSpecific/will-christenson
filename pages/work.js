import Head from 'next/head';
import siteInfo from '@data/siteInfo';
import { gql, request, responsiveImageFragment } from '@data/datocms';
import { Layout, Header, Footer } from '@layout';

import ProjectCard from '@components/ProjectCard';
import styles from '@styles/page/Work.module.css';

export default function Work({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>Work | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Work" byline="Current &amp; Past Projects"></Header>

      <main className="content content-y">
        <ul className={styles.projectList}>
          {allProjects.map((project) => (
            <li className={styles.projectRow} key={project.id}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
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
      link
      date
      featuredImage {
        responsiveImage(imgixParams: { fit: max, w: 600 }) {
          ...responsiveImageFragment
        }
      }
      projectType
      tags {
        title
        slug
      }
      description {
        value
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
