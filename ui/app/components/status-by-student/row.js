import Component from '@glimmer/component';
import { getAcademicStatusName } from '../../utils/status-utils';

export default class StatusByStudentRow extends Component {
  get status() {
    const { month, statusHash } = this.args;

    return statusHash[month];
  }

  get academic() {
    const { status } = this;
    if (!status) return '';

    return getAcademicStatusName(status);
  }

  get heldPeriodicCheckins() {
    const { status } = this;
    if (!status) return '';

    if (status.attributes.heldPeriodicCheckins) {
      return 'Y';
    }

    return 'N';
  }

  get notes() {
    const { status, args } = this;
    const { notablesHash } = args;
    if (!(notablesHash && status)) return null;

    return notablesHash[status.id];
  }
}
