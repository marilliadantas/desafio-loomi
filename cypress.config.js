const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: false,
    chromeWebSecurity: false,
    video: false,
    downloads: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
