/* eslint-disable global-require */

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['vendor', 'node_modules'],
            },
          },
          {
            module: require('tailwindcss'),
            options: {
              config: './config/tailwind.js',
            },
          },
          require('postcss-preset-env'),
          require('postcss-nested'),
        ],
      },
    },
  });

  app.import('vendor/pikaday/css/pikaday.css');

  return app.toTree();
};
