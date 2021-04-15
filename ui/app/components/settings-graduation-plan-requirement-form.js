import { get } from '@ember/object';
import Validator from '../utils/validator';
import TForm from './t-form';

export default class SettingsGraduationPlanRequirementForm extends TForm {
  validator = new Validator({
    name: [{
      type: 'required',
    }],
  });

  statusOptions = [
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
  ];

  requirementTypeOptions = [
    { name: 'Credit', value: 'credit' },
    { name: 'Service', value: 'service' },
    { name: 'General', value: 'general' },
  ];

  get parentOptions() {
    const { graduationPlanRequirements, model } = this.args;
    return graduationPlanRequirements
      .filter(req => !get(req, 'relationships.parent.data.id'))
      .filter(req => req.id !== model.id)
      .map(req => ({
        name: req.attributes.name,
        value: req.id,
      }))
      .sort((r1, r2) => r1.name.localeCompare(r2.name));
  }
}
