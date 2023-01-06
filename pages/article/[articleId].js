import Head from 'next/head';
import siteInfo from '@lib/siteInfo';
import { Layout, Header, Footer } from '@layout';
import styles from '@styles/Home.module.css';

export default function Article({ title }) {
  return (
    <Layout>
      <Head>
        <title>{title || siteInfo.title}</title>
        <meta name="description" content="Full-Stack Web Development" />
      </Head>

      <Header headline="Articles" byline="Mostly web dev and cooking"></Header>

      <main className={styles.main}></main>

      <Footer />
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const allRecipes = await getRecipeList();

//   const paths = getPaths(allRecipes, 'recipeSlug');

//   return {
//     paths,
//     fallback: false,
//   };
// }

// const SINGLE_RECIPE_QUERY = gql`
//   query Recipe($slug: String) {
//     recipe(filter: { slug: { eq: $slug } }) {
//       title
//       date
//       description
//       slug
//       cover {
//         responsiveImage(imgixParams: { fit: crop, w: 1400, h: 800 }) {
//           ...responsiveImageFragment
//         }
//       }
//       prepTime
//       cookingTime
//       context {
//         value
//       }
//       ingredients {
//         id
//         ingredient
//         amount
//       }
//       measures {
//         id
//         unit
//         amount
//         note
//         ingredient {
//           id
//           title
//           slug
//         }
//       }
//       equipment {
//         id
//         title
//         link
//       }
//       instructions {
//         value
//       }
//       author {
//         name
//       }
//       categories {
//         title
//         slug
//       }
//       tags {
//         title
//       }
//       gallery {
//         id
//       }
//     }
//   }

//   ${responsiveImageFragment}
// `;

// export async function getStaticProps({ params }) {
//   const data = await request({
//     query: SINGLE_RECIPE_QUERY,
//     variables: { slug: params.recipeSlug },
//     preview: false,
//   });

//   return {
//     props: data.recipe,
//   };
// }
