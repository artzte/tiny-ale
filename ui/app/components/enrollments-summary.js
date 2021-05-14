import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EnrollmentsSummaryComponent extends Component {
  @service('tinyData') tinyData;

  @tracked enrollmentsReport = { data: [] };

  constructor(...args) {
    super(...args);

    const { student, year } = this.args;

    this.tinyData.fetch(`/api/students/${student.id}/enrollments?schoolYear=${year}`)
      .then(result => {
        this.enrollmentsReport = result;
      });
  }

  get activeEnrollments() {
    return this.enrollmentsReport && this.enrollmentsReport.data.filter(enrollment => enrollment.attributes.enrollmentStatus === 'enrolled');
  }

  get inactiveEnrollments() {
    return this.enrollmentsReport && this.enrollmentsReport.data.filter(enrollment => enrollment.attributes.enrollmentStatus !== 'enrolled');
  }
}
