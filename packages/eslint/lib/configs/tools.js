const { defineConfig } = require("eslint-define-config");

const { toolsJavascript } = require("./javascript");
const { toolsTypescript } = require("./typescript");
const { eslintHost } = require("./eslintHost");
const { vitest } = require("./vitest");

toolsTypescript.overrides[0].parserOptions.project = ["./tsconfig.json"];
toolsTypescript.overrides[0].settings["import/resolver"].typescript.project = [
  "./tsconfig.json",
];

vitest.overrides[0].parserOptions.project = ["./tsconfig.vitest.json"];
vitest.overrides[0].settings["import/resolver"].typescript.project = [
  "./tsconfig.vitest.json",
];

module.exports = defineConfig({
  overrides: [
    eslintHost.overrides[0],
    toolsJavascript.overrides[0],
    toolsTypescript.overrides[0],
    vitest.overrides[0],
  ],
});
