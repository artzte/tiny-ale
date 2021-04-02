import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { getAcademicStatusName } from '../../utils/status-utils';
import notes from '../../mixins/notes';

export default class StatusByStudentRow extends Component {
  @tracked isEditing = false;

  @tracked _notes = null;

  @tracked _status = null;

  @service('tinyData') tinyData;

  statusOptions = ['Satisfactory', 'Participating', 'Unsatisfactory']
    .map(name => ({ name, value: name.toLowerCase() }))

  get hasStatus() {
    return this.isEditing || this.status;
  }

  get status() {
    const { month, statusHash } = this.args;

    return this._status || statusHash[month];
  }

  get academic() {
    const { status } = this;
    if (!status) return '';

    return getAcademicStatusName(status);
  }

  get heldPeriodicCheckins() {
    const { status } = this;

    return status && status.attributes.heldPeriodicCheckins;
  }

  get notes() {
    if (this._notes) return this._notes;

    const { status, args } = this;
    const { notablesHash } = args;
    if (!(notablesHash && status)) return null;

    return notablesHash[status.id];
  }

  @action setEditing() {
    this.isEditing = true;
    if (this.status) {
      this.pojo = JSON.parse(JSON.stringify(this.status));
    } else {
      this.pojo = {
        attributes: {
          academicStatus: 'satisfactory',
          fteHours: 27.5,
          heldPeriodicCheckins: true,
        },
      };
    }
  }

  @action showDetails() {
    this.pojo = null;
    this.isEditing = false;
  }

  @action onChange(...args) {
    const event = args[0] instanceof Event ? args[0] : args[2];
    const element = event.target;
    const {
      name,
      checked,
      value,
    } = element;

    let newValue;
    if (/heldPeriodicCheckins|metFteRequirements/.test(name)) {
      newValue = checked;
    } else {
      newValue = value;
    }

    this.pojo = {
      ...this.pojo,
      attributes: {
        ...this.pojo.attributes,
        [name]: newValue,
      },
    };
  }

  @action async submitStatus(event) {
    event.preventDefault();

    const response = await this.tinyData.fetch(`/api/statuses/students/${this.args.student.id}/${this.args.month}`, {
      method: 'PUT',
      data: this.pojo,
    });

    this._status = response.data;
    this._notes = response.included.filter(json => json.type === 'note');
    this.isEditing = false;
  }
}
