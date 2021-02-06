import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TinyComponentsRoute extends Route {
  @service('tinyData') tinyData;

  model() {
    return this.tinyData.fetch('/api/terms');
  }
}
