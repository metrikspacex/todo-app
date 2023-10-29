const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    es2016: true,
    node: true,
  },
  extends: ["eslint:all", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "capitalized-comments": ["off"],
    "max-lines": ["off"],
    "multiline-comment-style": ["off"],
    "no-console": ["off"],
    "no-magic-numbers": ["off"],
    "one-var": ["off"],
    "prefer-object-spread": ["off"],
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSameLine: true,
        bracketSpacing: true,
        endOfLine: "lf",
        htmlWhitespaceSensitivity: "strict",
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: "always",
        quoteProps: "as-needed",
        semi: true,
        singleAttributePerLine: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
      },
    ],
    strict: ["off"],
  },
});
