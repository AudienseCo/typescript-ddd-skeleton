const container = require('../../src/apps/mooc_backend/config/dependency-injection').default;
const seed = require('../../src/apps/backoffice/frontend/seed').seed;
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

const environmentArranger = container.get('Mooc.EnvironmentArranger');

module.exports = (on, config) => {
  on('task', {
    async 'reset:db'() {
      await (await environmentArranger).arrange();
      await seed();
      return null;
    }
  });
  on('file:preprocessor', cucumber());
};
