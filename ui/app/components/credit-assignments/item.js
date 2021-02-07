import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';
import {
  getHours,
  getCourseName,
} from '../../utils/credit-utils';

export default Component.extend({
  tinyData: service(),
  tagName: '',

  courseName: computed('credit.attributes.courseName', 'creditAssignment.attributes.creditCourseName', function () {
    return getCourseName(this.creditAssignment, this.credit);
  }),

  hours: computed('creditAssignment{attributes.creditHours,attributes.overrideHours}', function () {
    const { creditAssignment } = this;
    return getHours(creditAssignment);
  }),

  didReceiveAttrs() {
    this._super();
    if (this.credit) return;

    const { creditAssignment } = this;
    const creditId = get(creditAssignment, 'relationships.credit.data.id');

    if (!creditId) {
      return;
    }

    const credit = this.tinyData.get('credit', creditId);

    this.set('credit', credit);
  },
});
