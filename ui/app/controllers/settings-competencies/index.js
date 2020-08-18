import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class SettingsCompetenciesIndexController extends Controller {
  queryParams = ['category'];

  @tracked category = '';

  get categoryCompetencies() {
    const { category, competencies } = this;

    if (!competencies) return [];

    if (category === '') return competencies.data;

    return competencies.data.filter(competency => competency.attributes.category === category)
  }
}
