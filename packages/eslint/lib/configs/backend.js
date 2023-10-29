const { defineConfig } = require("eslint-define-config");

const { backendJavascript } = require("./javascript");
const { backendTypescript } = require("./typescript");
const { eslintHost } = require("./eslintHost");
const { vite } = require("./vite");
const { vitest } = require("./vitest");

backendTypescript.overrides[0].parserOptions.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];
backendTypescript.overrides[0].settings["import/resolver"].typescript.project =
  ["./tsconfig.json", "./tsconfig.node.json"];

vite.overrides[0].parserOptions.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];
vite.overrides[0].settings["import/resolver"].typescript.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];

vitest.overrides[0].parserOptions.project = ["./tsconfig.vitest.json"];
vitest.overrides[0].settings["import/resolver"].typescript.project = [
  "./tsconfig.vitest.json",
];
module.exports = defineConfig({
  overrides: [
    eslintHost.overrides[0],
    backendJavascript.overrides[0],
    backendTypescript.overrides[0],
    vite.overrides[0],
    vitest.overrides[0],
  ],
});
