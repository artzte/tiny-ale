import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SettingsLearningPlanGoalsIndexController extends Controller {
  queryParams = ['year'];

  @service('tinyData') tinyData;

  get years() {
    return [{
      name: 'All years',
      value: null,
    }].concat(this.tinyData.getYears().map(year => ({
      name: year.toString(),
      value: year.toString(),
    })));
  }

  @tracked year = null;

  @action filterByYear(year) {
    this.year = year;
  }

  get yearAsNumber() {
    return this.year && parseInt(this.year, 10);
  }

  get yearQuery() {
    return { year: this.year };
  }
}
