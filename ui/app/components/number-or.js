import Component from '@glimmer/component';
import { formatNumber } from 'accounting';

export default class NumberOr extends Component {
  get or() {
    return this.args.or === undefined ? '-' : this.args.or;
  }

  get number() {
    const {
      number: numberFromArgs,
    } = this.args;

    if ([null, undefined].includes(numberFromArgs)) return null;

    try {
      const float = parseFloat(numberFromArgs);

      if (Number.isNaN(float)) throw new Error('NaN');
      return float;
    } catch (e) {
      return null;
    }
  }

  get renderedNumber() {
    const { number } = this;

    if (Number.isFinite(number) && number > 0) {
      return formatNumber(number, 2).replace(/\.0+$/, '');
    }

    return this.or;
  }
}
