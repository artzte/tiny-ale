import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { activeMonths, hashByMonth } from '../utils/status-utils';
import { generateNotableHash } from '../utils/note-utils';
import { contractModelFactory } from '../utils/contract-utils';

export default class StatusByEnrollment extends contractModelFactory(Component) {
  @service('tinyData') tinyData;

  @tracked loadingNotes = false;

  @tracked notesHash;

  constructor(...args) {
    super(...args);

    this.contract = this.args.contract;

    const { statuses, getNotes } = this.args;

    this.loadingNotes = true;

    getNotes(statuses)
      .then((result) => {
        this.notesHash = generateNotableHash(result, statuses, 'id');
      });
  }

  get months() {
    return activeMonths(this.term, this.tinyData.getToday())
      .sort((m1, m2) => m2.localeCompare(m1));
  }

  get statusHash() {
    return hashByMonth(this.args.statuses);
  }
}
