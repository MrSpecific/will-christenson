import Head from 'next/head';
import siteInfo from '@data/siteInfo';
import { gql, request, responsiveImageFragment } from '@data/datocms';
import { Header, Footer, Layout } from '@components/layout';

import styles from '@styles/page/Shop.module.css';

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>Work | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Work" byline="Current &amp; Past Projects"></Header>

      <main className="content content-y"></main>

      <Footer />
    </Layout>
  );
}
