import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  columnsCount: computed('meetings.length', function () {
    return this.meetings.length + 4;
  }),
  roll: computed('attendanceHash', 'enrollment', function () {
    const {
      attendanceHash,
      enrollment,
    } = this;

    return attendanceHash[enrollment.id];
  }),

  actions: {
    cancel(event) { event.preventDefault(); },
  },
});
