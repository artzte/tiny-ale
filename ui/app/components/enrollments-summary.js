import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EnrollmentsSummaryComponent extends Component {
  @service('tinyData') tinyData;

  @tracked enrollmentsReport = {};

  constructor(...args) {
    super(...args);

    this.fetchEnrollments();
  }

  get yearEnrollments() {
    const { enrollmentsReport } = this;
    const { year } = this.args;
    return enrollmentsReport[year];
  }

  get activeEnrollments() {
    const { yearEnrollments } = this;

    if (!yearEnrollments) return null;

    return yearEnrollments.data.filter(enrollment => enrollment.attributes.enrollmentStatus === 'enrolled');
  }

  get inactiveEnrollments() {
    const { yearEnrollments } = this;

    if (!yearEnrollments) return null;

    return yearEnrollments.data.filter(enrollment => enrollment.attributes.enrollmentStatus !== 'enrolled');
  }

  @action checkYearEnrollments() {
    this.fetchEnrollments();
  }

  async fetchEnrollments() {
    const {
      student,
      year,
    } = this.args;
    const {
      yearEnrollments,
    } = this;

    if (yearEnrollments) return;

    const result = await this.tinyData.fetch(`/api/students/${student.id}/enrollments?schoolYear=${year}`);

    this.enrollmentsReport = {
      ...this.enrollmentsReport,
      [year]: result,
    };
  }
}
