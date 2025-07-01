import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  testRegex: '.*\\.(spec|test)\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': require.resolve('./test/emptyModule.ts'),
    '\\.(ttf|woff|woff2|otf|png|svg|jpg)$': require.resolve('./test/emptyModule.ts'),
    '^test(.*)$': '<rootDir>./test/$1',
  },
  setupFiles: ['./test/dotenvSetup.ts'],
  setupFilesAfterEnv: ['./test/setupTests.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['src/index.ts', 'src/reportWebVitals.ts', 'src/api/*'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-fixed-jsdom',
  verbose: true,
};

export default config;
