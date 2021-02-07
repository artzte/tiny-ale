import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ComponentsController extends Controller {
  @tracked selections = [];

  oregonMountains = [
    'Brokentop',
    'Middle Sister',
    'Mt. Bachelor',
    'North Sister',
    'South Sister',
    'Tumalo Butte',
  ]

  get mountains() {
    return this.oregonMountains.map((name, value) => ({ name, value }));
  }

  get mountainNames() {
    const { selections } = this;

    if (!selections) return null;

    return selections
      .map(s => s.name)
      .join(', ');
  }

  brokenTop = 0;

  sistersAndBachelor = [1, 2, 3, 4];

  searchMountainsResults = this.mountains;

  // eslint-disable-next-line class-methods-use-this
  @action searchMountains() {
    return Promise.resolve(this.mountains);
  }

  @action selectMountain(mountainId, name, selection) {
    this.selections = selection && [selection];
  }

  @action selectMountains(mountainIds, name, selections) {
    this.selections = selections;
  }

  // eslint-disable-next-line class-methods-use-this
  @action submit() {
    // eslint-disable-next-line no-console
    console.log('submit');
  }
}
