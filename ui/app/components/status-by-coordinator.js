import Component from '@glimmer/component';
import { hashByStatusableIdAndMonth } from '../utils/status-utils';

export default class StatusByCoordinator extends Component {
  get statusHash() {
    const { statuses } = this.args;
    return hashByStatusableIdAndMonth(statuses);
  }
}
