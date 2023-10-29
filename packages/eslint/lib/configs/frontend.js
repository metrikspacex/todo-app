const { defineConfig } = require("eslint-define-config");

const { cypress } = require("./cypress");
const { eslintHost } = require("./eslintHost");
const { frontendJavascript } = require("./javascript");
const { frontendTypescript } = require("./typescript");
const { javascriptReact, typescriptReact } = require("./react");
const { tailwind } = require("./tailwind");
const { vite } = require("./vite");
const { vitest } = require("./vitest");

cypress.overrides[0].parserOptions.project = ["./cypress/tsconfig.json"];
cypress.overrides[0].settings["import/resolver"].typescript.project = [
  "./cypress/tsconfig.json",
];

frontendTypescript.overrides[0].parserOptions.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];
frontendTypescript.overrides[0].settings["import/resolver"].typescript.project =
  ["./tsconfig.json", "./tsconfig.node.json"];

tailwind.overrides[0].parserOptions.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];
tailwind.overrides[0].settings["import/resolver"].typescript.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];

typescriptReact.overrides[0].parserOptions.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];
typescriptReact.overrides[0].settings["import/resolver"].typescript.project = [
  "./tsconfig.json",
  "./tsconfig.node.json",
];

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
    cypress.overrides[0],
    eslintHost.overrides[0],
    frontendJavascript.overrides[0],
    frontendTypescript.overrides[0],
    javascriptReact.overrides[0],
    tailwind.overrides[0],
    typescriptReact.overrides[0],
    vite.overrides[0],
    vitest.overrides[0],
  ],
});
