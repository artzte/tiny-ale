import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StudentLearningPlanController extends Controller {
  queryParams = ['year'];

  @tracked year = null;

  @action createLearningPlan(year) {
    console.log(year);
  }

  @action changeSchoolYear(year) {
    this.year = year;
  }
}
