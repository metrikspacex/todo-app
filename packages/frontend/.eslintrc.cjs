const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["plugin:todo-app/frontend"],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {},
});
