import globals from "globals";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import js from "@eslint/js";
import * as path from "path";
import reactPlugin from "eslint-plugin-react";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import rushstackConfig from "@rushstack/eslint-config/flat/profile/web-app.js";
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query";

// rules
import commonRules from "./rules/common.js";
import importsRules from "./rules/imports.js";
import prettierRules from "./rules/prettier.js";
import reactRules from "./rules/react.js";
import reactHooksRules from "./rules/react-hooks.js";
import typescriptRules from "./rules/typescript.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // 플러그인 정의
    plugins: {
      react: reactPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
      "@tanstack/query": tanstackQueryPlugin,
      rushstackConfig,
    },

    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    ignores: [
      "**/*.config.js",
      "**/*.config.cjs",
      "**/*.config.mjs",
      "**/*.config.ts",
      "*-env.d.ts",
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: path.resolve(),
      },
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...commonRules,
      ...importsRules,
      ...prettierRules,
      ...reactRules,
      ...reactHooksRules,
      ...typescriptRules,
    },
  },
];
