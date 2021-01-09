import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tinyData: service('tinyData'),
  showCoordinatorNav: true,
  studentNavigationMap: computed('student', function () {
    const { tinyData, student } = this;
    const coordinator = tinyData.get('user', student.relationships.coordinator.data.id);
    return coordinator
      .relationships
      .coordinatees
      .data
      .map((relation) => {
        const participant = tinyData.get('user', relation.id);
        return {
          name: `${participant.attributes.lastName}, ${participant.attributes.firstName}`,
          value: participant.id,
        };
      });
  }),
  actions: {
    async navigate(studentId) {
      const { student } = this;
      this.set('loading', true);
      await this.transitionToRoute('status-by-student-for-coordinator', student.relationships.coordinator.data.id, studentId);
      this.set('loading', false)
    },
  },
});
