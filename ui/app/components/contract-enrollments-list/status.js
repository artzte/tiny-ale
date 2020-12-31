import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import EnrollmentRelations from '../../mixins/enrollment-relations';
import {
  isClosed,
  isCanceled,
  isEnrolled,
  isFulfilled,
  isPending,
} from '../../utils/enrollment-utils';

export default Component.extend(EnrollmentRelations, {
  userService: service('user'),
  canEdit: computed('enrollment', function () {
    return this.userService.canEdit(this.enrollment);
  }),
  isClosed: computed('enrollment.attributes.enrollmentStatus', function () {
    return isClosed(this.enrollment);
  }),
  isEnrolled: computed('enrollment.attributes.enrollmentStatus', function () {
    return isEnrolled(this.enrollment);
  }),
  isCanceled: computed('enrollment.attributes{enrollmentStatus,completionStatus}', function () {
    return isCanceled(this.enrollment);
  }),
  isFulfilled: computed('enrollment.attributes{enrollmentStatus,completionStatus}', function () {
    return isFulfilled(this.enrollment);
  }),
  isEditable: computed('isFulfilled', 'canEdit', function () {
    return !this.isFulfilled && this.canEdit;
  }),
  isPending: computed('enrollment.attributes.enrollmentStatus', function () {
    return isPending(this.enrollment);
  }),
  // eslint-disable-next-line ember/require-computed-macros
  canCancel: computed('isPending', 'isEnrolled', function () {
    return this.isPending || this.isEnrolled;
  }),
  actions: {
    delete() {
      this.deleteEnrollment();
    },
    async update(command) {
      this.set('loading', true);
      await this.updateEnrollment(command);
      this.set('loading', false);
    },
  },
});
