import Component from '@glimmer/component';
import { isActive } from '../../utils/user-utils';

export default class StatusByCoordinatorRow extends Component {
  get studentHash() {
    const { statusHash, student } = this.args;

    return statusHash[student.id] || {};
  }

  get studentStatus() {
    if (isActive(this.args.student)) {
      return 'Active';
    }

    return 'Inactive';
  }
}
