import Route from '@ember/routing/route';
import { all } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  templateName: 'status-by-student',

  async beforeModel(params) {
    const { tinyData } = this;
    this.currentSchoolYear = tinyData.getSchoolYear();
    this.schoolYear = params.schoolYear || this.currentSchoolYear;

    this.term = await tinyData.fetch(`/api/terms/coor?year=${this.schoolYear}`);
  },

  model(params) {
    const { tinyData } = this;
    const { term } = this;
    const studentId = params.student_id;
    const months = term.data.attributes.months.join(',');

    this.currentTab = params.show;

    return all([
      tinyData.fetch(`/api/students/${studentId}?include=coordinator`),
      tinyData.fetch(`/api/statuses/students?months=${months}&studentIds=${studentId}`),
    ]).then(results => {
      const [student, statuses] = results;
      this.params = params;
      this.statuses = statuses;
      return student.data;
    });
  },

  afterModel(student) {
    const { tinyData } = this;
    return all([
      tinyData.fetch(`/api/staff/${student.relationships.coordinator.data.id}`),
    ]).then(coordinator => {
      this.coordinator = coordinator;
    });
  },

  setupController(controller, student) {
    this._super(controller, student);

    const {
      coordinator,
      term,
      statuses,
      schoolYear,
    } = this;

    controller.setProperties({
      currentTab: this.currentTab,
      student,
      coordinator,
      term: term.data,
      statuses: statuses.data,
      schoolYear,
      today: new Date(),
    });
  },
});
