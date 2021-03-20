import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';

export default class AdminUsersController extends Controller {
  @controller('admin-users.index') adminUsersIndex;

  queryParams = {};

  terms = [];

  staff = [];

  @action filterUsers(queryParams) {
    const adminIndexController = this.adminUsersIndex;
    adminIndexController.setProperties({ ...queryParams, offset: 0 });
  }
}
