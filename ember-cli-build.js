'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      enabled: EmberApp.env() === 'production', // set to true only in required environments
      generateAssetMap: true,
      fingerprintAssetMap: true,
      prepend: '/'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // var fontExtensions = ['.eot','.otf','.svg','.ttf','.woff','.woff2'];
  // var fontOptions = { destDir: 'themes/default/assets/fonts' };
  // for (var i = fontExtensions.length - 1; i >= 0; i--) {
  //   app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons'+fontExtensions[i], fontOptions);
  // }
  return app.toTree();
};
