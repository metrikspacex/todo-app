import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "vite",
      framework: "react",
    },
    downloadsFolder: "",
    fixturesFolder: "",
    screenshotsFolder: "",
    specPattern: [
      "./cypress/integrations/**/*.cy.{js,jsx,ts,tsx}",
      "./cypress/units/**/*.cy.{js,jsx,ts,tsx}",
    ],
    supportFolder: "",
    videosFolder: "",
  },
  e2e: {
    downloadsFolder: "",
    fixturesFolder: "",
    screenshotsFolder: "",
    setupNodeEvents(on, config) {
      const baseUrl = {
        dev: "http://localhost:5173/age-calculator-app/",
        prod: "https://metrikspacex.github.io/age-calculator-app/",
      };
      config.baseUrl = baseUrl[config.env.VERSION];
      return config;
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFolder: "",
    videosFolder: "",
  },
  env: {},
});
