import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).ts', '**/?(*.)+(spec|test).tsx'],
};

export default config;
