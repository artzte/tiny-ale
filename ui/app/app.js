import Application from '@ember/application';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;

  podModulePrefix = config.podModulePrefix;

  Resolver = Resolver;

  constructor(...args) {
    super(...args);

    const localSession = localStorage.getItem('_tinySisSession');
    if (localSession) {
      window._tinyALE.session = JSON.parse(localSession);
    }
  }
}

loadInitializers(App, config.modulePrefix);
