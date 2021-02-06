import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { ROLE_ADMIN } from '../utils/user-utils';

export default class TinyToolbar extends Component {
  @tracked menuIsOpen = false;

  @tracked profileMenuIsOpen = false;

  get userIsAdmin() {
    const { user } = this.args;

    if (!user) return false;

    return user.attributes.role === ROLE_ADMIN;
  }

  @action didClickWindow(event, element) {
    if (!element.contains(event.target)) {
      this.profileMenuIsOpen = false;
    }
  }

  @action toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  @action toggleProfileMenu() {
    this.profileMenuIsOpen = !this.profileMenuIsOpen;
  }

  @action signinSignout(event) {
    event.preventDefault();
    if (this.args.user) {
      this.args.signOut();
    } else {
      this.args.signIn();
    }
  }

  @action addHandlers(element) {
    this.onClickWindow = event => this.didClickWindow(event, element);
    document.addEventListener('click', this.onClickWindow);
  }

  @action removeHandlers() {
    document.removeEventListener('click', this.onClickWindow);
  }
}
