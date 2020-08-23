import Route from '@ember/routing/route';
import {
  AuthError,
  doSigninRedirect,
} from '../utils/session-utils';

export default Route.extend({
  actions: {
    error(err) {
      if (err instanceof AuthError) {
        doSigninRedirect(window.location.href);
      }

      // required to allow bubble-through to error routes
      return true;
    },
    didTransition() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
});
