const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://demo.seleniumeasy.com/",
    "defaultCommandTimeout": 80000,
    "pageLoadTimeout": 200000,
    "viewportHeight": 800,
    "viewportWidth": 1500,
    "watchForFileChanges": false
  },
});
