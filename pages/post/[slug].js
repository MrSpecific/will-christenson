import Head from 'next/head';
import groq from 'groq';
import siteInfo from '@data/siteInfo';
import sanityClient from '@data/sanity';
import { Layout, Header, Footer } from '@layout';

export default function Article({ post }) {
  const { title } = post;
  return (
    <Layout>
      <Head>
        <title>{title || siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline={title} byline="Mostly web dev and cooking"></Header>

      <main>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </main>

      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug = '' } = params;
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title
  }`;

  const post = await sanityClient.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
