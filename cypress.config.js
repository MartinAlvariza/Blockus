const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "n5wvc5",
  env: {
    url: 'https://developer-staging.blockus.com/',
    urlProd: 'https://developer.blockus.com/',
    MAILOSAUR_API_KEY: "A5316huHQsLVh5vJZ9K3a0PCXyIsznS6"
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeoyt: 10000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  projectId: 'behts9',
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    testIsolation: false,
    specPattern: 'cypress/blockus/Tests/*.js',
  
  },
});
