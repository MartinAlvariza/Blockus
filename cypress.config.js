const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "n5wvc5",
  env: {
    url: 'https://developer-staging.blockus.net/',
    urlProd: 'https://developer.blockus.net/'
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeoyt: 10000,
  viewportHeight: 860,
  viewportWidth: 1400,
  projectId: 'behts9',
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    testIsolation: true,
    specPattern: 'cypress/blockus/Tests/*.js',
  
  },
});
