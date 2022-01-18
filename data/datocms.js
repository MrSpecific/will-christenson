import { gql, GraphQLClient } from 'graphql-request';

export function request({ query, variables, preview }) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
}

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
export const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

const RECIPE_LIST_QUERY = gql`
  query HomePage($limit: IntType) {
    allRecipes(first: $limit) {
      title
      slug
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 600, h: 600 }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  ${responsiveImageFragment}
`;

export async function getRecipeList(options = {}) {
  const { limit } = options;

  const data = await request({
    query: RECIPE_LIST_QUERY,
    // variables: { limit: 10 },
    variables: { limit },
    preview: false,
  });

  return data.allRecipes;
}
