import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "vite",
      framework: "react",
    },
    downloadsFolder: "./cypress/downloads",
    fixturesFolder: "./cypress/fixtures",
    screenshotsFolder: "./cypress/screenshots",
    specPattern: [
      "./cypress/integrations/**/*.cy.{js,jsx,ts,tsx}",
      "./cypress/units/**/*.cy.{js,jsx,ts,tsx}",
    ],
    supportFolder: "./cypress/support",
    videosFolder: "./cypress/videos",
  },
  e2e: {
    downloadsFolder: "./cypress/downloads",
    fixturesFolder: "./cypress/fixtures",
    screenshotsFolder: "./cypress/screenshots",
    setupNodeEvents(on, config) {
      const baseUrl = {
        dev: "http://localhost:5173/age-calculator-app/",
        prod: "https://metrikspacex.github.io/age-calculator-app/",
      };
      config.baseUrl = baseUrl[config.env.VERSION];
      return config;
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFolder: "./cypress/support",
    videosFolder: "./cypress/videos",
  },
});
