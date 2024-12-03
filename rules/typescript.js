module.exports = {
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/ no-floating-promises": "warn",
  },
};
