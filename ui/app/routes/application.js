import Route from '@ember/routing/route';
import {
  AuthError,
  doSigninRedirect,
} from '../utils/session-utils';

export default Route.extend({
  actions: {
    error(err) {
      if (err instanceof AuthError) {
        return; // doSigninRedirect(window.location.href);
      }
      throw err;
    },
    didTransition() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
});
