module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@svg(.*)$': '<rootDir>/svg$1',
    '^@content(.*)$': '<rootDir>/content$1',
    '^@data(.*)$': '<rootDir>/data$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@public(.*)$': '<rootDir>/public$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
  },
  // transformIgnorePatterns: ['/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates)'],
  // transformIgnorePatterns: ['/node_modules/(?!unified)'],
  // transformIgnorePatterns: ['node_modules/?!(unified)'],
  // transformIgnorePatterns: ['<rootDir>/(node_modules)/?!(unified)'],
  transformIgnorePatterns: ['<roodDir>/node_modules/(?!unified)'],
};
