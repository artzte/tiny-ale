import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { schedule } from '@ember/runloop';
import { resolve } from 'rsvp';

function onSearch() {
  resolve([]);
}

export default class TTypeAhead extends Component {
  @tracked results;

  @tracked showResults = false;

  @tracked selections = [];

  @tracked index;

  onChange = () => {};

  get hasResults() {
    const { results } = this;
    return results && results.length;
  }

  constructor(...args) {
    super(...args);

    const {
      results,
      value,
    } = this.args;

    this.results = results;

    const {
      hasResults,
    } = this;

    if (!(hasResults && value !== null && value !== undefined)) return;

    const values = Array.isArray(value) ? value : [value];
    const selections = values.map(v => results.find(r => r.value === v));

    selections.forEach(selection => this.handleChange(0, selection, true));
  }

  @action
  async doInput(event) {
    const searchValue = event.target.value.trim();
    this.searchValue = searchValue;
    this.handleSearch(searchValue);
  }

  @action
  doSelect(index, selection) {
    this.handleChange(index, selection);
  }

  @action
  doKeyDown(event) {
    switch (event.key) {
      case 'ArrowDown':
        if (this.showResults) {
          this.incrementSelection();
        } else if (this.searchValue) {
          this.handleSearch(this.searchValue);
        }

        event.preventDefault();
        break;
      case 'ArrowUp':
        if (this.showResults) {
          this.decrementSelection();
        }

        event.preventDefault();
        break;
      case 'Enter': {
        if (this.index === -1) return;

        const selection = this.results[this.index];
        this.handleChange(this.index, selection);

        event.preventDefault();

        break;
      }
      case 'Escape': {
        this.set('showResults', false);
        break;
      }
      default:
        break;
    }
  }

  @action
  doClearSelection(index) {
    const { selections } = this;

    const newSelections = selections.slice(0, index).concat(selections.slice(index + 1));

    schedule('afterRender', this, () => this.element.querySelector('input').focus());

    this.selections = newSelections;
    this.notifyChange();
  }

  @action
  doMouseOverSearchResult(index) {
    this.index = index;
  }

  async handleSearch(searchValue) {
    let results;

    if (searchValue) {
      const handler = this.args.onSearch || onSearch;
      results = await handler(searchValue);
    } else {
      results = [];
    }

    if (!Array.isArray(results)) throw new Error('Array result required for search');

    this.setResults(results);
  }

  notifyChange() {
    const { selections, args } = this;
    const { multiselect, name } = args;
    const values = selections.map(s => s.value);

    this.args.onChange(multiselect ? values : values[0], name, multiselect ? selections : selections[0]);
  }

  handleChange(index, selection, initOnly = false) {
    let { selections } = this;
    const { multiselect } = this.args;

    if (multiselect) {
      selections = selections.concat([selection]);
    } else {
      selections = [selection];
    }

    this.index = index;
    this.selections = selections;
    this.showResults = false;

    if (!initOnly) {
      this.notifyChange();
    }
  }

  incrementSelection() {
    const {
      results,
      index,
    } = this;
    if (index + 1 >= results.length) {
      this.index = results.length - 1;
    } else {
      this.index = index + 1;
    }
  }

  decrementSelection() {
    const {
      index,
    } = this;
    if (index - 1 < 0) {
      this.index = 0;
    } else {
      this.index = index - 1;
    }
  }

  setResults(results) {
    this.showResults = true;
    this.results = results;
    this.index = -1;
  }
}
