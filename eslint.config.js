import { ESLint } from "eslint";

const eslint = new ESLint();

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
    rules: {
      // "no-console": "warn",
      "semi": ["error", "always"], // Enforce semicolons at the end of statements
      // "indent": ["error", 2], // Enforce 2 space indentation
      "prefer-const": "error", // Require const for variables that are not reassigned
      "object-curly-spacing": ["error", "always"], // Require spaces between braces and properties
    },
  },
  {
    // ESLint recommended rules
    rules: {
      // Add more recommended rules as needed
    },
  },
];
