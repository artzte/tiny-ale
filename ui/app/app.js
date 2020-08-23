import Application from '@ember/application';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;

  podModulePrefix = config.podModulePrefix;

  Resolver = Resolver;

  LOG_TRANSITIONS = true;
  LOG_TRANSITIONS_INTERNAL = true;
}

loadInitializers(App, config.modulePrefix);
