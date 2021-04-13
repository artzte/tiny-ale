import dayjs from 'dayjs';
import { action } from '@ember/object';
import Validator from '../utils/validator';
import TForm from './t-form';
import { tracked } from '@glimmer/tracking';

export default class AdminTermForm extends TForm {
  @tracked pojo = {};

  schoolYears = [];

  get isActive() {
    return this.pojo.status === 'active';
  }

  get isInactive() {
    return !this.isActive;
  }

  get sortedSchoolYears() {
    return this.args.schoolYears.sort((a, b) => b - a);
  }

  get reportingMonthOptions() {
    const { reportingBaseMonth } = this.args;
    const { pojo } = this;
console.log('computing reportingMonthOptions', reportingBaseMonth, pojo)
    const { schoolYear } = pojo;
    const baseMonth = dayjs(new Date(schoolYear, reportingBaseMonth - 1, 1));
    const months = [];

    for (let i = 0; i < 12; i += 1) {
      months.push(baseMonth.add(i, 'month').format('YYYY-MM-DD'));
    }
    return months;
  }

  validator = new Validator({
    name: [{
      type: 'required',
    }, {
      type: 'format',
      regex: /\w.{5,100}/,
    }],
    creditDate: { type: 'required' },
    schoolYear: { type: 'required' },
    months: {
      type: 'required',
      message: 'Please select at least one reporting month',
    },
  });

  @action toggleStatus() {
    const { pojo } = this;
    this.pojo = {
      ...pojo,
      status: pojo.status === 'active' ? 'inactive' : 'active',
    };
    this.validate();
  }

  @action toggleMonth(reportingMonth) {
    const months = this.pojo.months || [];
    const existingMonth = (months || []).find(month => month === reportingMonth);
    if (existingMonth) {
      this.pojo = {
        ...this.pojo,
        months: months.filter(month => month !== reportingMonth),
      };
    } else {
      this.pojo = {
        ...this.pojo,
        months: months.concat([reportingMonth]).sort(),
      };
    }
    this.validate();
  }

  // keep the months stable with the newly selected
  // year
  @action didChangeSchoolYear(value) {
    const { pojo } = this;
    const yearDiff = value - pojo.schoolYear;
    const months = pojo.months.map(month => dayjs(month)
      .add(yearDiff, 'years')
      .format('YYYY-MM-DD'));
    this.pojo = {
      ...pojo,
      schoolYear: value,
      months,
    };
  }
}
