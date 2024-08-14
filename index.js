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
        "import/extensions": "off",
        "one-var": "off",
        "indent": ["error", 2],
        "space-in-paren": "off",
        "sort-import": "off",
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
