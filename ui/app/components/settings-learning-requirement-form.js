import { action } from '@ember/object';
import TForm from './t-form';
import Validator from '../utils/validator';

export default class SettingsLearningRequirementFormComponent extends TForm {
  get validator() {
    const { learningRequirements, model } = this;
    return new Validator({
      ealr: [{
        type: 'required',
      }],
      seq: [{
        type: 'required',
      }, {
        type: 'format',
        regex: /\d+(\.\d+)?/,
        message: 'please provide a decimal sequence number e.g. 1.2',
      }, {
        type: 'valid',
        message: 'duplicates an existing sequence number',
        isValid(key, value) {
          return !learningRequirements.find(req => req.id !== model.id && req.attributes.seq === value);
        },
      }],
    });
  }

  @action
  onChange(event) {
    const {
      name,
      value,
    } = event.target;

    this.handleChange(name, value);
  }
}
