import { defineConfig } from "cypress";


const basicConfigs= {
   baseUrl: 'https://automationexercise.com/',
   defaultCommandTimeout: 4000,
   pageLoadTimeout:60000,
   requestTimeout:5000,
   responseTimeout:30000,
   screenshotsFolder:'cypress/screenshots',
   videosFolder:'cypress/videos',
   screenshotOnRunFailure	:true,
   trashAssetsBeforeRuns: true,
   defaultBrowser:null,
   viewportHeight:660,
   viewportWidth:1000,
   specPattern: 'cypress/e2e/**/*.cy.ts'
}


export default defineConfig({
  e2e: {
    ...basicConfigs,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
