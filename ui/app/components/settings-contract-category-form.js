import TForm from './t-form';
import Validator from '../utils/validator';

export default class SettingsContractCategoryForm extends TForm {
  reportingOptions = [
    { name: 'Monthly', value: 'monthly' },
    { name: 'End of term', value: 'end-of-term' },
    { name: 'None', value: 'none' },
  ];

  validator = new Validator({
    name: [{ type: 'required' }],
    sequence: [{
      type: 'required',
    }, {
      type: 'format',
      regex: /\d+/,
    }],
  });
}
