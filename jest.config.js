const nextJest = require('next/jest');

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // transform: {
  //   unified: 'babel-jest',
  // },
  // moduleNameMapper: {
  //   '\\unified': '<rootDir>/utils/dummy.js',
  // },
  testPathIgnorePatterns: ['<roodDir>/utils/parseMarkdown.js'],
  // transformIgnorePatterns: ['<roodDir>/node_modules/(?!unified)'],
  // transformIgnorePatterns: ['/node_modules/(?!(unified)/)'],
  // transformIgnorePatterns: ['<roodDir>/node_modules/unified'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@svg(.*)$': '<rootDir>/svg$1',
    '^@content(.*)$': '<rootDir>/content$1',
    '^@data(.*)$': '<rootDir>/data$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@public(.*)$': '<rootDir>/public$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    '(unified)': '<rootDir>/utils/dummy.js',
    '(remark-parse)': '<rootDir>/utils/dummy.js',
    '(remark-gfm)': '<rootDir>/utils/dummy.js',
    '(remark-breaks)': '<rootDir>/utils/dummy.js',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
