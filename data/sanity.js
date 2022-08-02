import sanityClient from '@sanity/client';

export default sanityClient({
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  projectId: 'e7p9g068', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-08-31',
  useCdn: true, // `false` if you want to ensure fresh data
});
