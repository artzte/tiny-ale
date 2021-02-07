import Component from '@glimmer/component';
import { get, action } from '@ember/object';
import { capitalize } from '../helpers/titleize';

export default class TSelect extends Component {
  /**
   * Builds the options list with initial selection.
   * Does not list value as a dependency. Internal selection
   * changes are handled by the native control. So we don't
   * recompute this on value changes.
   */
  get optionSelections() {
    const {
      optionsList = [],
      optionValuePath = 'value',
      optionNamePath = 'name',
    } = this.args;

    return optionsList
      .map(option => {
        let opt;
        if (typeof option !== 'object') {
          opt = {
            name: capitalize(option),
            value: option,
          };
        } else {
          opt = {
            name: get(option, optionNamePath),
            value: get(option, optionValuePath),
          };
        }

        return opt;
      });
  }

  @action onChange(event) {
    if (!this.args.onchange) return;

    const select = event.target;
    const { name } = select;
    const [option] = select.selectedOptions;
    const value = option && option.value;

    this.args.onchange(value, name, event);
  }
}
