import Component from '@glimmer/component';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export default class DateTimeComponent extends Component {
  get formattedDate() {
    const {
      date,
      substitute,
    } = this.args;

    if (!date) {
      return substitute || '';
    }

    let format;

    switch (this.args.format) {
      case 'compactTermMonth':
        format = 'MMM';
        break;
      case 'termMonth':
        format = 'MMMM YYYY';
        break;
      default:
        format = _format || 'D MMMM, YYYY';
    }

    return dayjs(date)
      .format(format);
  }
}
