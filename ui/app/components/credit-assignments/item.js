import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {
  getHours,
  getCourseName,
} from '../../utils/credit-utils';

export default class CreateEditDialogComponent extends Component {
  @service('tinyData') tinyData;

  get courseName() {
    return getCourseName(this.args.creditAssignment, this.credit);
  }

  get hours() {
    const { creditAssignment } = this.args;
    return getHours(creditAssignment);
  }

  get credit() {
    const { creditAssignment } = this.args;
    return this.tinyData.get('credit', creditAssignment.relationships.credit.data.id);
  }
}
