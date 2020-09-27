import Auth0 from 'auth0-js';

export const SESSION_DATA_KEY = '_tinySisSession';
export const SESSION_INTENDED_URL_KEY = '_tinySisRedirect';

let auth0WebAuth;

export class AuthError extends Error {}

export function getAuth0WebAuth() {
  if (auth0WebAuth) return auth0WebAuth;

  auth0WebAuth = new Auth0.WebAuth(window._tinyALE.config.identity);

  return auth0WebAuth;
}

export function getTokenFromHash() {
  const webAuth = getAuth0WebAuth();
  return new Promise((resolve, reject) => {
    webAuth.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (err) return reject(err);

      return resolve(authResult);
    });
  });
}

export function setIntendedUrl(url) {
  window.localStorage.setItem(SESSION_INTENDED_URL_KEY, url);
}

export function getIntendedUrl() {
  return window.localStorage.getItem(SESSION_INTENDED_URL_KEY);
}

export function clearIntendedUrl() {
  window.localStorage.removeItem(SESSION_INTENDED_URL_KEY);
}

export function signIn() {
  const webAuth = getAuth0WebAuth();

  webAuth.authorize();
}

export function doSigninRedirect(intendedUrl) {
  setIntendedUrl(intendedUrl);
  signIn();
}

export function getSessionData() {
  const data = window.localStorage.getItem(SESSION_DATA_KEY);

  return data && JSON.parse(data);
}

export function setSessionData(session) {
  window.localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(session));
}

function clearSessionData() {
  window.localStorage.removeItem(SESSION_DATA_KEY);
}

export function signOut() {
  const webAuth = getAuth0WebAuth();
  const returnTo = `${window.location.protocol}//${window.location.host}/welcome`;

  webAuth.logout({
    returnTo,
  });

  clearSessionData();
}
