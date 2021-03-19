import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { wasActive } from '../../utils/user-utils';
import { isUnacceptable, getAcademicStatusName } from '../../utils/status-utils';

export default class StatusByCoordinatorColumn extends Component {
  @service('tinyData') tinyData;

  get schoolYear() {
    return this.args.term.attributes.schoolYear;
  }

  get hasStatus() {
    return this.status && this.showStatus;
  }

  get status() {
    const { month, student, statusHash } = this.args;

    return statusHash[student.id] && statusHash[student.id][month];
  }

  get isException() {
    const { showStatus, status } = this;

    if (!showStatus) return false;

    if (!status) return true;

    if (!status.attributes.heldPeriodicCheckins) return true;

    return isUnacceptable(status);
  }

  get statusAbbreviation() {
    const statusAttributes = this.hasStatus ? this.status.attributes : {};
    const { academicStatus, fteHours } = statusAttributes;
    const statusText = [];
    let showHours = true;

    switch (academicStatus) {
      case 'satisfactory':
        statusText.push('A');
        break;
      case 'unsatisfactory':
        statusText.push('U');
        break;
      case 'participating':
        statusText.push('P');
        break;
      default:
        statusText.push('?');
        showHours = false;
        break;
    }

    if (showHours) statusText.push(fteHours);

    return statusText.join(' ');
  }

  get showStatus() {
    const today = this.tinyData.getToday();

    const { month, student } = this.args;

    if (today.isBefore(month)) return false;

    return wasActive(student, month);
  }

  get academicStatusName() {
    const { status } = this;
    if (!(status && status.attributes.heldPeriodicCheckins)) {
      return '?';
    }

    return getAcademicStatusName(status);
  }
}
