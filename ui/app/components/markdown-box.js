import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MarkdownBoxComponent extends Component {
  get isReadOnly() {
    if (this.args.isDisabled) return true;

    return false;
  }

  @action onChange(event) {
    const { onchange: handler } = this.args;
    if (!handler) return;

    handler(event.target.value, event.target.name, event);
  }
}
