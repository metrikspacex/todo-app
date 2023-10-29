const { defineConfig } = require("eslint-define-config");
const { builtinModules } = require("node:module");

const env = {
  es6: true,
  node: true,
};
const excludedFiles = [
  "**/cypress/**",
  "**/vitest/**",
  "*.{spec,test}.{cjs,js,mjs}",
  "./.eslintrc.cjs",
  "./cypress/**",
  "./vitest/**",
];

const files = ["*.{cjs,js,mjs}"];
const importParserExtensions = [
  ".cjs",
  ".cts",
  ".d.ts",
  ".js",
  ".js",
  ".json",
  ".jsx",
  ".mjs",
  ".mts",
  ".node",
  ".ts",
  ".tsx",
];
const importResolverExtensions = [
  ".cjs",
  ".cts",
  ".d.ts",
  ".js",
  ".js",
  ".json",
  ".jsx",
  ".mjs",
  ".mts",
  ".node",
  ".ts",
  ".tsx",
];

const standardRules = {
  "accessor-pairs": ["error"],
  "array-callback-return": ["error"],
  "block-scoped-var": ["error"],
  "capitalized-comments": ["off"],
  "class-methods-use-this": ["off"],
  complexity: ["error"],
  "consistent-return": ["error"],
  curly: ["error"],
  "default-case": ["error"],
  "dot-notation": ["error"],
  eqeqeq: [
    "warn",
    "always",
    {
      null: "never",
    },
  ],
  "func-style": [
    "error",
    "declaration",
    {
      allowArrowFunctions: true,
    },
  ],
  "guard-for-in": ["error"],
  "id-length": ["error"],
  "import/extensions": [
    "error",
    "never",
    {
      cjs: "ignorePackages",
      js: "ignorePackages",
      json: "ignorePackages",
      jsx: "ignorePackages",
      mjs: "ignorePackages",
      ts: "ignorePackages",
      tsx: "ignorePackages",
    },
  ],
  "import/first": ["error"],
  "import/newline-after-import": ["error"],
  "import/no-duplicates": ["error"],
  "import/no-extraneous-dependencies": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-nodejs-modules": [
    "error",
    {
      allow: builtinModules.map((module_) => `node:${module_}`),
    },
  ],
  "import/no-unresolved": ["error"],
  "import/order": ["off"],
  "import/prefer-default-export": ["off"],
  indent: [
    "error",
    2,
    {
      SwitchCase: 1,
    },
  ],
  "line-comment-position": ["error"],
  "linebreak-style": ["error", "unix"],
  "max-depth": ["error"],
  "max-len": [
    "error",
    {
      code: 80,
      comments: 80,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
      tabWidth: 2,
    },
  ],
  "max-lines": ["error"],
  "max-lines-per-function": ["error"],
  "max-statements": ["error"],
  "multiline-comment-style": ["off"],
  "n/no-deprecated-api": ["error"],
  "n/no-extraneous-import": [
    "error",
    {
      allowModules: ["less", "sass", "unbuild", "vite", "vitest"],
    },
  ],
  "n/no-extraneous-require": [
    "error",
    {
      allowModules: ["vite"],
    },
  ],
  "n/no-missing-import": ["error"],
  "n/no-missing-require": [
    "error",
    {
      allowModules: ["pnpapi", "vite"],
      tryExtensions: [".d.ts", ".js", ".jsx", ".ts", ".tsx"],
    },
  ],
  "n/no-process-exit": ["error"],
  "n/no-unpublished-import": ["error"],
  "n/no-unpublished-require": ["error"],
  "n/no-unsupported-features/es-syntax": ["error"],
  "n/shebang": ["off"],
  "new-cap": ["off"],
  "no-alert": ["error"],
  "no-caller": ["error"],
  "no-console": [
    "error",
    {
      allow: ["clear", "dir", "error", "info", "log", "trace", "warn"],
    },
  ],
  "no-constant-condition": ["error"],
  "no-continue": ["error"],
  "no-debugger": ["error"],
  "no-div-regex": ["error"],
  "no-duplicate-imports": ["off"],
  "no-else-return": ["error"],
  "no-empty": [
    "error",
    {
      allowEmptyCatch: true,
    },
  ],
  "no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions"],
    },
  ],
  "no-empty-pattern": ["error"],
  "no-eq-null": ["error"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-label": ["error"],
  "no-floating-decimal": ["error"],
  "no-global-assign": ["error"],
  "no-implicit-coercion": ["error"],
  "no-implicit-globals": ["error"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["error"],
  "no-invalid-this": ["error"],
  "no-iterator": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": ["off"],
  "no-multi-spaces": ["error"],
  "no-multi-str": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-wrappers": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": ["error"],
  "no-plusplus": ["error"],
  "no-process-exit": ["error"],
  "no-proto": ["error"],
  "no-return-assign": ["error"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-self-compare": ["error"],
  "no-sequences": ["error"],
  "no-shadow": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-ternary": ["error"],
  "no-undefined": ["error"],
  "no-underscore-dangle": ["off"],
  "no-unused-expressions": ["error"],
  "no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    },
  ],
  "no-useless-concat": ["error"],
  "no-useless-constructor": ["error"],
  "no-useless-escape": ["error"],
  "one-var": ["off"],
  "prefer-const": [
    "warn",
    {
      destructuring: "all",
    },
  ],
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
  quotes: ["error", "double"],
  radix: ["error"],
  "regexp/no-contradiction-with-assertion": ["error"],
  semi: ["error", "always"],
  "simple-import-sort/exports": ["error"],
  "simple-import-sort/imports": [
    "off",
    {
      groups: [
        [
          "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
        ],
        ["^\\u0000"],
        ["^\\w"],
        ["^@"],
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
      ],
    },
  ],
  "sonarjs/cognitive-complexity": ["error"],
  "sonarjs/no-duplicate-string": ["error"],
  "sonarjs/no-empty-collection": ["error"],
  "sonarjs/no-redundant-jump": ["error"],
  "sonarjs/prefer-immediate-return": ["error"],
  "sort-imports": [
    "error",
    {
      allowSeparatedGroups: true,
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],
  "spaced-comment": ["error", "always", { markers: ["/"] }],
  strict: ["error"],
  "unicorn/consistent-function-scoping": ["error"],
  "unicorn/error-message": ["error"],
  "unicorn/filename-case": ["error"],
  "unicorn/no-abusive-eslint-disable": ["error"],
  "unicorn/no-array-reduce": ["error"],
  "unicorn/no-empty-file": ["off"],
  "unicorn/no-keyword-prefix": ["off"],
  "unicorn/no-negated-condition": ["error"],
  "unicorn/no-null": ["error"],
  "unicorn/no-useless-undefined": ["error"],
  "unicorn/prefer-at": ["error"],
  "unicorn/prefer-dom-node-dataset": ["error"],
  "unicorn/prefer-event-target": ["error"],
  "unicorn/prefer-includes": ["error"],
  "unicorn/prefer-number-properties": ["error"],
  "unicorn/prefer-query-selector": ["error"],
  "unicorn/prefer-spread": ["error"],
  "unicorn/prefer-switch": ["error"],
  "unicorn/prefer-ternary": ["error"],
  "unicorn/prefer-top-level-await": ["off"],
  "unicorn/prevent-abbreviations": ["error"],
  "unicorn/switch-case-braces": ["error"],
};

const backendJavascriptRules = Object.assign(standardRules, {
  // BACKEND Javascript - new rules here or overrides
});

const frontendJavascriptRules = Object.assign(standardRules, {
  // FRONTEND Javascript - new rules here or overrides
});

const toolsJavascriptRules = Object.assign(standardRules, {
  // TOOLS Javascript  - new rules here or overrides
});

const backendJavascript = defineConfig({
  overrides: [
    {
      env,
      excludedFiles,
      extends: [
        "eslint:all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:n/recommended",
        "plugin:promise/recommended",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/all",
        "plugin:prettier/recommended",
      ],
      files,
      globals: {},
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      plugins: [
        "import",
        "regexp",
        "simple-import-sort",
        "sonarjs",
        "prettier",
      ],
      rules: backendJavascriptRules,
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": importParserExtensions,
        },
        "import/resolver": {
          node: {
            extensions: importResolverExtensions,
          },
        },
      },
    },
  ],
});

