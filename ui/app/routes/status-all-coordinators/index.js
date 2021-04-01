import Route from '@ember/routing/route';
import { all } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  beforeModel() {
    return all([
      this.tinyData.fetch('/api/students', {
        data: {
          status: 'reportable',
          order: 'lastName, firstName',
          limit: -1,
        },
      }),
      this.tinyData.fetch(`/api/terms/coor?year=${this.tinyData.getSchoolYear()}`),
    ]).then(([students, term]) => {
      this.students = students.data;
      this.term = term.data;
    });
  },

  model() {
    const { students, term } = this;

    return all([
      this.tinyData.fetch('/api/staff', {
        data: {
          status: 'active',
          coordinators: true,
          order: 'lastName, firstName',
          limit: -1,
        },
      }),

      this.tinyData.fetch('/api/statuses/students', {
        data: {
          studentIds: students.map(student => student.id),
          months: term.attributes.months,
          type: 'student',
          limit: -1,
        },
      }),
    ]);
  },

  setupController(controller, model) {
    this._super(controller, model);
    const [staffResult, statusesResult] = model;

    controller.setProperties({
      statuses: statusesResult.data,
      coordinators: staffResult.data,
      students: this.students,
      term: this.term,
    });
  },
});
