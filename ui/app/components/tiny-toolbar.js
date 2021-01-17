import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { ROLE_ADMIN } from '../utils/user-utils';

export default class TinyToolbar extends Component {
  @tracked menuIsOpen;

  get userIsAdmin() {
    const { user } = this.args;

    if (!user) return false;

    return user.attributes.role === ROLE_ADMIN;
  }

  @action toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  @action signIn(event) {
    event.preventDefault();
    this.args.signIn();
  }

  @action signOut(event) {
    event.preventDefault();
    this.args.signOut();
  }
}
