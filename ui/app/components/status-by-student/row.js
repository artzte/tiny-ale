import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getAcademicStatusName } from '../../utils/status-utils';

export default class StatusByStudentRow extends Component {
  @tracked isEditing = false;

  statusOptions = ['Acceptable', 'Participating', 'Unacceptable'].map(name => ({ name, value: name.toLowerCase() }))

  get hasStatus() {
    return this.isEditing || this.status;
  }

  get status() {
    const { month, statusHash } = this.args;

    return statusHash[month];
  }

  get academic() {
    const { status } = this;
    if (!status) return '';

    return getAcademicStatusName(status);
  }

  get heldPeriodicCheckins() {
    const { status } = this;
    if (!status) return false;

    return status.attributes.heldPeriodicCheckins;
  }

  get notes() {
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
          academic: 'satisfactory',
          fte: 27.5,
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
    if (name === 'metFteRequirements') {
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
    console.log(this.pojo);
  }

  @action submitStatus(event) {
    event.preventDefault();
    console.warn(this.pojo)
  }
}
