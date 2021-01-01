import QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { get } from '@ember/object';
import { start } from 'ember-qunit';
import './helpers/flash-message';

import Application from '../app';
import config from '../config/environment';

setApplication(Application.create(config.APP));

QUnit.extend(QUnit.assert, {
  // requires that the object exists, and that the attribute referenced by path is truthy
  dig(object, path, _message) {
    const message = _message || `successfully dug ${path} from object`;

    const result = object && get(object, path);

    this.pushResult({
      result,
      message,
    });
  },

  matches(actual, regex, message) {
    let result;

    const _actual = (actual || '').toString();

    if (regex === undefined || regex === null) throw new Error('a regex or string to match is required');

    if (regex instanceof RegExp) {
      result = regex.test(_actual);
    } else {
      result = _actual.includes(regex.toString());
    }

    const expected = `String matching /${regex.toString()}/`;

    this.pushResult({
      result,
      actual,
      expected,
      message: message || `matched ${regex} to ${actual}`,
    });
  },
});

start();
