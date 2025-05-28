import reactPlugin from "eslint-plugin-react";

/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    files: ["src/**/*.js"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      // Regra do ESLint nativo
      semi: "error",

      // Regras do eslint-plugin-react
      "react/display-name": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-children-prop": "error",
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
