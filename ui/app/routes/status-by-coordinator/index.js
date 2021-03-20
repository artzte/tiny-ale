import Route from '@ember/routing/route';
import { all } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  beforeModel() {
    const coordinator = this.getCoordinator();
    return all([
      this.tinyData.fetch('/api/students', {
        data: {
          coordinatorIds: coordinator.id,
          status: 'reportable',
          order: 'lastName, firstName',
        },
      }),
      this.tinyData.fetch(`/api/terms/coor?year=${this.tinyData.getSchoolYear()}`),
    ]).then(results => {
      [this.students, this.term] = results;
    });
  },

  model() {
    const { term, students } = this;

    return this.tinyData.fetch('/api/statuses', {
      data: {
        studentIds: students.data.map(student => student.id),
        months: term.data.attributes.months,
        type: 'student',
        limit: 10000,
      },
    });
  },

  setupController(controller, statuses) {
    this._super(controller, statuses);

    controller.setProperties({
      statuses: statuses.data,
      students: this.students.data,
      term: this.term.data,
    });
  },

  getCoordinator() {
    return this.modelFor('status-by-coordinator').data;
  },
});
