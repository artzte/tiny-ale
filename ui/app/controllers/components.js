import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const mountains = [
  'Brokentop',
  'Middle Sister',
  'Mt. Bachelor',
  'North Sister',
  'South Sister',
  'Tumalo Butte',
].map((name, value) => ({ name, value }));

export default class ComponentsController extends Controller {
  @tracked selections = [];

  get mountainNames() {
    const { selections } = this;

    if (!selections) return null;

    return selections
      .map(s => s.name)
      .join(', ');
  }

  brokenTop = 0;

  sistersAndBachelor = [1, 2, 3, 4];

  searchMountainsResults = mountains;

  // eslint-disable-next-line class-methods-use-this
  @action searchMountains() {
    return Promise.resolve(mountains);
  }

  @action selectMountain(mountainId, name, selection) {
    console.log('selectMountain', arguments)
    this.selections = selection && [selection];
  }

  @action selectMountains(mountainIds, name, selections) {
    console.log('selectMountains', arguments)
    this.selections = selections;
  }

  // eslint-disable-next-line class-methods-use-this
  @action submit() {
    // eslint-disable-next-line no-console
    console.log('submit');
  }
}
