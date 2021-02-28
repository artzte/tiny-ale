import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ContractsIndexController extends Controller {
  queryParams = ['schoolYear', 'term', 'facilitator', 'category', 'status', 'offset', 'limit'];

  schoolYear = '';

  term = '';

  facilitator = '';

  category = '';

  status = '';

  offset = '0';

  limit = '30';

  @action filterContracts(queryParams) {
    this.setProperties({
      offset: 0,
      ...queryParams
    });
  }
}
