const path = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // disable plugins
                      removeAttrs: false,
                    },
                  },
                },
              ],
            },
            svgProps: { className: 'svg-graphic' },
            dimensions: false,
          },
        },
      ],
    });

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@public'] = path.resolve(__dirname, './public/');
    // console.log(config);

    return config;
  },
};
