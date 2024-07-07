# Revite React Typescript Exercise
Test run the latest Typescript react, Storybook, And PlayWright other framework. Starting with a new way to instantiate a Typescript react application.

```bash
npm create vite@latest
or 
npm create vite@latest revite-exercise -- --template vanilla-ts
```

- This command creates a new [Vite](https://vitejs.dev/guide/) project named `my-vite-project` using the *TypeScript* template.

- Move the code out of the folder into the root of the git repository

  ```bash
  yarn install 
  # or 
  npm install
  npm run dev
  ```

  ![Vite App](docs/assets/vite.png)

- **ESLint Setup:** For code quality and linting, you might want to set up ESLint with TypeScript support.

  ```bash
  yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  ```

- **Prettier Setup:** For code formatting, set up Prettier.

  ```bash
  yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
  ```

- Update your `.eslintrc.js` to include Prettier configuration:

  ```js
  module.exports = {
      parser: '@typescript-eslint/parser',
      extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'prettier',
          'plugin:prettier/recommended'
      ],
      rules: {
          // Customize your rules
      }
  };
  
  ```

- Create a `.prettierrc` file to customize Prettier settings:

  ```js
  {
      "singleQuote": true,
      "semi": false
  }
  ```

  

  ## Testing with Jest

  **Test-Driven Development** (TDD) is a software development approach that involves writing tests before writing the actual code. This methodology offers several advantages, which can significantly enhance the quality and maintainability of software. By prioritising testing and design upfront, TDD helps developers produce better code, reduce defects, and maintain a high level of productivity. Adopting TDD can lead to significant long-term benefits, making it a valuable practice for any development team.

  ### Step-by-Step Guide

- **Install Jest and Related Packages:** Open your terminal in the project directory and run the following command to install Jest, along with TypeScript support and other necessary packages: `yarn add --dev jest @types/jest ts-jest`

- **Configure Jest:** Create a `jest.config.js` file in the root of your project with the following content:

  ```javascript
  module.exports = {
      preset: 'ts-jest',
      testEnvironment: 'node',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      transform: {
          '^.+\\.tsx?$': 'ts-jest',
      },
      testMatch: ['**/*.test.ts'],
  };
  
  ```

- Optional: Configure ESLint for Jest

  - To ensure ESLint recognizes your Jest globals (like `test` and `expect`), add the Jest plugin and configure it:

  - **Install ESLint Jest Plugin:** `yarn add --dev eslint-plugin-jest`

  - **Configuration File (`jest.config.cjs` or `jest.config.mjs`):** Ensure your Jest configuration matches the following:

    - For `jest.config.mjs` ( (ES Module):

      ```javascript
      export default {
        preset: 'ts-jest',
        testEnvironment: 'node',
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        transform: {
          '^.+\\.tsx?$': 'ts-jest',
        },
        testMatch: ['**/*.test.ts'],
      }
      
      ```

  - **Add or Update `esModuleInterop`:** Add the `esModuleInterop` option and set it to `true`.

    ![Jest Test](docs/assets/jest-test.png)

  ## Final Thoughts

  This guide provides a comprehensive setup for initializing a Vite TypeScript project with optional ESLint and Prettier configurations. Vite's speed and simplicity, combined with TypeScript's type safety, offer an excellent development experience.
