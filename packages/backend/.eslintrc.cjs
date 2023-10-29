const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["plugin:todo-app/backend"],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {},
});
