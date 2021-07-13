const path = require('path')

module.exports = {
	sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
	images: {
    domains: ['https://occ-0-54-47.1.nflxso.net', 'occ-0-54-47.1.nflxso.net'],
  },
};