// https://jestjs.io/docs/en/configuration
module.exports = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: ['src/*.js', '!src/index.js'],
  coverageDirectory: 'reports',
  coveragePathIgnorePatterns: ['reports', 'test'],
  // coverageProvider: 'babel',
  verbose: true
}
