const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["plugin:todo-app/tools"],
  reportUnusedDisableDirectives: false,
  root: true,
});
