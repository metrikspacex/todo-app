const backendConfig = require("./configs/backend.js");
const frontendConfig = require("./configs/frontend.js");
const toolsConfig = require("./configs/tools.js");
const { defineConfig } = require("eslint-define-config");
const { name, version } = require("../package.json");

const backendRecommendedConfig = defineConfig({
  overrides: backendConfig.overrides,
});

const frontendRecommendedConfig = defineConfig({
  overrides: frontendConfig.overrides,
});

const toolsRecommendedConfig = defineConfig({
  overrides: toolsConfig.overrides,
});

module.exports = {
  configs: {
    backend: backendRecommendedConfig,
    frontend: frontendRecommendedConfig,
    tools: toolsRecommendedConfig,
  },
  meta: {
    name,
    version,
  },
};