const frontendJavascript = defineConfig({
  overrides: [
    {
      env,
      excludedFiles,
      extends: [
        "eslint:all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:n/recommended",
        "plugin:promise/recommended",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/all",
        "plugin:prettier/recommended",
      ],
      files,
      globals: {},
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      plugins: [
        "import",
        "regexp",
        "simple-import-sort",
        "sonarjs",
        "prettier",
      ],
      rules: frontendJavascriptRules,
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": importParserExtensions,
        },
        "import/resolver": {
          node: {
            extensions: importResolverExtensions,
          },
        },
      },
    },
  ],
});

const toolsJavascript = defineConfig({
  overrides: [
    {
      env,
      excludedFiles,
      extends: [
        "eslint:all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:n/recommended",
        "plugin:promise/recommended",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/all",
        "plugin:prettier/recommended",
      ],
      files,
      globals: {},
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      plugins: [
        "import",
        "regexp",
        "simple-import-sort",
        "sonarjs",
        "prettier",
      ],
      rules: toolsJavascriptRules,
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": importParserExtensions,
        },
        "import/resolver": {
          node: {
            extensions: importResolverExtensions,
          },
        },
      },
    },
  ],
});

module.exports = {
  backendJavascript,
  frontendJavascript,
  toolsJavascript,
};
