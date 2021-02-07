import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import EnrollmentRelations from '../mixins/enrollment-relations';

export default Controller.extend(EnrollmentRelations, {
  tinyData: service('tinyData'),
  enrollmentNavigationMap: computed('contract', function () {
    const { tinyData, contract } = this;
    return contract
      .relationships
      .enrollments
      .data
      .map(relation => {
        const enrollment = tinyData.get('enrollment', relation.id);
        const participant = tinyData.get('user', enrollment.relationships.participant.data.id);
        return {
          name: `${participant.attributes.lastName}, ${participant.attributes.firstName}`,
          value: enrollment.id,
        };
      });
  }),
  actions: {
    navigate(enrollmentId) {
      this.transitionToRoute('status-by-enrollment', this.contract.id, enrollmentId);
    },
  },
});
