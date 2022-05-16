import Head from 'next/head';
import siteInfo from '@data/siteInfo';
import { gql, request, responsiveImageFragment } from '@data/datocms';
import { swellClient } from '@data/swell';
import { Header, Footer, Layout } from '@components/layout';

import styles from '@styles/page/Shop.module.css';

export default function Shop() {
  // swellClient.init();
  const products = swellClient.getProducts();

  console.log(products);
  return (
    <Layout>
      <Head>
        <title>Work | {siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Work" byline="Current &amp; Past Projects"></Header>

      <main className="content content-y">{JSON.stringify(products, null, 2)}</main>

      <Footer />
    </Layout>
  );
}
