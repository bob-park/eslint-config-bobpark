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
    "./rules/common",
    "./rules/imports",
    "./rules/prettier",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/typescript",
  ],
  plugins: ["react", "jsx-a11y", "prettier", "@tanstack/query"],
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
