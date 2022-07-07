import { useState } from 'react';

import siteInfo from '@data/siteInfo';
import Head from 'next/head';
import { gql, request, responsiveImageFragment } from '@data/datocms';
import { swellClient, swell } from '@data/swell';
import { Header, Footer, Layout } from '@components/layout';

import styles from '@styles/page/Shop.module.css';

const { log } = console;

// const getProducts = async () => {
// const [products, setProducts] = useState(() => {
//   swellClient.init();

//   return swellClient.getProducts();
// });
// swell.init(
//   process.env.NEXT_PUBLIC_SWELL_STORE_ID,
//   process.env.NEXT_PUBLIC_SWELL_STOREFRONT_API_KEY,
//   {
//     useCamelCase: true, // (default is false)
//   }
// );

// const cartSettings = await swell.cart.getSettings();

//   log(cartSettings);

//   log(products);

//   return products;
// };

export default function Shop() {
  // swellClient.init();
  const [products, setProducts] = useState(async () => {
    swellClient.init();

    const products = await swellClient.getProducts();

    log('DEafult:', products);
    return products;
  });

  // const products = await getProducts();

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
