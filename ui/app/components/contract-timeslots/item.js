import Component from '@glimmer/component';
import { error } from '../../utils/logger';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default class ContractTimeslotComponent extends Component {
  get days() {
    try {
      const { weekdays = '' } = this.args.timeslot;
      return weekdays
        .split('')
        .map(day => days[parseInt(day, 10)])
        .join('/');
    } catch (e) {
      error('Malformed timeslots, apparently');
      error(e.message);
      return 'TBD';
    }
  }
}
