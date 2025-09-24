export default {
  // rushstack
  "@rushstack/typedef-var": "off",

  // jsx-a11y
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/label-has-associated-control": "off",
  "jsx-a11y/media-has-caption": "off",
  "jsx-a11y/no-autofocus": "off",
  "jsx-a11y/no-noninteractive-tabindex": "off",

  // common
  "one-var": "off",
  indent: "off",
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
      patterns: ["../*"],
      paths: [
        {
          name: "react",
          importNames: ["default"],
          message: "import React from 'react' makes bundle size larger.",
        },
      ],
    },
  ],
  "prefer-destructuring": "off",
  "no-param-reassign": "off",
  "no-plusplus": "off",
  "no-await-in-loop": "off",
  "no-restricted-syntax": "off",
  "promise/param-names": "off",
};
