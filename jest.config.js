module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['./example/node_modules'],
  setupFiles: ['./jest/setup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
};
