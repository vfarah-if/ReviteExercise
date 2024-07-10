export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true, 
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', 
    '!src/**/*.d.ts', 
	'!src/**/*.test.ts', 
	'!src/**/*.test.tsx', 
	'!src/**/*.stories.ts', 
	'!src/**/index.ts', 
	'!src/**/main.tsx', 
  ],
  coverageDirectory: 'coverage', 
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
