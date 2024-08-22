// index.js
module.exports = {
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    extends: [
        "next",
        "airbnb",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended"],
    plugins: ["react", "react-hooks", "jsx-a11y"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
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

        // react-hooks
        "react-hooks/exhaustive-deps": "off",

        // jsx-a11y
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",

        // common
        "one-var": "off",
        "indent": ["error", 2],
        "space-in-paren": "off",
        "sort-import": "off",
        "no-unused-vars": "off",
        "no-undef": "off",
        "object-curly-newline": "off",
        "no-use-before-define": "off",
        "no-unused-expressions": "off",
        "operator-linebreak": "off",
        "no-else-return": "off",
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["^(..)*"],
                "paths": [
                    {
                        "name": "react",
                        "importNames": ["default"],
                        "message": "import React from 'react' makes bundle size larger."
                    }
                ]
            }
        ],
    }

};
