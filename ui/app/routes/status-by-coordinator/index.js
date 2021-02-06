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
      this.tinyData.fetch('/api/terms', {
        data: {
          type: 'coor',
          status: 'active',
          schoolYear: this.tinyData.getSchoolYear(),
        },
      }),
    ]).then(results => {
      const [students, terms] = results;

      Object.assign(this, { students, terms });
    });
  },

  model() {
    const [term] = this.terms.data;
    this.term = term;

    return this.tinyData.fetch('/api/statuses', {
      data: {
        studentIds: this.students.data.map(student => student.id),
        months: this.term.attributes.months,
        type: 'student',
        limit: 10000,
      },
    });
  },

  setupController(controller, statuses) {
    this._super(controller, statuses);

    controller.setProperties({
      statuses,
      students: this.students,
      term: this.term,
    });
  },

  getCoordinator() {
    return this.modelFor('status-by-coordinator').data;
  },
});
