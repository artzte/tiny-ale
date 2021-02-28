import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';

export default class StudentsController extends Controller {
  @controller('students.index') studentsIndexController;

  queryParams = {};

  terms = [];

  staff = [];

  @action filterStudents(queryParams) {
    const { studentsIndexController } = this;

    studentsIndexController.setProperties({
      ...queryParams,
      offset: 0,
    });
  }
}
