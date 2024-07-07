# Revite React Typescript Exercise
Test run the latest Typescript react, Storybook, And PlayWright other framework. Starting with a new way to instantiate a Typescript react application.

```bash
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

  ### Final Thoughts

  This guide provides a comprehensive setup for initializing a Vite TypeScript project with optional ESLint and Prettier configurations. Vite's speed and simplicity, combined with TypeScript's type safety, offer an excellent development experience.
