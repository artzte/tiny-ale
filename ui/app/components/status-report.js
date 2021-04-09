import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { activeMonths } from 'tinysis-ui/utils/status-utils';
import { generateNotableHash } from 'tinysis-ui/utils/note-utils';

export default class StatusReport extends Component {
  @tracked notes;

  @tracked loadingNotes;

  @service tinyData;

  get statusableType() {
    return this.args.statusable.type;
  }

  get statusablePathSegment() {
    return this.args.statusable.type === 'user'
      ? 'students'
      : 'enrollments';
  }

  get isViableLabel() {
    return this.args.statusable.type === 'user'
      ? 'Held periodic checkins'
      : 'Met FTE requirements';
  }

  get isViableField() {
    return this.args.statusable.type === 'user'
      ? 'heldPeriodicCheckins'
      : 'metFteRequirements';
  }

  get academicStatusOptions() {
    const strings = this.args.statusable.type === 'user'
      ? ['Satisfactory', 'Unsatisfactory']
      : ['Satisfactory', 'Participating', 'Unsatisfactory'];

    return strings
      .map(name => ({ name, value: name.toLowerCase() }));
  }

  attendanceStatusOptions = ['Satisfactory', 'Unsatisfactory']
    .map(name => ({ name, value: name.toLowerCase() }))

  get months() {
    const active = activeMonths(this.args.term, this.tinyData.getToday());

    return active.sort((m1, m2) => m2.localeCompare(m1));
  }

  get statusHash() {
    const { statuses } = this.args;

    return statuses
      .reduce((memo, status) => {
        memo[status.attributes.month] = status;
        return memo;
      }, {});
  }

  get notablesHash() {
    const { notes, args } = this;
    const { statuses } = args;
    if (!(notes && statuses)) return {};

    return generateNotableHash(notes, statuses, 'id');
  }

  constructor(...args) {
    super(...args);
    const { getNotes, statuses } = this.args;

    this.loadingNotes = true;
    getNotes(statuses).then(notes => {
      this.notes = notes;
      this.loadingNotes = false;
    });
  }
}
