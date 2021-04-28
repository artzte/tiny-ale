import Component from '@glimmer/component';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export default class DateTimeComponent extends Component {
  get titleString() {
    return this.args.titleString || this.isoString;
  }

  get isoString() {
    return this.date && this.date.toISOString();
  }

  get date() {
    const { date } = this.args;
    return date && dayjs(date, 'YYYY-MM-DD');
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
