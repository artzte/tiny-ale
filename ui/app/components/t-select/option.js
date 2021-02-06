import Component from '@glimmer/component';

export default class TSelectOption extends Component {
  get selected() {
    const {
      value,
      currentValue,
    } = this.args;

    return (value || '').toString() === (currentValue || '').toString();
  }
}
