import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { hashByStatusableIdAndMonth } from '../utils/status-utils';

export default Component.extend({
  tagName: '',

  months: alias('term.attributes.months'),

  statusHash: computed('statuses', function () {
    const { statuses } = this;

    return hashByStatusableIdAndMonth(statuses);
  }),
});
