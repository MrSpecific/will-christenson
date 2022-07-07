import swell from 'swell-js';

const options = {
  useCamelCase: true, // (default is false)
};

swell.init(
  process.env.NEXT_PUBLIC_SWELL_STORE_ID,
  process.env.NEXT_PUBLIC_SWELL_STOREFRONT_API_KEY,
  options
);

const swellClient = {
  init: () => {
    return swell.init(
      process.env.NEXT_PUBLIC_SWELL_STORE_ID,
      process.env.NEXT_PUBLIC_SWELL_STOREFRONT_API_KEY,
      options
    );
  },
  getProducts: async () => {
    const products = await swell.products.list({
      // category: 't-shirts',
      limit: 100,
      page: 1,
      expand: ['variants'],
    });

    return products;
  },
};

export { swellClient, swell };
