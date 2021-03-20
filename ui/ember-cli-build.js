/* eslint-disable global-require */

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/templates/**/*.hbs',
      './app/components/**/*.hbs',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    safelist: [/fa-.x/],
  },
};

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
              config: './app/tailwind.config.js',
            },
          },
          require('postcss-nested'),
          ...isProduction ? [purgeCSS] : [],
        ],
      },
    },
  });

  app.import('vendor/pikaday/css/pikaday.css');

  return app.toTree();
};
