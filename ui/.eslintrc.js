/* eslint-disable strict */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: [
    'ember',
  ],
  extends: [
    'airbnb-base',
    'plugin:ember/recommended',
  ],
  env: {
    browser: true,
  },
  globals: {
    qunit: true,
  },
  rules: {
    'ember/new-module-imports': 1,
    'ember/order-in-components': 1,
    'ember/order-in-controllers': 1,
    'ember/order-in-models': 1,
    'ember/order-in-routes': 1,

    // 'ember/no-arrow-function-computed-properties': 0,
    'ember/no-classic-classes': 0,
    'ember/no-actions-hash': 0,
    'ember/no-controller-access-in-routes': 0,
    'ember/no-component-lifecycle-hooks': 0,
    'ember/classic-decorator-no-classic-methods': 0,
    'ember/no-classic-components': 0,
    'ember/require-tagless-components': 0,
    'no-async-promise-executor': 0,

    // only a few build functions affected
    strict: 0,

    // these were getting around another linter rule; use class constant
    'ember/no-arrow-function-computed-properties': 0,

    // can just use template or add to class functionality
    'ember/no-empty-glimmer-component-classes': 0,

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    // OCTANE
    'ember/no-mixins': 0,
    'ember/no-new-mixins': 0,
    'ember/no-get': 0,
    'ember/use-brace-expansion': 0,

    // TODO this seems like false positives, why
    'import/extensions': 0,

    // sometimes named imports are handy
    'import/prefer-default-export': 0,

    // haven't figured out how to reconcile these with Ember's module imports
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    // OCTANE
    // ember has lots of anon functions in its computeds,
    // grace here
    'func-names': 0,

    // can leave line length to the developer to sort out
    'max-len': 0,

    // continue statements are not the devil
    'no-continue': 0,

    // allows the convention of a leading underscore for
    // "private" attributes
    'no-underscore-dangle': 0,

    // I generally don't do this but for reduce operations this is just
    // a painful rule
    'no-param-reassign': 0,

    // eslint is trying to be helpful here but due to how Ember constructs tests
    'prefer-arrow-callback': 0,

    // if a single argu
    'arrow-parens': ['error', 'as-needed'],

    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    },
    ],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
