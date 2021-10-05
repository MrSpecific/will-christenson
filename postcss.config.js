module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-pxtorem': {
      propList: ['*'],
    },
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: {
        grid: true,
      },
    },
  },
};
