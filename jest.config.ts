import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    // '^vue$': 'vue/dist/vue.common.ts'
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue3-jest'
  },
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  testEnvironment: 'jsdom',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
};
export default config;
