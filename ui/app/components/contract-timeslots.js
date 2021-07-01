import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

function startEndPeriod(period) {
  return period.split('-');
}

export default class ContractTimeslots extends Component {
  @service('tinyData') tinyData;

  @tracked newTimeslot = {};

  @tracked timeslots = [];

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  constructor(...args) {
    super(...args);
    const [start, end] = startEndPeriod(this.periods[0]);
    this.newTimeslot = {
      start,
      end,
    };
    this.timeslots = this.args.timeslots;
  }

  get periods() {
    return this.tinyData.getPeriods()
      .map(period => `${period.start}-${period.end}`);
  }

  get addIsDisabled() {
    const { newTimeslot } = this;
    const hasDay = this.days.some(day => newTimeslot[day]);
    return !hasDay;
  }

  alertChange() {
    this.args.onChange(this.timeslots, this.args.name || 'timeslots');
  }

  @action onChange(value, name, event) {
    switch (name) {
      case 'period': {
        const [start, end] = startEndPeriod(value);
        this.newTimeslot = { ...this.newTimeslot, start, end };
        break;
      }
      default:
        this.newTimeslot = { ...this.newTimeslot, [name]: event.target.checked };
        break;
    }
  }

  @action addTimeslot() {
    const { newTimeslot } = this;
    const weekdays = this.days
      .map((day, i) => (newTimeslot[day] ? i.toString() : ''))
      .join('');
    const { start, end } = newTimeslot;
    const newTimeslots = this.timeslots.concat([{ weekdays, start, end }]);

    this.timeslots = newTimeslots;

    this.alertChange();
  }

  @action removeTimeslot(i) {
    const timeslots = this.timeslots.concat([]);

    timeslots.splice(i, 1);

    this.timeslots = timeslots;

    this.alertChange();
  }
}
