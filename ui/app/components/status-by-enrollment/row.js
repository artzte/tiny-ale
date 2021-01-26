import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { isMonthActiveForStatusReporting } from '../../utils/status-utils';

export default class StatusByStudentRow extends Component {
  @service('tinyData') tinyData;

  @tracked statusHash;

  get hasStatus() {
    return this.status;
  }

  get status() {
    const { statusHash, month } = this.args;
    return statusHash[month];
  }

  get isActiveMonth() {
    return isMonthActiveForStatusReporting(this.args.month, this.tinyData.getToday());
  }

  get notes() {
    const { notesHash } = this.args;
    const { status } = this;

    if (!(notesHash && status)) return null;

    return notesHash[status.id] || [];
  }
}
