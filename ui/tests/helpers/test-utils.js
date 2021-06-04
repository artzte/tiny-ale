import clone from 'tinysis-ui/utils/clone';
import { getContext } from '@ember/test-helpers';
import Service from '@ember/service';
import jwtFixture from '../fixtures/auth0-jwt';
import settingsFixture from '../fixtures/settings';

export class MockLocalStorage {
  constructor(mockStubs = { _tinySisSession: JSON.stringify(jwtFixture) }) {
    this._stubs = clone(mockStubs);
    this._realLocalStorage = window.localStorage;
    Object.defineProperties(window, {
      localStorage: {
        value: this,
        writable: true,
      },
    });
  }

  getItem(key) {
    return this._stubs[key] || null;
  }

  setItem(key, value) {
    this._stubs[key] = value || null;
  }

  removeItem(key) {
    this._stubs[key] = null;
  }

  unmock() {
    Object.defineProperties(window, {
      localStorage: {
        value: this._realLocalStorage,
        writable: false,
      },
    });
  }
}

export { clone };

export function stubRouter(currentRouteName) {
  const { owner } = getContext();

  const routerMock = {
    get currentURL() { return 'currentURL()'; },
    currentRouteName,
    currentRoute: {
      query: { foo: 1, bar: 2 },
    },
  };

  owner.register('service:router', Service.extend(routerMock));

  return routerMock;
}

export function getSettings() {
  return settingsFixture.data.reduce((memo, setting) => {
    memo[setting.name] = setting.value;
    return memo;
  }, {});
}
