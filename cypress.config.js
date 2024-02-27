const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      
      baseUrl: 'https://rahulshettyacademy.com/AutomationPractice/' // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.cy.js'
  },
});
