import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { resolve, reject } from 'rsvp';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Validator from '../utils/validator';
import { summarizeValidationError } from '../utils/response-utils';

export default class CalendarSettingsComponent extends Component {
  @service('tinyData') tinyData;

  @service('flashMessages') flashMessages;

  @service('router') router;

  @tracked periods = [];

  validator = new Validator({
    current_year: [{
      type: 'required',
    }],
    reporting_base_month: [{
      type: 'required',
    }],
    reporting_end_month: [{
      type: 'required',
    }],
    new_contract_term_default: [{
      type: 'required',
    }],
  });

  constructor(...args) {
    super(...args);

    this.settingsModel = {
      attributes: this.args.settings
        .reduce((memo, setting) => {
          const { name, periods, value } = setting.attributes;

          if (periods) {
            memo[name] = periods
              .map(p => ({ ...p, period: parseInt(p.period, 10) }))
              .sort((p1, p2) => p1.period - p2.period);
          } else {
            memo[name] = value;
          }
          memo[name] = periods || value;
          return memo;
        }, {}),
    };
  }

  get yearOptions() {
    const { currentYear } = this;
    const yearOptions = [];
    for (let i = currentYear - 4; i < currentYear + 5; i += 1) {
      yearOptions.push(i.toString());
    }
    return yearOptions;
  }

  static get monthOptions() {
    return ['January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ].map((month, i) => ({
      name: month,
      value: (i + 1).toString(),
    }));
  }

  @action async save(data) {
    try {
      await this.tinyData.fetch('/api/admin/settings', {
        method: 'PUT',
        data,
      });

      this.flashMessages.success('Settings updates completed');
      this.router.transitionTo('admin-settings.index');
      return resolve();
    } catch (e) {
      this.flashMessages.alert(summarizeValidationError(e));
      return reject(e);
    }
  }

  @action reportError() {
    this.flashMessages.alert('Please check the values and correct any errors');
  }

  @action removePeriod(period) {
    const periodToRemove = period.period;
    const { periods } = this;

    const filteredPeriods = periods
      .filter(p => p.period !== periodToRemove);

    const renumberedPeriods = filteredPeriods
      .map((p, i) => ({
        ...p,
        period: i + 1,
      }));

    this.periods = renumberedPeriods;
  }

  @action addPeriod() {
    const { periods } = this;
    const maxPeriod = periods.reduce((max, p) => (
      p.period > max ? p.period : max
    ), 0);

    this.periods = periods.concat([{ period: maxPeriod + 1, start: '', end: '' }]);
  }
}
