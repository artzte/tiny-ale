/* eslint-disable class-methods-use-this */
import TForm from './t-form';

export default class CreditForm extends TForm {
  get statusOptions() {
    return ['Active', 'Inactive']
      .map(status => ({
        name: status,
        value: status.toLowerCase(),
      }));
  }

  get courseTypeOptions() {
    return ['Course', 'General']
      .map(type => ({
        name: type,
        value: type.toLowerCase(),
      }));
  }
}
