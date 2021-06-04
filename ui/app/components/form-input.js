import Component from '@glimmer/component';

export default class FormInputComponent extends Component {
  get hasErrorToShow() {
    return Boolean(this.args.error && this.args.showErrors);
  }
}
