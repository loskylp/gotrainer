module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    reporters: [
      'default',
      ['jest-junit',
       {outputDirectory: 'test-results', outputName: 'report.xml'},
       ['github-actions', {silent: false}],
        'summary'],
    ],
  };