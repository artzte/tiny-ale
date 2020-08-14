import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SettingsCompetenciesController extends Controller {
  @action
  editCompetency(competency) {
    console.log(competency);
  }
}
