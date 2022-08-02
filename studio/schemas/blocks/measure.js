export default {
  name: 'measure',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {
      title: 'Ingredient',
      name: 'ingredient',
      type: 'string',
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'number',
    },
  ],
};
