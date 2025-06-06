// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import parser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: parser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      semi: "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "array-callback-return": "error",
      "no-await-in-loop": "error",
      "react/display-name": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
