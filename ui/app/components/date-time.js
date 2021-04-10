import Component from '@glimmer/component';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export default class DateTimeComponent extends Component {
  get isoString() {
    return this.date.format('YYYY-MM-DD');
  }

  get date() {
    const { date } = this.args;
    return dayjs(date, 'YYYY-MM-DD');
  }

  get formattedDate() {
    const {
      date: dateArgs,
      substitute,
      format,
    } = this.args;

    if (!dateArgs) {
      return substitute || '';
    }

    return this.date.format(format || 'D MMMM, YYYY');
  }
}
