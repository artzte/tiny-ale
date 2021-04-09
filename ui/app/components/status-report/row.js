import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { getAcademicStatusName, attendanceStatusName, STATUS_UNACCEPTABLE } from '../../utils/status-utils';

export default class StatusReportRow extends Component {
  @tracked isEditing = false;

  @tracked _notes = null;

  @tracked _status = null;

  @tracked pojo = null;

  @service('tinyData') tinyData;

  get isViable() {
    const attrSource = this.pojo || this._status || this.status;
    return attrSource.attributes[this.args.isViableField];
  }

  get hasStatus() {
    return this.isEditing || this.status;
  }

  get status() {
    const { month, statusHash } = this.args;

    return this._status || statusHash[month];
  }

  get model() {
    return this.pojo || this._status || this.status;
  }

  get academic() {
    const { status } = this;
    if (!status) return '';

    return getAcademicStatusName(status);
  }

  get isException() {
    const { status } = this;
    if (!status) return false;

    if (this.isEnrollmentStatus) {
      return status.attributes.academicStatus === STATUS_UNACCEPTABLE
        || status.attributes.attendanceStatus === STATUS_UNACCEPTABLE
        || status.attributes.metFteRequirements === false;
    }

    return status.attributes.academicStatus === STATUS_UNACCEPTABLE
    || status.attributes.heldPeriodicCheckins === false;
  }

  get attendance() {
    const { status } = this;
    if (!status) return '';

    return attendanceStatusName(status);
  }

  get isEnrollmentStatus() {
    return this.status && this.status.relationships.statusable.data.type === 'enrollment';
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
          metFteRequirements: true,
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

    const {
      month,
      statusable,
      statusablePathSegment,
    } = this.args;

    const statusPutPath = `/api/statuses/${statusablePathSegment}/${statusable.id}/${month}`;

    const response = await this.tinyData.fetch(statusPutPath, {
      method: 'PUT',
      data: this.pojo,
    });

    this._status = response.data;
    this._notes = response.included.filter(json => json.type === 'note');
    this.isEditing = false;
  }
}
