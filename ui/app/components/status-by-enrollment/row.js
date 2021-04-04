import { setComponentTemplate } from '@glimmer/core';
import StatusByStudentRow from '../status-by-student/row.js';
import layout from '../status-by-student/row.hbs';

export default class StatusByEnrollmentRow extends StatusByStudentRow {
  statusablePathSegment = 'enrollments';

  statusableViabilityLabel = 'Met FTE requirements?'

  statusableViabilityField = 'metFteRequirements'

  statusStrings = ['Satisfactory', 'Participating', 'Unsatisfactory']

  get statusableViabilityValue() {
    return this.pojo.attributes.heldPeriodicCheckins;
  }

  get statusable() {
    return this.args.enrollment;
  }
}

setComponentTemplate(StatusByEnrollmentRow, layout);
