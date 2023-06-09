module.exports = {
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(./*(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js'],
  preset: "ts-jest"
};