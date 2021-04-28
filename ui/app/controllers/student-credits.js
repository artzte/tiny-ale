import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StudentCreditsController extends Controller {
  @tracked creditAssignments;

  @action updateCreditAssignments(creditAssignments) {
    if (creditAssignments) {
      this.creditAssignments = creditAssignments;
    } else {
      this.send('refreshModel');
    }
  }
}
