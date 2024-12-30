// index.js
module.exports = {
  env: {
    es2024: true,
    node: true,
    browser: true,
  },
  extends: [
    "next",
    "@rushstack/eslint-config/profile/web-app",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "./rules/common",
    "./rules/imports",
    "./rules/prettier",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/typescript",
  ],
  plugins: ["react", "jsx-a11y", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: ".",
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.mjs",
    "**/*.config.ts",
    "**/*.config.cjs",
    "**/*.config.mjs",
  ],

  rules: {},
};
