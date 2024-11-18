// index.js
module.exports = {
    env: {
        es2024: true,
        node: true,
        browser: true,
    },
    extends: [
        "next",
        "airbnb",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"],
    plugins: [
        "react",
        "jsx-a11y",
        "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    rules: {
        // import
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",

        // react
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "react/require-default-props": "off",
        "react/self-closing-comp": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-no-bind": ["error", {
            "allowFunctions": true,
            "allowArrowFunctions": true
        }],

        // react-hooks
        "react-hooks/exhaustive-deps": "off",

        // jsx-a11y
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/media-has-caption": "off",
        "jsx-a11y/no-autofocus": "off",
        "jsx-a11y/no-noninteractive-tabindex": "off",

        // typescript
        "@typescript-eslint/no-unused-expressions": "off",

        // prettier
        "prettier/prettier": "error",

        // common
        "one-var": "off",
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1,
                "ignoredNodes": ["ConditionalExpression *"]
            }],
        "space-in-paren": "off",
        "sort-import": "off",
        "no-unused-vars": "off",
        "no-undef": "off",
        "object-curly-newline": "off",
        "no-use-before-define": "off",
        "no-unused-expressions": "off",
        "operator-linebreak": "off",
        "no-else-return": "off",
        "no-restricted-globals": "off",
        "no-restricted-imports": [
            "error",
            {
                "patterns": [
                    "../*"
                ],
                "paths": [
                    {
                        "name": "react",
                        "importNames": ["default"],
                        "message": "import React from 'react' makes bundle size larger."
                    }
                ]
            }
        ],
        "prefer-destructuring": "off",
        "no-param-reassign": "off",
        "no-plusplus":"off",
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off"
    }

};
