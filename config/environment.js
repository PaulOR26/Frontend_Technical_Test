'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.firebase = {
    apiKey: 'AIzaSyD-55DXMwUXGbHlOi8AHoH9NYDGRLEszPY',
    authDomain: 'clarus-tech-test-9a236.firebaseapp.com',
    projectId: 'clarus-tech-test-9a236',
    storageBucket: 'clarus-tech-test-9a236.appspot.com',
    messagingSenderId: '310748959255',
    appId: '1:310748959255:web:b542eb2e564300ff268252',
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
